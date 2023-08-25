<?php

function pk_user_modal_render_cb($atts) {
  if(!is_user_logged_in()) {
    return '';
  }

  ob_start();
  ?>
  
  <div class="wp-block-udemy-plus-user-modal">
    <div class="modal-container">
      <div class="modal-overlay"></div>

      <span class="modal-trick">&#8203;</span>

      <div class="modal-content">
        <button class="modal-btn-close" type="button">
          <i class="bi bi-x"></i>
        </button>
        <!-- Tabs -->
        <ul class="elements">
          <!-- Login Tab -->
          <li>
            <a href="/my-account" class="active-tab">
              <button class = "button-element"> My account</button>
            </a>
          </li>
          <li>
            <a href="/favorites" class="active-tab">
              <button class = "button-element"> Favorites</button>
            </a>
          </li>
          <li>
            <a href="/" class="active-tab">
              <button class = "button-element"> Log out</button>
            </a>
          </li>
        </ul>          
      </div>
    </div>
  </div>
  <?php

  $output = ob_get_contents();
  ob_end_clean();

  return $output;
}