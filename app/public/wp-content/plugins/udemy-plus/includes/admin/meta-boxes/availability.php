<?php

function pk_product_add_availability($post){
  $oldAvail = get_post_meta($post->ID, 'product_avail', true);
  ?>
    <label for="Available">Availability :</label>
      <select name="pk_product_avail">
      <option value = 1
          <?php if($oldAvail == 1) {echo "selected";} ?> > 
          <?php _e('Available', 'udemy-plus') ?> </option>
        <option value = 0
          <?php if($oldAvail == 0) {echo "selected";} ?> >
          <?php _e('Not Available', 'udemy-plus') ?> </option>
          <p class="description"><?php _e('The product\'s availability', 'udemy-plus')?> </p>  
</select>
  <?php
}

