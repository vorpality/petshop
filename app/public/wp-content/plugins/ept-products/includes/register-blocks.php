<?php

function ept_products_register_blocks() {
    $blocks = [
            [ 'name' => 'single-post-details', 'options' => [
            'render_callback' => 'ept_products_single_post_details_render_cb'
            ]],
            [ 'name' => 'product-query', 'options' => [
                'render_callback' => 'ept_products_query_render_cb'
            ]],
            [ 'name' => 'shopping-cart', 'options' => [
                'render_callback' => 'ept_products_cart_render_cb'
            ]],
            [ 'name' => 'mini-cart', 'options' => [
                'render_callback' => 'ept_products_mini_cart_render_cb'
            ]]
    ];
 
    foreach($blocks as $block){
        register_block_type(
            EPT_PRODUCTS_PLUGIN_DIR . 'build/blocks/'. $block['name'] .'/block.json',
            isset($block['options']) ? $block['options'] : []
        );
    }
} 