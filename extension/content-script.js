console.log(`Content script loaded.`);

const discordWebHook = 'https://discord.com/api/webhooks/868580300530286624/QUpDy78u2_eV_6HcHxgzk-psPHm9w7cDPplZDbqmre36fnVvMCPSYjKL7zXzL3ePCsHc';
const patternWebhookContent = {
  "New Pattern Found": {
    "Long": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "New Pattern"
          },
          {
            "name": "side",
            "value": "Long",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          },
          {
            "name": "entry",
            "value": "{{entry}}",
            "inline": true
          },
          {
            "name": "target1",
            "value": "{{target1}}",
            "inline": true
          },
          {
            "name": "target2",
            "value": "{{target2}}",
            "inline": true
          },
          {
            "name": "stoploss",
            "value": "{{stoploss}}",
            "inline": true
          }
        ]
      }]
    },
    "Short": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "New Pattern"
          },
          {
            "name": "side",
            "value": "Short",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          },
          {
            "name": "entry",
            "value": "{{entry}}",
            "inline": true
          },
          {
            "name": "target1",
            "value": "{{target1}}",
            "inline": true
          },
          {
            "name": "target2",
            "value": "{{target2}}",
            "inline": true
          },
          {
            "name": "stoploss",
            "value": "{{stoploss}}",
            "inline": true
          }
        ]
      }]
    }
  },
  "Entered Position": {
    "Long": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "Entered Position"
          },
          {
            "name": "side",
            "value": "Long",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          },
          {
            "name": "entry",
            "value": "{{entry}}",
            "inline": true
          },
          {
            "name": "target1",
            "value": "{{target1}}",
            "inline": true
          },
          {
            "name": "target2",
            "value": "{{target2}}",
            "inline": true
          },
          {
            "name": "stoploss",
            "value": "{{stoploss}}",
            "inline": true
          }
        ]
      }]
    },
    "Short": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "Entered Position"
          },
          {
            "name": "side",
            "value": "Short",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          },
          {
            "name": "entry",
            "value": "{{entry}}",
            "inline": true
          },
          {
            "name": "target1",
            "value": "{{target1}}",
            "inline": true
          },
          {
            "name": "target2",
            "value": "{{target2}}",
            "inline": true
          },
          {
            "name": "stoploss",
            "value": "{{stoploss}}",
            "inline": true
          }
        ]
      }]
    }
  },
  "Reached Target 1": {
    "Long": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "Reached Target 1"
          },
          {
            "name": "side",
            "value": "Long",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          },
          {
            "name": "target1",
            "value": "{{target1}}",
            "inline": true
          }
        ]
      }]
    },
    "Short": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "Reached Target 1"
          },
          {
            "name": "side",
            "value": "Short",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          },
          {
            "name": "target1",
            "value": "{{target1}}",
            "inline": true
          }
        ]
      }]
    }
  },
  "Reached Target 2": {
    "Long": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "Reached Target 2"
          },
          {
            "name": "side",
            "value": "Long",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          },
          {
            "name": "target2",
            "value": "{{target2}}",
            "inline": true
          }
        ]
      }]
    },
    "Short": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "Reached Target 2"
          },
          {
            "name": "side",
            "value": "Short",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          },
          {
            "name": "target2",
            "value": "{{target2}}",
            "inline": true
          }
        ]
      }]
    }
  },
  "Stop-loss": {
    "Long": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "Stop-loss"
          },
          {
            "name": "side",
            "value": "Long",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          },
          {
            "name": "stoploss",
            "value": "{{stoploss}}",
            "inline": true
          }
        ]
      }]
    },
    "Short": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "Stop-loss"
          },
          {
            "name": "side",
            "value": "Short",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          },
          {
            "name": "stoploss",
            "value": "{{stoploss}}",
            "inline": true
          }
        ]
      }]
    }
  },
  "Invalidated Pattern": {
    "Long": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "Invalidated"
          },
          {
            "name": "side",
            "value": "Long",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          }
        ]
      }]
    },
    "Short": {
      "username": "Alert Bot",
      "embeds": [{
        "fields": [
          {
            "name": "ticker",
            "value": "{{ticker}}",
            "inline": true
          },
          {
            "name": "timeframe",
            "value": "{{timeframe}}",
            "inline": true
          },
          {
            "name": "time",
            "value": "{{time}}",
            "inline": true
          },
          {
            "name": "pattern",
            "value": "{{pattern}}"
          },
          {
            "name": "action",
            "value": "Invalidated"
          },
          {
            "name": "side",
            "value": "Short",
            "inline": true
          },
          {
            "name": "close",
            "value": "{{close}}",
            "inline": true
          }
        ]
      }]
    }
  }
}


