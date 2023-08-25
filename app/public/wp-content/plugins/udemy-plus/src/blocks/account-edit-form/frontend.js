document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.querySelectorAll('.open-confirmation-modal')
  const modalEl = document.querySelector('.wp-block-udemy-plus-confirmation-modal')
  const modalCloseEl = document.querySelectorAll(
      '.modal-overlay, .modal-btn-close'
  )
 

  openModalBtn.forEach( el => {
      el.addEventListener('click', event => {
          event.preventDefault()
          modalEl.classList.add('modal-show')
      })
  })

  modalCloseEl.forEach( el => {
      el.addEventListener('click', event => {
          event.preventDefault()

          modalEl.classList.remove('modal-show')
      })
  }) 

  const data_replace_form = document.querySelector('#data-replace-form')


  
  data_replace_form?.addEventListener('submit', async event => {
      event.preventDefault()

      const data_form_fieldset = data_replace_form.querySelector('fieldset')

      data_form_fieldset.setAttribute('disabled', true)



      const data_replace_status = data_replace_form.querySelector('#form-status')
      data_replace_status.innerHTML = `
          <div class ="modal-status modal-status-info">
              Please wait! We are processing your request.
          </div>
      `   

      const formData = {
          user_login: data_replace_form.querySelector('#dr-username').value,
          user_username:data_replace_form.querySelector('#dr-email').value,
          user_sex:data_replace_form.querySelector('#dr-sex').value,
          user_newsletter:data_replace_form.querySelector('#dr-newsletter').value,
          password: data_replace_form.querySelector('#dr-password').value
      }

      const response = await fetch(up_auth_rest.signin, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });
      
      const responseJSON = await response.json();

      if(responseJSON.status === 2) {
          signinStatus.innerHTML = `
              <div class = "modal-status modal-status-success">
                  Success! You are now logged in.
              </div>
          `
          location.reload()
      } else {
          signinFieldset.removeAttribute('disabled')
          signinStatus.innerHTML = `
          <div class ="modal-status modal-status-danger">
              Invalid credentials! Please try again later.
          </div>
          `
      }
  })
})