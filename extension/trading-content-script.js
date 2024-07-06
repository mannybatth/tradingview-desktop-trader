console.log(`Content script loaded.`);

const discordWebHook = 'https://discord.com/api/webhooks/868580300530286624/QUpDy78u2_eV_6HcHxgzk-psPHm9w7cDPplZDbqmre36fnVvMCPSYjKL7zXzL3ePCsHc';

async function fillWebhookUrl() {
  // Click id=alert-dialog-tabs__notifications
  document.querySelector('button[id="alert-dialog-tabs__notifications"]').click();

  // Enable checkbox input[data-name="webhook"] if its not enabled
  const webhookCheckbox = document.querySelector('input[data-name="webhook"]');
  if (!webhookCheckbox.checked) {
    setInputValue(webhookCheckbox, true, true);
  }

  await sleep(200);

  // Fill input[name="webhook-url"]
  const webhookUrlInput = document.querySelector('input[id="webhook-url"]');
  setInputValue(webhookUrlInput, discordWebHook);
}

function onLongButtonClick() {
  // const isCrypto = $('div[class^="titlesWrapper-"]').text().includes('BINANCE');
  const isCrypto = false;

  const json = isCrypto ? { "side": "long", "symbol": "{{ticker}}", "crypto": true } : { "type": "call", "symbol": "{{ticker}}" };
  const jsonEscape = JSON.stringify(json).replace(/"/g, '\\"');

  setInputValue(document.querySelector('input[id="alert-name"]'), 'Long {{ticker}} triggered');
  setInputValue(document.querySelector('textarea[id="alert-message"]'), `{"content": "${jsonEscape}", "username": "Alert Bot"}`);
  fillWebhookUrl();
}

function onShortButtonClick() {
  // const isCrypto = $('div[class^="titlesWrapper-"]').text().includes('BINANCE');
  const isCrypto = false;

  const json = isCrypto ? { "side": "short", "symbol": "{{ticker}}", "crypto": true } : { "type": "put", "symbol": "{{ticker}}" };
  const jsonEscape = JSON.stringify(json).replace(/"/g, '\\"');

  setInputValue(document.querySelector('input[id="alert-name"]'), 'Short {{ticker}} triggered');
  setInputValue(document.querySelector('textarea[id="alert-message"]'), `{"content": "${jsonEscape}", "username": "Alert Bot"}`);
  fillWebhookUrl();
}

const $tdContainer = $('<div style=""></div>');
const $longBtn = $(
  '<button type="submit" style="margin-left: 0px;" data-name="submit" class="submitBtn-RHTYtJvz button-D4RPB3ZC small-D4RPB3ZC green-D4RPB3ZC primary-D4RPB3ZC apply-overflow-tooltip apply-overflow-tooltip--check-children-recursively apply-overflow-tooltip--allow-text apply-common-tooltip" data-overflow-tooltip-text="Long "><span class="content-D4RPB3ZC">Long</span></button>'
).click(onLongButtonClick);
const $shortBtn = $(
  '<button type="submit" data-name="submit" class="submitBtn-RHTYtJvz button-D4RPB3ZC small-D4RPB3ZC red-D4RPB3ZC primary-D4RPB3ZC apply-overflow-tooltip apply-overflow-tooltip--check-children-recursively apply-overflow-tooltip--allow-text apply-common-tooltip" data-overflow-tooltip-text="Short "><span class="content-D4RPB3ZC">Short</span></button>'
).click(onShortButtonClick);

document.arrive('div[data-name="alerts-create-edit-dialog"]', function () {

  console.log('Dialog arrived.');

  $tdContainer.append($longBtn);
  $tdContainer.append($shortBtn);
  $('div[data-name="alerts-create-edit-dialog"] div[class^="buttons-"]').prepend($tdContainer);

});
