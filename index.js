const { app, BrowserWindow, Menu, globalShortcut, dialog, net, session } = require('electron')
const windowStateKeeper = require("electron-window-state")
const path = require("path");
const log = require('electron-log');
const isDev = require('electron-is-dev')

let update_check_url = 'https://api.github.com/repos/unknown-marketwizards/tradingview-desktop/releases/latest'
const pkg = require("./package.json")
let mainWindow = null

/* block trial-notification, ads */
const filter = {
  urls: [
    'https://*.tradingview.com/static/bundles/trial-notification.*.js',
    'https://securepubads.g.doubleclick.net/gampad/ads?*'
  ]
}

let extensionId = null;

app.on('ready', async function () {
  let mainWindowStateKeeper = windowStateKeeper({
    defaultWidth: 1024,
    defaultHeight: 700
  })

  mainWindow = new BrowserWindow({
    x: mainWindowStateKeeper.x,
    y: mainWindowStateKeeper.y,
    width: mainWindowStateKeeper.width,
    height: mainWindowStateKeeper.height,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // mainWindow.webContents.openDevTools();
  mainWindowStateKeeper.manage(mainWindow);

  let windowSession = mainWindow.webContents.session

  windowSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = 'Chrome';
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  })

  windowSession.webRequest.onBeforeRequest(filter, (_details, _callback) => {
  })

  /* get lang */
  windowSession.cookies.get({
    url: 'https://www.tradingview.com',
    name: 'langCode'
  }).then((cookies) => {
    let langCode = 'www'
    if (cookies.length > 0) {
      langCode = cookies[0].value
    }

    mainWindow.loadURL('https://' + langCode + '.tradingview.com/chart/').then(_r => {
    })
  })

  log.info('attempting to load extension');

  const extensionPath = isDev
    ? path.resolve(app.getAppPath(), 'extension')
    : path.resolve(app.getAppPath(), '..', 'extension')

  await session.defaultSession.loadExtension(extensionPath).then(({ id }) => {
    extensionId = id
    log.info('LOADED EXTENSION', id);
  }).catch(err => {
    log.error('ERROR LOADING EXTENSION', err);
  })

  mainWindow.webContents.on('will-prevent-unload', function (event) {
    event.preventDefault()
  })

  mainWindow.webContents.on('did-navigate', function (event, url, httpResponseCode) {
    if (httpResponseCode !== 200) {
      return
    }

    /* set lang */
    const subCode = url.match('https://(.*?)\\.tradingview.com');
    if (subCode) {
      let code = subCode[1]
      windowSession.cookies.set({
        url: 'https://www.tradingview.com',
        name: 'langCode',
        value: code,
        expirationDate: Math.floor(new Date().getTime() / 1000) + 360000000
      }).then(_r => {
      })
    }
  })

  mainWindow.on('closed', function () {
    mainWindow = null
    globalShortcut.unregisterAll()

    if (extensionId) {
      session.defaultSession.removeExtension(extensionId);
    }
  })

  /* check update */
  checkUpdate()

})

function checkUpdate() {

  const request = net.request(update_check_url)

  request.on('error', (_error) => {
  })

  request.on('response', (response) => {
    if (response.statusCode === 200) {
      response.on('data', (chunk) => {

        const obj = JSON.parse(chunk.toString());
        if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("html_url") || !obj.hasOwnProperty("body")) {
          return
        }

        if (versionCompare(pkg.version, obj.name)) {
          dialog.showMessageBox(mainWindow, {
            type: 'info',
            message: 'New Version Available',
            detail: obj.name + '\n' + obj.body,
            buttons: ['ok', 'cancel']
          }).then((index) => {
            if (index.response === 0) {
              openUpdatePage(obj.html_url)
            }
          })
        }
      })
    }

  })
  request.end()
}

function openUpdatePage(url) {

  let win = new BrowserWindow({ width: 640, height: 480 })

  win.on("close", function () {
    win = null
  })
  win.loadURL(url).then(_r => {
  })
  win.show()
}

function versionCompare(curr, promote) {
  if (!curr) return false
  let currVer = curr || '0.0.0'
  let promoteVer = promote || '0.0.0'
  if (currVer === promoteVer) return false
  let currVerArr = currVer.split('.')
  let promoteVerArr = promoteVer.split('.')
  let len = Math.max(currVerArr.length, promoteVerArr.length)
  let proVal, curVal
  for (let i = 0; i < len; i++) {
    proVal = ~~promoteVerArr[i];
    curVal = ~~currVerArr[i];
    if (proVal < curVal) {
      return false
    } else if (proVal > curVal) {
      return true
    }
  }
  return false
}