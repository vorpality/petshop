import {registerBlockType} from '@wordpress/blocks'
import {RichText, useBlockProps, InspectorControls} from '@wordpress/block-editor'
import { PanelBody, ColorPalette, ExternalLink, TextControl} from '@wordpress/components'
import {__} from '@wordpress/i18n'
import block from './block.json'
import './main.css'

registerBlockType(block.name, {
    edit({attributes, setAttributes}){
        const { content, underline_color, text_color, link_address} = attributes
        const blockProps = useBlockProps()
        console.log(blockProps)

        return (
        <>
            
            <InspectorControls>
                <PanelBody title={__('Underline Colors', 'udemy-plus')}>
                    <ColorPalette
                        colors={[
                            { color : "#ffffff", name : "PKarellas White"},
                            { color : "#94c023", name : "PKarellas Main Green"},
                            { color : "#7b8b4c", name : "PKarellas Secondary Green"},
                            { color : "#586957", name : "PKarellas Highlight Green"},
                            { color : "#e01d7d", name : "PKarellas Pink"},
                            { color : "#e60e1b", name : "PKarellas Red"}
                        ]}
                        value = {underline_color}
                        onChange={newVal => setAttributes({underline_color: newVal})}
                    />
                </PanelBody>
                <PanelBody title={__('Text Colors', 'udemy-plus')}>
                    <ColorPalette
                        colors={[
                            { color : "#ffffff", name : "PKarellas White"},
                            { color : "#94c023", name : "PKarellas Main Green"},
                            { color : "#7b8b4c", name : "PKarellas Secondary Green"},
                            { color : "#586957", name : "PKarellas Highlight Green"},
                            { color : "#e01d7d", name : "PKarellas Pink"},
                            { color : "#e60e1b", name : "PKarellas Red"}
                        ]}
                        value = {text_color}
                        onChange={newVal => setAttributes({text_color: newVal})}
                    />
                </PanelBody>
                <PanelBody title={__('Link', 'udemy-plus')}>
                    <TextControl
                        help="Link embedded to this header"
                        label="Label Text"
                        value={link_address}
                        onChange={newVal => setAttributes({link_address: newVal})}             
                    />

                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <RichText 
                    className = "fancy-header"
                    tagName="h2" 
                    placeholder={__('Enter heading', 'udemy-plus/')}
                    value={content}
                    onChange={newVal => setAttributes({content: newVal})}
                    allowedFormats={['core/bold', 'core/italic']}
                />
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
        <RichText.Content
            {...blockProps}
            tagName="h2"
            value = {content}
        />
        )
    }
}) 