import {registerBlockType} from '@wordpress/blocks'
import {RichText, useBlockProps, InspectorControls, PanelColorSettings} from '@wordpress/block-editor'
import {TextControl } from '@wordpress/components'
import {__} from '@wordpress/i18n'
import block from './block.json'
import './main.css'

registerBlockType(block.name, {
    edit({attributes, setAttributes}){
        const { content, underline_color, text_color, link_address} = attributes
        const blockProps = useBlockProps()

        return (
        <>
            
            <InspectorControls>
                <PanelColorSettings
                    title={__('Colors', 'udemy-plus')}
                    colorSettings={[
                        {
                            label: __('Text Color', 'udemy-plus'),
                            value: text_color,
                            onChange: newVal => setAttributes({text_color : newVal})
                        },
                        {
                            label: __('Underline Color', 'udemy-plus'),
                            value: underline_color,
                            onChange: newVal => setAttributes({underline_color : newVal})
                        }

                    ]}
                />  
                <TextControl
                    className="up-fancy-header-link-editor"
                    label="Link"
                    type="string"
                    value = {link_address}
                    onChange={newVal =>setAttributes({link_address: newVal})}
                />
            </InspectorControls>

            <div {...blockProps}>
                    <a href="#">
                    <RichText 
                        className = "fancy-header"
                        tagName="h2" 
                        placeholder={__('Enter heading', 'udemy-plus/')}
                        value={content}
                        onChange={newVal => setAttributes({content: newVal})}
                        allowedFormats={['core/bold', 'core/italic']}

                    />
                    </a>
                
            </div>
        </>
        )
    },
    save({attributes}){
        const {content, underline_color, text_color, link_address} = attributes
        const blockProps = useBlockProps.save({
            className: 'fancy-header',
            style : {
                'background-image': `
                    linear-gradient(transparent, transparent),
                    linear-gradient(${underline_color}, ${underline_color});
                `,
                color:`${text_color};`,
                'font-family':'Pacifico, sans-serif;'
            }
        })
        return (
            <a href = {link_address}>
                <RichText.Content
                    {...blockProps}
                    
                    tagName="h2"
                    value={content}
                />
            </a>
        )
    }
})