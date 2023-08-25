<?php

function pk_favorite_posts_cb($atts) {
  $userID = get_current_user_id();
  $favoritePostMetaArray = get_user_meta($userID, 'favorites', false);
  $favorites = array_map('intval', $favoritePostMetaArray);
  ob_start();
  ?>
<div class="wp-block-udemy-plus-favorite-posts">
  <div class = "inner-page-header">
    <h1> Favorites </h1>
  </div>
  <div class="posts">
   <?php 
    foreach( $favorites as $postID ) {
      
          ?>
          <div class ="single-post">
            <div class ="image-container">
              <a class ="single-post-image" href= "<?php echo get_the_permalink($postID); ?>">
                <?php echo( get_the_post_thumbnail($postID, 'thumbnail')); ?>
              </a>  
            </div>
            <div class ="single-post-detail">
              <a href="<?php echo get_the_permalink($postID); ?>">
                <?php echo get_the_title($postID); ?>
              </a>
              <span>
                Price : 
                <?php echo(get_post_meta( $postID,'product_price', true)); ?>€
              </span>
            </div>
          </div>
          <?php
        }
      

  ?>
  </div>
  </div>
  <?php

  $output = ob_get_contents();
  ob_end_clean();

  return $output;

      }

