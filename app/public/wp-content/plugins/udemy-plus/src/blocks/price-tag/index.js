import {registerBlockType} from '@wordpress/blocks'
import { useBlockProps} from '@wordpress/block-editor'

import {__} from '@wordpress/i18n'
import './main.css'

registerBlockType("udemy-plus/price-tag", {
    edit({attributes, setAttributes}){
        const { content } = attributes
        const blockProps = useBlockProps()

        return (
        
            
      

            <div {...blockProps}>
                    
                    <h2>Price</h2>
                   
                
            </div>
       
        )
    },

})