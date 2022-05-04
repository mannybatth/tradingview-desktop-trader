console.log(`Content script loaded.`);

const discordWebHook = 'https://discord.com/api/webhooks/868580300530286624/QUpDy78u2_eV_6HcHxgzk-psPHm9w7cDPplZDbqmre36fnVvMCPSYjKL7zXzL3ePCsHc';

function fillDefaults() {
  const webHookCheckbox = $('input[name="webhook-toggle"]');
  if (!webHookCheckbox.prop('checked')) {
    webHookCheckbox.click();
  }
  setInputValue(document.querySelector('input[name="webhook-url"]'), discordWebHook);
}

function onLongButtonClick() {
  const isCrypto = $('div[class^="titleWrapper-"]').text().includes('BINANCE');

  const json = isCrypto ? { "side": "long", "symbol": "{{ticker}}", "crypto": true } : { "side": "long", "symbol": "{{ticker}}" };
  const jsonEscape = JSON.stringify(json).replace(/"/g, '\\"');

  fillDefaults();
  setInputValue(document.querySelector('input[name="alert-name"]'), 'Long {{ticker}} triggered');
  setInputValue(document.querySelector('textarea[name="description"]'), `{"content": "${jsonEscape}", "username": "Alert Bot"}`);
}

function onShortButtonClick() {
  const isCrypto = $('div[class^="titleWrapper-"]').text().includes('BINANCE');

  const json = isCrypto ? { "side": "short", "symbol": "{{ticker}}", "crypto": true } : { "side": "short", "symbol": "{{ticker}}" };
  const jsonEscape = JSON.stringify(json).replace(/"/g, '\\"');

  fillDefaults();
  setInputValue(document.querySelector('input[name="alert-name"]'), 'Short {{ticker}} triggered');
  setInputValue(document.querySelector('textarea[name="description"]'), `{"content": "${jsonEscape}", "username": "Alert Bot"}`);
}

const $tdContainer = $('<div style="margin-bottom: 15px;"></div>');
const $longBtn = $('<div class="js-dialog__action-click js-dialog__no-drag tv-button tv-button--primary js-submit-button tv-button--loader"><span class="tv-button__text">Long</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span></div>').click(onLongButtonClick);
const $shortBtn = $('<div class="js-dialog__action-click js-dialog__no-drag tv-button tv-button--primary js-submit-button tv-button--loader"><span class="tv-button__text">Short</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span></div>').click(onShortButtonClick);

document.arrive(".js-alert-form", function () {

  $tdContainer.append($longBtn);
  $tdContainer.append($shortBtn);
  $(".tv-control-fieldset").prepend($tdContainer);

});
