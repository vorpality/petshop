<?php

function ept_contact_register_blocks() {
    $blocks = [
        [ 'name' => 'contact-form', 'options' => [
        'render_callback' => 'ept_contact_form_render_cb'
        ]]
    ];
 
    foreach($blocks as $block){
        register_block_type(
            EPT_CONTACT_FORM_PLUGIN_DIR . 'build/blocks/'. $block['name'] .'/block.json',
            isset($block['options']) ? $block['options'] : []
        );
    }
} 