<?php

function up_rest_api_init(){
    //example.com/wp-json/up/v1/signup
    register_rest_route('up/v1', '/signup', [
        'methods' => WP_REST_SERVER::CREATABLE,
        'callback' => 'up_rest_api_signup_handler',
        'pemission_callback' => '__return_true'
    ]);
    //example.com/wp-json/up/v1/signin
    register_rest_route('up/v1', '/signin', [
        'methods' => WP_REST_SERVER::EDITABLE,
        'callback' => 'up_rest_api_signin_handler',
        'permission_callback' => '__return_true'
    ]);
    
    register_rest_route('up/v1', '/favorite', [
        'methods' => WP_REST_SERVER::CREATABLE,
        'callback' => 'up_rest_api_add_favorite_handler',
        'permission_callback' => 'is_user_logged_in'
    ]);
}