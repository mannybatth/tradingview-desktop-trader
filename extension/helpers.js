const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
const nativeInputCheckedSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
function setInputValue(input, value, isCheckBox) {
  if (isCheckBox) {
    if (input.value !== value) {
      nativeInputCheckedSetter.call(input, value);
      input.dispatchEvent(new Event('click', { bubbles: true }));
    }
  } else {
    try {
      nativeInputValueSetter.call(input, value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    } catch (e) {
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
}