function fillDefaults() {
  const webHookCheckbox = $('input[name="webhook-toggle"]');
  if (!webHookCheckbox.prop('checked')) {
    webHookCheckbox.click();
  }
  document.querySelector('input[name="webhook-url"]').value = discordWebHook;
  document.querySelector('input[name="webhook-url"]').dispatchEvent(new Event('input'));
}

function onLongButtonClick() {
  const isCrypto = $('div[class^="titleWrapper-"]').text().includes('BINANCE');

  const json = isCrypto ? { "side": "long", "symbol": "{{ticker}}", "crypto": true } : { "side": "long", "symbol": "{{ticker}}" };
  const jsonEscape = JSON.stringify(json).replace(/"/g, '\\"');

  fillDefaults();
  document.querySelector('input[name="alert-name"]').value = 'Long {{ticker}} triggered';
  document.querySelector('input[name="alert-name"]').dispatchEvent(new Event('input'));
  document.querySelector('textarea[name="description"]').value = `{"content": "${jsonEscape}", "username": "Alert Bot"}`;
  document.querySelector('textarea[name="description"]').dispatchEvent(new Event('input'));
}

function onShortButtonClick() {
  const isCrypto = $('div[class^="titleWrapper-"]').text().includes('BINANCE');

  const json = isCrypto ? { "side": "short", "symbol": "{{ticker}}", "crypto": true } : { "side": "short", "symbol": "{{ticker}}" };
  const jsonEscape = JSON.stringify(json).replace(/"/g, '\\"');

  fillDefaults();
  document.querySelector('input[name="alert-name"]').value = 'Short {{ticker}} triggered';
  document.querySelector('input[name="alert-name"]').dispatchEvent(new Event('input'));
  document.querySelector('textarea[name="description"]').value = `{"content": "${jsonEscape}", "username": "Alert Bot"}`;
  document.querySelector('textarea[name="description"]').dispatchEvent(new Event('input'));
}

const $container = $('<div style="margin-bottom: 15px;"></div>');
const $longBtn = $('<div class="js-dialog__action-click js-dialog__no-drag tv-button tv-button--primary js-submit-button tv-button--loader"><span class="tv-button__text">Long</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span></div>').click(onLongButtonClick);
const $shortBtn = $('<div class="js-dialog__action-click js-dialog__no-drag tv-button tv-button--primary js-submit-button tv-button--loader"><span class="tv-button__text">Short</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span></div>').click(onShortButtonClick);

document.arrive(".js-alert-form", function () {

  $container.append($longBtn);
  $container.append($shortBtn);
  $(".tv-control-fieldset").prepend($container);

});

function onDefaultsBtnClick() {

  const cellsObject = $('div[data-dialog-name="HPPu02"] div[class^="content-"] input').parents('div[class^=cell-]')
  const cells = Array.from(cellsObject).reverse();

  setInputValue(cells[0].querySelector('input'), '-4');

  const allowedPatterns = ['Gartley', 'Butterfly', 'Deep Crab', 'Shark', 'Cypher', '5-0', '3-Drive', 'AB=CD', 'Double Top', 'Double Bottom', 'Descending Triangle', 'Ascending Triangle', 'Symmetrical Triangle'];
  const disallowedPatterns = ['Bat', 'Alternate Bat', 'Crab'];
  const patternAlerts = Object.keys(patternWebhookContent);
  cells.forEach((cell, index) => {
    if (allowedPatterns.includes(cell.innerText)) {
      setInputValue(cell.querySelector('input'), true, true);
    } else if (disallowedPatterns.includes(cell.innerText)) {
      setInputValue(cell.querySelector('input'), false, true);
    }

    if (patternAlerts.includes(cell.innerText)) {
      const contentLong = JSON.stringify(patternWebhookContent[cell.innerText].Long);
      const contentShort = JSON.stringify(patternWebhookContent[cell.innerText].Short);
      setInputValue(cells[index + 1].querySelector('input'), contentLong);
      setInputValue(cells[index + 2].querySelector('input'), contentShort);
    }
  });
}

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
const nativeInputCheckedSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
function setInputValue(input, value, isCheckBox) {
  if (isCheckBox) {
    if (input.value !== value) {
      nativeInputCheckedSetter.call(input, value);
      input.dispatchEvent(new Event('click', { bubbles: true }));
    }
  } else {
    nativeInputValueSetter.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }
}

const $container2 = $('<div style="margin-bottom: 15px;"></div>');
const $setDefaultsBtn = $('<div class="js-dialog__action-click js-dialog__no-drag tv-button tv-button--primary js-submit-button tv-button--loader"><span class="tv-button__text">Set Defaults</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span></div>').click(onDefaultsBtnClick);

document.arrive('div[data-dialog-name="HPPu02"]', function () {

  $container2.append($setDefaultsBtn);
  $('div[data-dialog-name="HPPu02"] div[class^="content-"]').prepend($container2);

});