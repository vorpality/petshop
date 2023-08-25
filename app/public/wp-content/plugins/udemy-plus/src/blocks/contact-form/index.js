import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps, InspectorControls, RichText, MediaPlaceholder
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { 
  PanelBody, TextareaControl
} from '@wordpress/components';
import icons from '../../icons.js';
import './main.css';

registerBlockType('udemy-plus/contact-form', {
  icon: {
    src: icons.primary
  },
  edit({ attributes, setAttributes }) {
    const {} = attributes;
    const blockProps = useBlockProps();

    return (
      <div {...blockProps}>
      <form>
          <label>Name</label>
            <input type="text" id="f-name" placeholder="Name"></input>
          <label>Email</label>
            <input type="text" id="f-email" placeholder="someone@example.com"></input>
          <label>Message</label>
            <textarea id="f-description" placeholder='Type your message here'></textarea>
            <div className='btn-wrapper'>
              <button type="submit" style={{
                'background-color': '#000',
                color : '#fff'
              }}
              >Submit</button>
            </div>
        </form>
        </div>
    )
  },
  save({ attributes }) {
    const {} = attributes;
    const blockProps = useBlockProps.save();

    return (
      <div {...blockProps}>
      <form>
      <label>Name</label>
        <input type="text" id="f-name" placeholder="Name"></input>
      <label>Email</label>
        <input type="text" id="f-email" placeholder="someone@example.com"></input>
      <label>Message</label>
        <textarea id="f-description" placeholder='Type your message here'></textarea>
        <div className='btn-wrapper'>
          <button type="submit" style={{
            'background-color': '#000',
            color : '#fff'
          }}
          >Submit</button>
        </div>
    </form>
    </div>
    )
  }
});