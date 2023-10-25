<?php
function ept_pw_reset_redirect() {
    if ( 'GET' == $_SERVER['REQUEST_METHOD'] ) {
        if ( is_user_logged_in() ) {
            wp_redirect('//petkarellas.gr');
            exit;
        }
        wp_redirect( home_url( 'reset-password' ) );
        exit;
    }
}