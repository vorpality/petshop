<?php

function ept_header_tools_render_cb($atts) {
    $user = wp_get_current_user();
    $name = $user->exists() ? $user->user_login : 'Sign in';
    $openClass = $user->exists() ? 'open-user-modal' : 'open-auth-modal';

    ob_start();
    ?>
    <div class="wp-block-ept-user-flow-header-tools">
    <?php
    
    if($atts['showAuth']){    
        ?>
        <div class = "account-dropdown">
            <a class="signin-link <?php echo $openClass; ?>" href="#">
                <div class="signin-icon">
                <i class="bi bi-person-circle"></i>
                </div>
                <div class="signin-text">
                    <?php if($user->exists()) {
                        ?> 
                        </a>
                        <div class = "dropbtn">
                            Hello, <div class="signin-text-link-logged"><?php echo $name; ?></div>
                        </div>
                        <div class = "dropdown-content">
                            <ul class="elements">
                                <li>
                                    <a href="<?php echo esc_url((home_url('/my-account'))); ?>">
                                    <button class = "button-element"> My account</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="<?php echo esc_url((home_url('/cart'))); ?>">
                                    <button class = "button-element"> Cart</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="<?php echo esc_url((home_url('/favorites'))); ?>" >
                                    <button class = "button-element"> Favorites</button>
                                    </a>
                                </li>
                                <hr>
                                <li>
                                    <a href="<?php echo esc_url((home_url('/logout'))); ?>" >
                                    <button class = "button-element"> Log out</button>
                                    </a>
                                </li>
                            </ul> 
                        </div>
                    </div>
                <?php
                }
                else {
                    ?>
                    
                       <small> Hello, <div class="signin-text-link-unlogged"><?php echo $name; ?></div></small>

                    <?php
                }
                ?>
            </div>
        </a>   

    
    <?php
    }
    ?>
    </div>
    <?php

    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}