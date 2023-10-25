<?php

function ept_contact_form_render_cb($atts) {
$fields = $atts['fieldNumber'];
$sizes = $atts['boxSizes'];
$names= $atts['fieldNames'];
$required = $atts['isRequired'];
$receiverEmail = $atts['webmaster_email'];
$bgColor = esc_attr($atts['bg_color']);
$textColor = esc_attr($atts['text_color']);

$styleApplication = "background-color:{$bgColor};color:{$textColor};";
$buttonStyles ="background-color:{$bgColor};outline: 2px solid {$textColor};";

ob_start();
  ?>
  <div class="wp-block-ept-contact-form" style= "<?php echo $styleApplication;?>">
    <form method = "post"
          action = ""
    >
      <?php
        for($i=0; $i<$fields; $i++){
          echo("<label>".$names[$i]."</label>");
          if($sizes[$i] == 3){?>
            <textarea 
              class="larger-textbox"
              
              name = "<?php echo($names[$i]);?>"
              <?php echo($required[$i] ? "required" : "");?>
          ></textarea>
          <?php
          }
          else{
            ?>
            <input
              type = "text"
              name = "<?php echo($names[$i]);?>"
              class = "<?php echo ($sizes[$i]==2 ? "large-textbox" : "small-textbox");?>"
              <?php echo($required[$i] ? "required" : "");?>
            ></input>
            <?php
          }
        }
        ?>
        <input type="hidden" name="webmaster-email" value = "<?php echo $receiverEmail;?>"></input>
        <input type="hidden" name="form-id" value = "001"></input>
        <button id = "submit" style = "<?php echo $buttonStyles?>"><?php echo(__('Submit','e-potis'))?></button>
        <style>
          .wp-block-ept-contact-form #submit:hover{
            filter: brightness(110%)
          }
        </style>
    </form>
  </div>
  <?php
 $output = ob_get_contents();
  ob_end_clean();
  
  return $output;
}