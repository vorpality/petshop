<?php
function ept_pq_rest_api_cart_fiddle_handler($request){
  $response['status'] = 1;
  $params = $request->get_json_params();

  /* runs if:
      userID is set,
      there is an amount specified, 
      or an action that's either 'add' or 'remove'
  */
  if(
    !isset($params['userID'])||
    !(
      $params['action'] === "add" || 
      $params['action'] === "remove" ||
      isset($params['amount'])
    )
  )
  { 
    $response['code']=1;
    //$response['condition'] =  $params;
    return $response;
  }

  $userID = absint($params['userID']);

  /* if :
      only userID is set and
      amount is set to 0
      (remove all)
  */
  if (!isset($params['postID']) && 
    isset($params['amount']) && 
    ($params['amount']=== 0)
  ){
    delete_user_meta($userID,'cartItem');
    $response['status'] = 2;
    return $response;
  }
  /*
    if :
      userid is set, and 
      post id is set,
      and amount = 0,
      (remove all from post)
  */
  if (isset($params['postID']) && 
  isset($params['amount']) && 
  ($params['amount']=== 0)
){
  delete_user_meta($userID,'cartItem', strval($params['postID']));
  $response['status'] = 2;
  return $response;
}
  /* exits if :
      no postID is set, or
      postID is empty, or
      amount and action aren't set, or 
      amount is set to non 0,
  */
  if(!isset($params['postID']) ||
    empty($params['postID']) ||
    (
      (
        !isset($params['amount']) ||
        $params['amount']=== 0
      ) &&
      !isset($params['action'])
    )
  )
  {
    $response['code'] = '2nd if';
    $response['condition'] = $params['amount']!== 0;
    return $response;
  }
  if (isset($params['action'])){
    $action = $params['action'];
  }
  $postID = absint($params['postID']);
  
  
  $cartedItems = get_user_meta($userID, 'cartItem', false);
  $currentlyCarted = 0;
  foreach($cartedItems as $item){
    if($item == $postID){
      $currentlyCarted ++;
    }
  }
  if(isset($params['amount'])){
    $targetQuantity = ($params['amount']);
  }
  else{
    if($action==="remove"){
      $targetQuantity = $currentlyCarted-1;
    }
    else if($action==="add"){
      $targetQuantity = $currentlyCarted+1;
    }
  }
    if($targetQuantity<0){
      return $response;
    }
    if($currentlyCarted>0){
      delete_user_meta($userID, 'cartItem', strval($postID));
    }
    for($i = 0; $i<$targetQuantity; $i++){
      add_user_meta($userID, 'cartItem', strval($postID));
    }
    $response['status'] = 2;
    return $response; 
      


  $response['status'] = 2;
  return $response;
}