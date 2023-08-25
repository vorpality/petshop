import { createElement} from '@wordpress/element';
import {MediaPlaceholder} from '@wordpress/block-editor';

kp_enqueue_image_scr();

function kp_enqueue_image_scr(){
return createElement(
<div className = "image" id = "postbox">
{ imgURL && <img src={imgURL} alt={imgAlt}/> }
<MediaPlaceholder
              acceptedTypes={[ 'image' ]}
              accept={'image/*'}
              icon="admin-users"
              onSelect = {img => {
                setAttributes({
                  imgID: img.id,
                  imgAlt: img.alt,
                  imgURL: img.sizes.teamMember.url
                })
              }}
              onError={error => { console.error(error)}}
              disableMediaButtons={imgURL}
              onSelectURL={url => {
                setAttributes({
                  imgID: null,
                  imgAlt: null,
                  imgUrl: url
                })
              }}
            />
            </div>
)}