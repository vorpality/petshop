<?php

function ept_uf_account_edit_form_render_cb($atts) {
  $user = wp_get_current_user();
  $nsltr = !!get_user_meta($user->ID, 'newsletter', false);
  ob_start();
  ?>
  <div class="wp-block-ept-user-flow-account-edit-form">

  <form method = "post"
    id="data-replace-form"
    action = ""
    autocomplete="off"
  >
  <div id ='form-status'>
  </div>
    <fieldset>
  <h3>Όνομα χρήστη</h3>
   

    <h3>E-mail</h3>
    <input 
      value="<?php echo esc_html($user->user_email); ?>"
      type="text" 
      name="user_email" 
      id="dr-email">
    </input>
    <div class="change-pw">
      <h3>New Password</h3>

      <input 
        value=""
        type="password" 
        name="new-password" 
        id="dr-new-password">
      </input>
      
      
      <h3>Confirm New Password</h3>

      <input 
        value=""
        type="password" 
        name="verify-new-password" 
        id="dr-verify-password">
      </input>
    </div>
    
    <h3>Current Password</h3>

    <input 
      value=""
      type="password" 
      name="old-password" 
      id="dr-old-password">
    </input>
    <div class = "check_box_container">
      <label for="newsletter_box"> Εγγραφή στο newsletter  </label>
      <input 
        id="dr-newsletter" 
        name="newsletter"
        type="checkbox"
        value="<?php echo $nsltr?>"
      />
      <input type="hidden" name="form-id" value = "011"></input>
      <input type="hidden" id="user-id" value = "<?php echo $user->ID?>"></input>
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