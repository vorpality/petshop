<?php

function up_register_block() {
    $blocks = [
        [ 'name' => 'fancy-header'],
        [ 'name' => 'search-form', 'options' => [
            'render_callback' => 'up_search_form_render_cb'
        ]],
        [ 'name' => 'page-header', 'options' => [
            'render_callback' =>'up_page_header_render_cb'
        ]],
        [ 'name' => 'header-tools', 'options' => [
            'render_callback' => 'up_header_tools_render_cb'
        ]],
        [ 'name' => 'auth-modal', 'options' => [
            'render_callback' => 'up_auth_modal_render_cb'
        ]],
        ['name' => 'contact-form'],
        ['name' => 'category-tree', 'options' => [
            'render_callback' => 'pk_category_tree_render_cb'
        ]],
        ['name'=> 'product-list', 'options' => [
            'render_callback' => 'pk_product_list_cb'
        ]],
        ['name'=> 'single-post-details', 'options' => [
            'render_callback' => 'pk_single_post_details_cb'
        ]],
        [ 'name' => 'user-modal', 'options' => [
            'render_callback' => 'pk_user_modal_render_cb'
        ]],
        ['name'=> 'favorite-posts', 'options' => [
            'render_callback' => 'pk_favorite_posts_cb'
        ]],
        ['name'=> 'account-edit-form', 'options' => [
            'render_callback' => 'pk_account_edit_form_cb'
        ]]
    ];

    foreach($blocks as $block){
        register_block_type(
            UP_PLUGIN_DIR . 'build/blocks/'. $block['name'] .'/block.json',
            isset($block['options']) ? $block['options'] : []
        );
    }
} 