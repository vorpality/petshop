<?php

function pk_activate_plugin() {
    // 6.0 < 5.9
    if(version_compare(get_bloginfo('version'), '5.9', '<' )) {
        wp_die(__('You must update wordpress to use this plugin', 'udemy-plus'));
    }

    pk_product_post_type();
    flush_rewrite_rules();
} 