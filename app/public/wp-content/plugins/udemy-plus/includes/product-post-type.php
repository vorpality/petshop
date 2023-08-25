<?php

function pk_product_post_type(){

    $labels = array(
		'name'                  => _x( 'Products', 'Post type general name', 'udemy-plus' ),
		'singular_name'         => _x( 'Product', 'Post type singular name', 'udemy-plus' ),
		'menu_name'             => _x( 'Products', 'Admin Menu text', 'udemy-plus' ),
		'name_admin_bar'        => _x( 'Product', 'Add New on Toolbar', 'udemy-plus' ),
		'add_new'               => __( 'Add New', 'udemy-plus' ),
		'add_new_item'          => __( 'Add New Product', 'udemy-plus' ),
		'new_item'              => __( 'New Product', 'udemy-plus' ),
		'edit_item'             => __( 'Edit Product', 'udemy-plus' ),
		'view_item'             => __( 'View Product', 'udemy-plus' ),
		'all_items'             => __( 'All Products', 'udemy-plus' ),
		'search_items'          => __( 'Search Products', 'udemy-plus' ),
		'parent_item_colon'     => __( 'Parent Products:', 'udemy-plus' ),
		'not_found'             => __( 'No Products found.', 'udemy-plus' ),
		'not_found_in_trash'    => __( 'No Products found in Trash.', 'udemy-plus' ),
		'featured_image'        => _x( 'Product Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'udemy-plus' ),
		'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'udemy-plus' ),
		'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'udemy-plus' ),
		'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'udemy-plus' ),
		'archives'              => _x( 'Product archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'udemy-plus' ),
		'insert_into_item'      => _x( 'Insert into Product', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'udemy-plus' ),
		'uploaded_to_this_item' => _x( 'Uploaded to this Product', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'udemy-plus' ),
		'filter_items_list'     => _x( 'Filter Products list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'udemy-plus' ),
		'items_list_navigation' => _x( 'Products list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'udemy-plus' ),
		'items_list'            => _x( 'Products list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'udemy-plus' ),

	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'product' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 20,
		'supports'           => array( 'title', 'availabity', 'thumbnail', 'excerpt' ),
		'show_in_rest'       => true,
		'description'        => __('A custom post type for products', 'udemy-plus'),
		'taxonomies'         => ['category', 'post_tag'],
		'register_meta_box_cb' => 'pk_product_add_meta_boxes_cb'
		
			
	);

    register_post_type( 'product', $args );
}