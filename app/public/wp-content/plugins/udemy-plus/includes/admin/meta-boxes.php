<?php

function pk_product_add_meta_boxes_cb($post){
  add_meta_box('price', 'Product Price', 'pk_product_add_price');
  add_meta_box('availability', 'Product Availability', 'pk_product_add_availability');  
  add_meta_box('image', 'Product Image', 'pk_product_add_image');
}
   