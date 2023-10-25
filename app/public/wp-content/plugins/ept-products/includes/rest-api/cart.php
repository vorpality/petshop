<?php
function ept_pq_rest_api_add_to_cart_handler($request){
  $response['status'] = 1;
  $params = $request->get_json_params();


  if(
    !isset($params['cart'], $params['postID']) ||
    !($params['cart'] === true || $params['cart'] === false) ||
    empty($params['postID'])
  )
  { 
    return $response;
  }

  $cart = $params['cart'];
  $postID = absint($params['postID']);
  $userID = absint($params['userID']);
 
  $currentlyCarted = get_user_meta($userID, 'cartItem', false);

  if ($cart){

    if(!in_array($postID,$currentlyCarted)){
      return $response;
    }
    else {
      delete_user_meta($userID, 'cartItem', strval($postID));
      $response['status'] = 2;
      return $response; 
    }
  }
  else {
    add_user_meta($userID, 'cartItem', strval($postID));
    $response['status'] = 2;
    return $response;   
  }
      


  $response['status'] = 2;
  return $response;
}