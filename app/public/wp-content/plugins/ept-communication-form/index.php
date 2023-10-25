<?php
/*
 * Plugin Name:       Epotis Contact Form
 * Description:       A customizable block to contact website owner via a form that is sent as an email.
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
define('EPT_CONTACT_FORM_PLUGIN_DIR', plugin_dir_path(__FILE__));

//  Includes
$rootFiles = glob(EPT_CONTACT_FORM_PLUGIN_DIR . 'includes/*.php');
$subDirectoryFiles = glob(EPT_CONTACT_FORM_PLUGIN_DIR . 'includes/**/*.php');
$subSubDirectoryFiles = glob(EPT_CONTACT_FORM_PLUGIN_DIR . 'includes/**/**/*.php');
$allFiles = array_merge($rootFiles, $subDirectoryFiles, $subSubDirectoryFiles);

foreach($allFiles as $filename){
    include_once($filename);
}
 
//  Hooks
add_action('init','ept_contact_register_blocks');
add_action('wp_enqueue_scripts', "eptc_form_handler");

