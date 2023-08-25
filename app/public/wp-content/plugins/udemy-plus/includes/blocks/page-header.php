<?php

function up_page_header_render_cb($atts) {
  $heading = esc_html($atts['content']);
  $userID = get_current_user_id();
  $userFavorites = get_user_meta($userID, 'favorites', false);
  if($atts['showCategory']) {
    $heading = substr(get_the_archive_title(),10);
  }


  $category = get_queried_object_id();
  if( $category== null){
    $category = 11;
  }
    $args = [
    'post_type' => 'product',
    'posts_per_page' => $atts['count'],
    'cat' => $category
  ];

  $query = new WP_Query($args);

  ob_start();

  ?>

  <div class="wp-block-udemy-plus-page-header">
    <div class="inner-page-header">
      <h1><?php echo $heading; ?></h1>
    </div> 
    <div class="posts">
   <?php 

    if($query->have_posts()) {
      while($query->have_posts()) {
        $query->the_post();
        $postID = get_the_ID();
        if($userID)$isFavorite = in_array(strval($postID),$userFavorites) ? true : false 
          ?>
          <div class ="single-post">
            <div class ="image-container">
              <a class ="single-post-image" href= "<?php the_permalink(); ?>">
                <?php the_post_thumbnail('thumbnail'); ?>
              </a>
            </div>
            <div class ="single-post-detail">
              <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
              </a>
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
          <?php
        }
      }

  ?>
  </div>
    </div>
  <?php

  $output = ob_get_contents();
  ob_end_clean();

  return $output;
}