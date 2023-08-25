import { registerBlockType } from '@wordpress/blocks'
import { 
  useBlockProps
} from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'

import {useSelect} from '@wordpress/data'
import icons from '../../icons.js'
import './main.css'

registerBlockType('udemy-plus/favorite-posts', {
  icon: {
    src: icons.primary
  },
	edit({ attributes, setAttributes }) {
    const { title, count, categories } = attributes
    const blockProps = useBlockProps()

    const posts = useSelect(
      (select) => {
        return select('core').getEntityRecords('postType', 'product', {
          per_page: count,
          _embed: true,
          order: 'desc',
        });
    }
    );


    return (
      <>
       <p>favorites?</p>
      </>
    );
  }
});