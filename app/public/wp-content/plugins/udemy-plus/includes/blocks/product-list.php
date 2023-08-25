<?php

function pk_product_list_cb($atts) {
  $title = esc_html($atts['title']);
  $categoryIDs = array_map(function($term) {
    return $term['id'];
  }, $atts['categories']);

  $args = [
    'post_type' => 'product',
    'posts_per_page' => $atts['count'],
    'cat' => ''
  ];

  if (!empty($categoryIDs)) {
    foreach($categoryIDs as $cat)
    $args['cat'] .= $cat .',' ;
  }

 

  $query = new WP_Query($args);
  ob_start();
  ?>
  <div class="wp-block-udemy-plus-product-list">
   <?php 

    if($query->have_posts()) {
      while($query->have_posts()) {
        $query->the_post();
          ?>
          <div class ="single-post">
            <a class ="single-post-image" href= "<?php the_permalink(); ?>">
              <?php the_post_thumbnail('thumbnail'); ?>
            </a>
            <div class ="single-post-detail">
              <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
              </a>
            </div>
          </div>
          <?php
        }
      }

  ?>
  </div>
  <?php

  wp_reset_postdata();

  $output = ob_get_contents();
  ob_end_clean();

  return $output;
}