<?php

function pk_single_post_details_cb($atts) {
  $userID = get_current_user_id();
  $postID = get_the_ID();
  $isFavorite = false;
  $userFavorites = get_user_meta($userID, 'favorites', false);
  if(count($userFavorites) > 0){
    $isFavorite = (in_array(strval($postID), $userFavorites));
  }

  ob_start();

  ?>
  <div class ="wp-block-udemy-plus-single-post-details">
    <div class ="single-post">
      <div class ="single-post-detail">
        <span>
          Price : 
          <?php echo(get_post_meta( $postID,'product_price', true)); ?>€
        </span>
        <div class ="button-data favorite-button"
          data-logged-in="<?php echo is_user_logged_in(); ?>"
          data-post-id="<?php echo $postID; ?>"
          data-user-id="<?php echo $userID; ?>"
          data-is-favorite="<?php echo $isFavorite; ?>"
          >
          <button> 
          <i class="bi bi-heart favorite"></i>
          </button>
        </div>
      </div>
    </div>
  </div> 
  <?php

  $output = ob_get_contents();
  ob_end_clean();

  return $output;
}