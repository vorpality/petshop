<?php

function ept_products_publish_product_meta($new_status, $old_status, $post){
  ept_products_publish_product_price($new_status, $old_status, $post);
  ept_products_publish_product_avail($new_status, $old_status, $post);
}

function ept_products_publish_product_price($new_status, $old_status, $post){
  if(!isset($_POST['ept_products_product_price'])) {
    return;
}
  if ( $new_status == 'publish') {
    update_post_meta(
      $post->ID, 
      'product_price', 
      $_POST['ept_products_product_price']
    );
  }
}

function ept_products_publish_product_avail($new_status, $old_status, $post){
  if(!isset($_POST['ept_products_product_avail'])) {
    return;
}
  if ( $new_status == 'publish') {
    update_post_meta(
      $post->ID, 
      'product_avail', 
      $_POST['ept_products_product_avail']
    );
  }
}