<?php

function ept_products_mini_cart_render_cb($atts) {

  $title = esc_html($atts['title']);

  $userID = get_current_user_id();
  $heading = esc_html($atts['title']);
  if (!is_user_logged_in()){
    return '';
  }
    $userCartedString = get_user_meta($userID, 'cartItem', false);
    $totalCartItems = count($userCartedString);
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
    if($userID>0){
      ?>
      <div class="wp-block-ept-products-mini-cart">
        <div class="content" data-user-id="<?php echo $userID; ?>">
          <div class="icon-coupler">
            <button class = "mini-cart-icon">
              <a href="<?php echo(home_url('/cart'));?>">
                <div 
                  class = "mini-cart-bubble"
                  data-quantity="<?php echo $totalCartItems; ?>"
                >
                </div>
                <i class="bi bi-cart2"></i> 
              </a>
            </button>
          </div>
          <div class="posts">
            <?php 
            if($query->have_posts()) {
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
                          <?php echo(get_post_meta( $postID,'product_price', true)); ?>€
                        </span>
                      </div>
                      <div class ="button-data mini-post-buttons"
                        data-logged-in="<?php echo is_user_logged_in(); ?>"
                        data-post-id="<?php echo $postID; ?>"
                        data-user-id="<?php echo $userID; ?>"
                        data-quantity="<?php echo $quantity[$postID]; ?>"
                      >
                        <input type = "text" class="mini-quantity-box" value="<?php echo $quantity[$postID] ?>"></input>
                      </div>
                    </div>
                  </div>
                </div>
                <hr>
                <?php
              }
            }
            ?>
            <button id="checkout-button">
              <a href="<?php echo(home_url('/checkout'));?>">
                Checkout
              </a>
            </button>
          </div>
        </div>
      </div>
      <?php
      wp_reset_postdata();
    }
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
  
}