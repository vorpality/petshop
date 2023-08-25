<?php

function up_header_tools_render_cb($atts) {
    $user = wp_get_current_user();
    $name = $user->exists() ? $user->user_login : 'Sign in';
    $openClass = $user->exists() ? 'open-user-modal' : 'open-auth-modal';

    ob_start();
    ?>
    <div class="wp-block-udemy-plus-header-tools">
    <?php
    
    if($atts['showAuth']){    
        ?>
        <a class="signin-link <?php echo $openClass; ?>" href="#">
            <div class="signin-icon">
            <i class="bi bi-person-circle"></i>
            </div>
            <div class="signin-text">
                <?php if($user->exists()) {
                    ?> 
                    </a>
                    <div class = "account-dropdown">
                        <button class = "dropbtn">
                            Hello, <div class="signin-text-link-logged"><?php echo $name; ?></div>
                        </button>
                        <div class = "dropdown-content">
                            <ul class="elements">
                                <li>
                                    <a href="/my-account">
                                    <button class = "button-element"> My account</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="/favorites" >
                                    <button class = "button-element"> Favorites</button>
                                    </a>
                                </li>
                                <hr>
                                <li>
                                    <a href="/" >
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
                    
                       <small> Hello, <div class="signin-text-link-unlogged"><?php echo $name; ?></div></small> My account

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