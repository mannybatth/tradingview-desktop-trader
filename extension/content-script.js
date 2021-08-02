console.log(`Content script loaded.`);

const discordWebHook = 'https://discord.com/api/webhooks/868580300530286624/QUpDy78u2_eV_6HcHxgzk-psPHm9w7cDPplZDbqmre36fnVvMCPSYjKL7zXzL3ePCsHc';

function fillDefaults() {
  const webHookCheckbox = $('input[name="webhook-toggle"]');
  if (!webHookCheckbox.prop('checked')) {
    webHookCheckbox.click();
  }
  document.querySelector('input[name="webhook-url"]').value = discordWebHook;
  document.querySelector('input[name="webhook-url"]').dispatchEvent(new Event('input'));
}

function onLongButtonClick() {
  fillDefaults();
  document.querySelector('input[name="alert-name"]').value = 'Long {{ticker}} triggered';
  document.querySelector('input[name="alert-name"]').dispatchEvent(new Event('input'));
  document.querySelector('textarea[name="description"]').value = `{"content": "{\\"side\\": \\"long\\",\\"symbol\\": \\"{{ticker}}\\"}", "username": "Alert Bot"}`;
  document.querySelector('textarea[name="description"]').dispatchEvent(new Event('input'));
}

function onShortButtonClick() {
  fillDefaults();
  document.querySelector('input[name="alert-name"]').value = 'Short {{ticker}} triggered';
  document.querySelector('input[name="alert-name"]').dispatchEvent(new Event('input'));
  document.querySelector('textarea[name="description"]').value = `{"content": "{\\"side\\": \\"short\\",\\"symbol\\": \\"{{ticker}}\\"}", "username": "Alert Bot"}`;
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