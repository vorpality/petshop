<?php
/*
 * Plugin Name:       Epotis Products
 * Description:       A set of blocks registering custom type "products" and other related functions
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            Epotis team
 * Text Domain:       e-potis
 */

if(!function_exists('add_action')) {
    echo 'Seems like you stumbled here by accident.';
    exit;
}

//  Setup
define('EPT_PRODUCTS_PLUGIN_DIR', plugin_dir_path(__FILE__));

//  Includes
$rootFiles = glob(EPT_PRODUCTS_PLUGIN_DIR . 'includes/*.php');
$subDirectoryFiles = glob(EPT_PRODUCTS_PLUGIN_DIR . 'includes/**/*.php');
$subSubDirectoryFiles = glob(EPT_PRODUCTS_PLUGIN_DIR . 'includes/**/**/*.php');
$allFiles = array_merge($rootFiles, $subDirectoryFiles, $subSubDirectoryFiles);

foreach($allFiles as $filename){
    include_once($filename);
}
 
//  Hooks
register_activation_hook(__FILE__, 'ept_products_activate_plugin');
add_action('init','ept_products_register_blocks');
add_action('init', 'ept_products_product_post_type');
add_action('rest_api_init', 'ept_pq_rest_api_init');
add_action('transition_post_status', 'ept_products_publish_product_meta',10,3);
