<?php

function ept_products_cart_render_cb($atts) {

  $title = esc_html($atts['title']);
  $total = 0;
  $userID = get_current_user_id();
  $heading = esc_html($atts['title']);
  $userCartedString = get_user_meta($userID, 'cartItem', false);
  $inCart = array_map('intval', $userCartedString);
  $uniqueItem[] = null;
  foreach($inCart as $cartItem){
    if(!in_array($cartItem,$uniqueItem)){
      $uniqueItem[]=$cartItem;
      $quantity[$cartItem] = 1;
    }
    else{
      $quantity[$cartItem] ++;
    }
  }
  $args = [
    'post__in'=> $uniqueItem,
    'post_type' => 'product',
    'posts_per_page' => $atts['count'],
  ];
  $query = new WP_Query($args);
  ob_start();
  ?>
  <div class="wp-block-ept-products-shopping-cart">
    <div class="inner-page-header">
      <h1><?php echo $heading; if(count($uniqueItem)<=1){echo" is empty.";} ?></h1> 
    </div> 
    <?php 
    if($query->have_posts()) {
      ?>
      <div class="content">
        <div class="posts">
          <?php
          while($query->have_posts()) {
            $query->the_post();
            $postID = get_the_ID();
            $availability = get_post_meta($postID,'product_avail',true);
            if($userID)$inCart = in_array(strval($postID),$userCartedString) ? true : false ;

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
                <div class = "button-aligner">
                  <div class = "product-info">
                    <span class="product-price">
                      <?php 
                      $price = get_post_meta( $postID,'product_price', true); 
                      $total += $price*$quantity[$postID];
                      echo($price);?>€
                    </span>
                    <span class="product-availability">
                      <?php  if($availability){ echo "Available"; } else { echo "Not available"; }?>
                    </span>
                  </div>
                  <div class ="button-data post-buttons"
                    data-logged-in="<?php echo is_user_logged_in(); ?>"
                    data-post-id="<?php echo $postID; ?>"
                    data-user-id="<?php echo $userID; ?>"
                    data-quantity="<?php echo $quantity[$postID]; ?>"
                  >
                  <span class = "quantity-text">
                    Quantity:
                  </span>
                  <button class="quantity-button quantity-minus">
                    <i class="bi bi-dash-square"></i>
                  </button>
                    <input type = "text" class="quantity-box" value="<?php echo $quantity[$postID] ?>">
                  </input>
                  <button class="quantity-button quantity-plus">
                    <i class="bi bi-plus-square"></i>
                  </button>
                  </div>
                </div>
              </div>
            </div>
            <?php
          }?>
      </div>
      <div class="info-block">
        <button id =  "remove-all-button"
          data-user-id="<?php echo $userID; ?>"
        >
          <?php echo(__('Remove all items from cart ', 'e-potis')); ?> <i class="bi bi-trash"></i>
        </button>
        <h3>
          <?php echo(__('Your total is : ', 'e-potis').($total)); ?> €
        </h3>
        <button id="checkout-button">
          <a href="<?php echo(home_url('/checkout'));?>">
            <?php echo(__('Checkout ', 'e-potis')); ?>
          </a>
        </button>
      </div>
    </div>
    <?php
    }?>
  </div>
  <?php
  wp_reset_postdata();

  $output = ob_get_contents();
  ob_end_clean();

  return $output;
}