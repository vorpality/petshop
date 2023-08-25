<?php

function pk_category_tree_render_cb($atts) {
  $uncat = get_term_by('name', 'uncategorized', 'category');
  $featured = get_term_by('name', 'homepage', 'category');
  $args = ( array(
    'hide_empty' => false,
    'exclude' => $uncat->term_id .','. $featured->term_id,
    'hierarchical' => true,
    'title_li'     => '',
    'echo' => '0'
  ) );

  $terms = wp_list_categories($args);
 
  

  ob_start();
  ?>
    <div class="wp-block-udemy-plus-category-tree sidebar-categories !mt-0">
      <h1><?php echo($terms); ?></h1>
    </div>
  <?php

  $output = ob_get_contents();
  ob_end_clean();

  return $output;
}