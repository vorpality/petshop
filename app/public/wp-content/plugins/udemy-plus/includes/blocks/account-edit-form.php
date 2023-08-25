<?php

function pk_account_edit_form_cb($atts) {
  $user = wp_get_current_user();

  ob_start();
  ?>
  <div class="wp-block-udemy-plus-account-edit-form">
  <form id="data-replace-form"  autocomplete="off">
    <fieldset>
  <h3>Όνομα χρήστη</h3>

    <input 
      value="<?php echo esc_html($user->user_login); ?>"
      type="text" 
      name="username" 
      id="dr-username">
    </input>


    <h3>Φύλο</h3>
    <p class="sex-dropdown">
      <select name="user[sex]" id="dr-sex">
        <option value="" label=" "></option>
        <option value="male">Άνδρας</option>
        <option value="female">Γυναίκα</option>
      </select>
    </p>
  

    <h3>E-mail</h3>
    <input 
      value="<?php echo esc_html($user->user_email); ?>"
      type="text" 
      name="user_email" 
      id="dr-email">
    </input>

    <h3>Password</h3>

    <input 
      value=""
      type="password" 
      name="password" 
      id="dr-password">
    </input>
    
    <div class = "check_box_container">
    <label for="newsletter_box"> Εγγραφή στο newsletter  </label>
      <input 
        id="dr-newsletter" 
        type="checkbox"/>
        <div class='btn-wrapper'>
      <button type="submit" class='open-confirmation-modal'>Αποθήκευση</button>
    </div>
    </div>
</fieldset>
</form>
</div>
  <?php

  $output = ob_get_contents();
  ob_end_clean();
  
  return $output;
}