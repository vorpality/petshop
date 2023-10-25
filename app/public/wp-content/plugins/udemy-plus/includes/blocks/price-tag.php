<?php

function pk_price_tag_cb($atts) {
  $postID = get_the_ID();


  ob_start();

  ?>
  <div class="wp-block-udemy-plus-price-tag">
    <span>
      <?php echo(get_post_meta( $postID,'product_price', true)); ?>€
    </span>
  </div>
  <?php

  $output = ob_get_contents();
  ob_end_clean();

  return $output;
}