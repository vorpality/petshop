/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./src/blocks/forgot-password/frontend.js ***!
  \************************************************/
document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.querySelector('#reset-form');
  formEl?.addEventListener('submit', async event => {
    event.preventDefault();
    const formFieldset = formEl.querySelector('fieldset');
    formFieldset.setAttribute('disabled', true);
    const submitStatus = formEl.querySelector('#submit-status');
    submitStatus.innerHTML = `
            <div class ="submit-status submit-status-info">
                Please wait! We are processing your request.
            </div>
        `;
    const formData = {
      email: formEl.querySelector('#f-email').value
    };
    const response = await fetch("petkarellas.local/wp-json/up/v1/forgot", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const responseJSON = await response.json();
    if (responseJSON.status === 2) {
      submitStatus.innerHTML = `
                <div class = "submit-status submit-status-success">
                    An email has been sent to the address provided.
                </div>
            `;
      //location.reload()
    } else {
      formFieldset.removeAttribute('disabled');
      submitStatus.innerHTML = `
            <div class ="submit-status submit-status-danger">
                Unable to send email! Please try again later.
            </div>
            `;
    }
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map