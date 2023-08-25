import {render, useState, useEffect} from '@wordpress/element'
import apiFetch from '@wordpress/api-fetch'

function FavoritePost(props){
  console.log(props)
  const [permission] = useState(props.loggedIn)
  const [favorite, setFavorite] = useState(props.isFavorite)
  const className = favorite ? "is-favorite" : ""
  return (    
    <button class={className}
      onClick = {async event => {

        if(!permission) {
          return alert('You may need to log in.')
        }

        const response = await apiFetch({
          //example.com/wp-json/up/v1/favorite
          path: 'up/v1/favorite',
          method: 'POST',
          data: {
            userID: props.userID,
            postID: props.postID,
            favorite
          }
        })
        console.log(response)

        if(response.status ==2) {
          setFavorite(!favorite)
        }
      }}>
    
 <i class="bi bi-heart favorite"></i>
 </button>
  )
}



document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.favorite-button')

  blocks.forEach( block => {
  const postID = parseInt(block.dataset.postId)
  const userID = parseInt(block.dataset.userId)
  const loggedIn = !!block.dataset.loggedIn
  const isFavorite = !!block.dataset.isFavorite

  render(
    <FavoritePost 
    postID={postID} 
    userID={userID}
    isFavorite = {isFavorite}
    loggedIn={loggedIn}
    />, block)
  })
  
})