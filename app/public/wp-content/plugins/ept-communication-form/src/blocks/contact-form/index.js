import { registerBlockType } from '@wordpress/blocks'
import { 
  useBlockProps, 
  InspectorControls
} from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import { 
  PanelBody, 
  TextControl,
  RangeControl,
  SelectControl,
  ColorPalette,
  CheckboxControl
} from '@wordpress/components'
import icons from '../../icons.js'
import './main.css'
 

registerBlockType('ept-contact/contact-form', {
  icon: {
    src: icons.form
  },
  edit({ attributes, setAttributes }) {
    const {webmaster_email,fieldNumber, fieldNames, boxSizes, bg_color, text_color, isRequired} = attributes;
    const blockProps = useBlockProps({
      style: {
        'background-color' : bg_color,
        color: text_color
      }
    });

    [fieldNames,boxSizes,webmaster_email]
    return (
      <>
      <InspectorControls>
        <PanelBody title={__('Colors', 'e-potis')}>
          <ColorPalette
            title ={__('Background color', 'e-potis')}
            colors={[
                { name: 'Red', color: '#f87171'},
                { name: 'Green', color: '#89b322'}
            ]}
            value = {bg_color}
            onChange={newVal => setAttributes({bg_color: newVal})}
          />
          <ColorPalette
            title ={__('Text color', 'e-potis')}
            colors={[
                { name: 'White', color: 'white'},
                { name: 'Black', color: 'black'}
            ]}
            value = {text_color}
            onChange={newVal => setAttributes({text_color: newVal})}
          />
        </PanelBody>
        <PanelBody>
        <TextControl
          label={__("Receiving email", "e-potis")}
          value={webmaster_email}
          onChange={(webmaster_email) => setAttributes({ webmaster_email })}
          help={__(
            "Email that will receive the submitted forms",
            "e-potis"
          )}
        />
        </PanelBody>
        <PanelBody>
          <RangeControl 
            label={__('Fields', 'e-potis')}
            onChange={fieldNumber => setAttributes({fieldNumber})}
            value={fieldNumber}
            min={1}
            max={10}
          />
          </PanelBody>
        </InspectorControls>
        <MultiField
          N={fieldNumber}
          fieldNames={fieldNames}
          boxSizes={boxSizes}
          isRequired={isRequired}
          setAttributes={setAttributes}
          color={text_color}
          background_color={bg_color}
          blockProps={blockProps}

        />
      </>
    )
  }
});


function Field({N, id, fieldNames, boxSizes, isRequired, setAttributes}){
  let newfVals = [];
  let newsVals = [];
  let newrVals = [];
  for (let i = 0; i<N; i++){
    newfVals[i] = fieldNames[i];
    newsVals[i] = boxSizes[i];
    newrVals[i] = isRequired[i];
  }
  return (
    <PanelBody title={__('Field ' + (id+1), 'e-potis')}>
      <TextControl
        label={"Field name"}
        value={fieldNames[id]}
        onChange={(enteredVal) => {
          newfVals[id] = enteredVal;
          setAttributes({fieldNames:newfVals})
        }}
        help={__(
          ("Enter field "+(id + 1)+ " name"),
          "e-potis"
        )}
      />
      <SelectControl 
        label={__('Field '+ (id+1) + ' size', 'e-potis')}
        value = {boxSizes[id]}
        options={[
          {
            label: 'Small',
            value: 1
          },
          {
            label: 'Large',
            value: 2
          },
          {
            label: 'Text area',
            value: 3
          }
        ]}
        onChange={(enteredVal) => {
          newsVals[id] = enteredVal;
          setAttributes({boxSizes:newsVals})
        }}
        min={1}
        max={3}
      />
      <CheckboxControl
        label={__('Required', 'e-potis')}
        checked = {isRequired[id]}
        onChange={(enteredVal) => {
          newrVals[id] = enteredVal;
          setAttributes({isRequired:newrVals})
        }}
        help = {__('If the box is checked, this field has to not be empty for the form to be submitted.', 'e-potis')}
      />
    </PanelBody>
  )
}

function MultiField({N, fieldNames, boxSizes, isRequired, setAttributes, color, background_color, blockProps}){
  const buttonProps ={
    id:"submit",
    style : {
      color:`${color}`,
      'background-color':`${background_color}`,
      'outline': `2px solid ${color}`
    }
  }
  const to_renderInspector =[];
  const to_renderjsx =[];
  for (let i = 0; i<N; i++){
      to_renderInspector.push(
        <Field
          N={N}
          id={i}
          fieldNames={fieldNames}
          boxSizes={boxSizes}
          isRequired={isRequired}
          setAttributes={setAttributes}
        />
      )
    to_renderjsx.push(
      <>
      <label>{fieldNames[i]}</label>
      <br></br>
        {boxSizes[i]==3 ? 
          <textarea 
            id={"field-" + i} 
            class={"larger-textbox"}
          ></textarea> : 
          <input 
            type="text"
            class ={boxSizes[i]==2? "large-textbox" : ""}
            id ={"field-" + i }
          ></input>
        }
        <br></br><br></br>
      </>
    )
  }
  to_renderjsx.push(
    <button {...buttonProps}>
      {__('Submit', 'e-potis')}
    </button>
  )
  return (
  <>
    <InspectorControls>
      {to_renderInspector}  
    </InspectorControls>
    <div {...blockProps}>
      {to_renderjsx}
    </div>
  </>
  )
}