<?php

function ept_products_product_add_price($post){
  $oldPrice = get_post_meta($post->ID, 'product_price', true);
  ?>
  <tr class="form-field">
      <th>
      <label> <?php _e('Price', 'udemy-plus')?></label>
      </th>
      <td>
          <input type="number" name="ept_products_product_price" min="0" step="0.01" 
          value=
          <?php
          if($oldPrice) {echo $oldPrice;}
          else {echo("0.00");}
            ?> />
          <p class="description"><?php _e('The product\'s price', 'udemy-plus')?> </p>  
      </td>
  </tr>   
  <?php
}





