<?php

function ept_products_product_add_meta_boxes_cb($post){
  add_meta_box('price', 'Product Price', 'ept_products_product_add_price');
  add_meta_box('availability', 'Product Availability', 'ept_products_product_add_availability');  
  //add_meta_box('image', 'Product Image', 'ept_products_product_add_image');
}
   