import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps, RichText, InspectorControls
} from '@wordpress/block-editor';
import {PanelBody, RangeControl} from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import icons from '../../icons.js'
import './main.css'

registerBlockType('udemy-plus/category-tree', {
  icon: icons.primary,
	edit({ attributes, setAttributes }) {
        const { content,depth } = attributes    
        const blockProps = useBlockProps();

        return (
        <>
            <InspectorControls>
                <PanelBody title={__('General', 'udemy-plus')}>
                <RangeControl 
                  label={__('Depth', 'udemy-plus')}
                  onChange={depth => setAttributes({depth})}
                  value={depth}
                  min={1}
                  max={3}
                />
                </PanelBody>
            </InspectorControls> 
            <div { ...blockProps }>
              {__('This block is not previewable from the editor. View your site for a live demo.', 'udemy-plus')}
           </div>
        </>
        );
    }
});