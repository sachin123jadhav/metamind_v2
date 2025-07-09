import { validateCaptcha } from "react-simple-captcha";

export const handleOnInput = (errorId) => {
  const errorElement = document.querySelector(errorId);
  if (errorElement) {
    errorElement.innerText = "";
  }
};

export const doSubmit = (errorId, inputId) => {
  const userCaptchaValue = document.getElementById(inputId).value;

  if (validateCaptcha(userCaptchaValue, false)) {
    return true;
  } else {
    const errorElement = document.querySelector(errorId);
    if (errorElement) {
      errorElement.innerText = "Captcha Does Not Match";
    }
    return false;
  }
};
