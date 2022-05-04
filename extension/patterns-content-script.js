console.log(`Patterns content script loaded.`);

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

const $container = $('<div style="margin-bottom: 15px;"></div>');
const $setDefaultsBtn = $('<div class="js-dialog__action-click js-dialog__no-drag tv-button tv-button--primary js-submit-button tv-button--loader"><span class="tv-button__text">Set Defaults</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span></div>').click(onDefaultsBtnClick);

document.arrive('div[data-dialog-name="HPPu02"]', function () {

  $container.append($setDefaultsBtn);
  $('div[data-dialog-name="HPPu02"] div[class^="content-"]').prepend($container);

});