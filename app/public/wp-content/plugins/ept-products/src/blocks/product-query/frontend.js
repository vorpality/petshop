import {render, useState} from '@wordpress/element'
import apiFetch from '@wordpress/api-fetch'

function FavoritePost(props){
  const [permission] = useState(props.loggedIn)
  const [favorite, setFavorite] = useState(props.isFavorite)
  const [inCart, setInCart] = useState(props.isInCart)
  const [cartEnabled] = useState(props.cartEnabled);
  const className = favorite ? "is-favorite" : ""
  const fill = favorite ? "-fill" : ""
  const className2 = inCart ? "is-carted" : ""
  return (    
    <>
    <button class={"heart-button " + className}
      onClick = {async event => {

        if(!permission) {
          return alert('You may need to log in.')
        }

        const favResponse = await apiFetch({ 
          //example.com/wp-json/ept/v1/favorite
          path: 'ept/v1/favorite',
          method: 'POST',
          data: {
            userID: props.userID,
            postID: props.postID,
            favorite
          }
        })
        
        if(favResponse.status ==2) {
          setFavorite(!favorite)
        }
      }}>
    
    <i class={`bi bi-heart${fill} favorite`}></i>
 </button>
 {cartEnabled &&
  <button class={"cart-button " + className2}
  onClick = {async event => {

    if(!permission) {
      return alert('You may need to log in.')
    }

    const cartResponse = await apiFetch({
      //example.com/wp-json/ept/v1/addtocart
      path: 'ept/v1/addtocart',
      method: 'POST',
      data: {
        userID: props.userID,
        postID: props.postID,
        cart: inCart
      }
    })
    
    if(cartResponse.status ==2) {
      setInCart(!inCart)
      changeBubbleValue( inCart? -1 : 1)
      changePostValue(props.postID, inCart)
    }
  }}>

<i class={`bi bi-cart2 cart`}></i>
 </button>
}
  </>
  )}



document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.post-buttons')

  blocks.forEach( block => {
  const postID = parseInt(block.dataset.postId)
  const userID = parseInt(block.dataset.userId)
  const loggedIn = !!block.dataset.loggedIn
  const isFavorite = !!block.dataset.isFavorite
  const isInCart = !!block.dataset.isInCart
  const cartEnabled = !!block.dataset.cartEnabled

  render(
    <FavoritePost 
    postID={postID} 
    userID={userID}
    isFavorite = {isFavorite}
    loggedIn={loggedIn}
    isInCart ={isInCart}
    cartEnabled = {cartEnabled}
    />, block)
  })
  
})

function changeBubbleValue(newVal){
  const bubble = document.querySelector('.mini-cart-bubble')
  const currentQ = parseInt(bubble.dataset.quantity)
  const newQ = currentQ + newVal
  bubble.dataset.quantity = newQ;
}

function changePostValue(postID, newVal){
  const blocks = document.querySelectorAll('.single-post')
  blocks.forEach(block =>{
    /*
    console.log(block)
    if (parseInt(block.dataset.postId)==postID){
      console.log(block)
      block.dataset.isInCart=newVal
    }*/
    //reDraw(block)
  })
}

function refreshCart(){
  
}
function reDraw(element){

  if (!element) { return; }

  var n = document.createTextNode(' ');
  var disp = element.style.display;  // don't worry about previous display style

  element.appendChild(n);
  element.style.display = 'none';

  setTimeout(function(){
      element.style.display = disp;
      n.parentNode.removeChild(n);
  },20); // you can play with this timeout to make it as short as possible
}