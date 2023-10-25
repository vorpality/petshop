<?php 
function eptc_form_handler(){
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(isset($_POST['form-id'])&&$_POST['form-id']==='001'){
      $to = $_POST['webmaster-email'];
      unset($_POST['form-id']);
      unset($_POST['webmaster-email']);
      $message = "The following message has been sent via the contact form : \n\n\n";
      foreach($_POST as $key => $value){
        $message .= $key . ": " . $value . "\n\n";
      }
 
    wp_mail($to,"Form submission",$message);
   
    }
  }
}
