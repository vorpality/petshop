import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import icons from '../../icons.js';
import './main.css';

registerBlockType('udemy-plus/reset-password', {
  icon: {
    src: icons.primary
  },
  edit({ attributes, setAttributes }) { 
    const {} = attributes;
    const blockProps = useBlockProps();

    return (
      <div {...blockProps}>
    </div>
    )
  }
});