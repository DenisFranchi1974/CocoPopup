<?php 

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// User Name Modal
$current_user = wp_get_current_user();
$welcome_message = esc_html__( 'Hi', 'cocopopup' );
if ($current_user && isset($current_user->display_name)) {
    $welcome_message .= ' ' . esc_html($current_user->display_name);
} elseif ($current_user && isset($current_user->user_login)) {
    $welcome_message .= ' ' . esc_html($current_user->user_login);
} else {
    $welcome_message .= esc_html__( ' Admin', 'cocopopup' );
}
$modal_message = esc_html__( 'I am your personal assistant.', 'cocopopup' );
// Url
// Extensions
$url_extensions = 'https://www.wpcocoblock.com/popup-extensions/';
$sanitized_url_extensions = esc_url($url_extensions);
// Guides
$url_guides = 'https://www.wpcocoblock.com/documentation/';
$sanitized_url_guides = esc_url($url_guides);
// Allow tag in extensions
$allowed_tags_extensions = cocopopup_get_allowed_tags_extensions();
?>

<div class="cocopopup-body-extension">
    <div class="cocopopup-extension-header">
        <div class="cocopopup-logo">
            <img src="<?php echo esc_url( plugins_url( 'images/cocopopup.png', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'CocoPopup', 'cocopopup' )?>" />
        </div>
        <div class="cocopopup-menu">
            <p style="text-decoration:underline;font-weight:bold"><?php esc_html_e('V 1.0.2','cocopopup')?></p> 
            <button id="theme-toggle">
                <span class="theme-icon" id="sun-icon">&#9728;</span> <!-- Sole -->
                <span class="theme-icon" id="moon-icon">&#9790;</span> <!-- Luna -->
            </button>
            <div class="cocopopup-avatar-daschboard" id="avatar-dashboard">
                <img src="<?php echo esc_url(plugins_url( 'images/cocopopup-assistance.png', __FILE__ )); ?>" alt="<?php esc_html_e( 'CocoPopup assistance', 'cocopopup' )?>" />
                <span class="dashicons dashicons-editor-help"></span>
            </div>
            <!-- Modal -->
            <div id="myModal" class="modal">
                <!-- Contenuto del modale -->
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2><?php echo esc_html($welcome_message) . ', ' . esc_html($modal_message); ?></h2>
                    <p><?php esc_html_e('Here you\'ll find all our extensions to customize your popup to the maximum. Additionally, if you have specific requirements, we can provide you with a free consultation along with a quote to meet your needs!','cocopopup')?></p>
                </div>
            </div>
        </div>
    </div>
    <div class="cocopopup-content-header-extension">
        <h1><?php esc_html_e( 'Extensions', 'cocopopup' )?></h1>
        <p><?php esc_html_e( 'Explore our collection of powerful extensions designed to enhance your experience with our plugin. From advanced customization options to seamless integrations, our extensions offer a wide range of features to help you tailor your website to your unique needs.', 'cocopopup' );?></p>
    </div>
    <div class="cocopopup-wrap-extension">
        <?php // Scroll Extension
        
        if (cocopopup_plugin_scroll_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_scroll_content(), $allowed_tags_extensions); 
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z"/></svg>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Scroll Triggered Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Engage visitors with captivating popups triggered as they scroll through your website.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Page Position Half', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Page Position 3/4', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Page Position End', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Page Position Percentage', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Scroll direction', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }
        
        // Countdown Extension
        if (cocopopup_plugin_countdown_is_activeForm()) {
           echo wp_kses(cocopopup_plugin_countdown_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z"/></svg>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Countdown Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Engage visitors with customizable Countdown Popup. Build urgency without being intrusive.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Countdown of seconds only', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Different styles of countdowns', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Highly customizable', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Site under maintenance function', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Image/Background blackout filter', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Advertising function', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Overlay Filter Popup Extension included', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }
        
        // Age Extension
        if (cocopopup_plugin_age_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_age_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <div class="content-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><g><path d="M340-360h60v-240H280v60h60v180Zm160 0h100q17 0 28.5-11.5T640-400v-160q0-17-11.5-28.5T600-600H500q-17 0-28.5 11.5T460-560v160q0 17 11.5 28.5T500-360Zm20-40v-60h60v60h-60Zm0-100v-60h60v60h-60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></g></svg>
                        <p><?php esc_html_e( '+', 'cocopopup')?></p>
                    </div>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Age Restriction Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Custmizable Age Restriction Popup ensures secure access, ideal for websites with age-restricted content.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Closing delay', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Customizable welcome message', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Site filter', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Website background image', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Highly customizable', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Forms in different languages', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Overlay Filter Popup Extension included', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }

        // Woocommerce Extension
        if (cocopopup_plugin_woo_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_woo_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Woocommerce Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Efficiently showcase tailored content based on your customers\' shopping behavior with our WooCommerce extension. ', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Empty Cart', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Number of Products in the Cart', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Specific Product in Cart', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Total Amount in Cart', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }

         // Button Extension
         if (cocopopup_plugin_button_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_button_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H160v320Zm130-40h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Zm-130 40v-320 320Z"/></svg>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Button Adder Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Enhance popup functionality with a customizable second button for redirections and actions, enabling diverse user responses.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Link addressing', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Opening in a new window', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Customizable text', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Highly customizable style', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }

        // Exit Intent Extension
        if (cocopopup_plugin_intent_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_intent_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z"/></svg>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Exit Intent Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Engage exiting visitors, converting exits into subscriptions, sales, and more with Exit Intent extension.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Setting Delay', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Highly customizable style', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }

        // Inactivity Event Extension
        if (cocopopup_plugin_inatcivity_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_inatcivity_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <div class="inactivity-ext">
                        <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M480-80q-116 0-198-82t-82-198v-240q0-116 82-198t198-82q116 0 198 82t82 198v240q0 116-82 198T480-80Zm40-520h160q0-72-45.5-127T520-796v196Zm-240 0h160v-196q-69 14-114.5 69T280-600Zm200 440q83 0 141.5-58.5T680-360v-160H280v160q0 83 58.5 141.5T480-160Zm0-360Zm40-80Zm-80 0Zm40 80Z"/></svg>
                        <svg class="second-svg" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100"><text x="10" y="50" font-size="25" font-weight="bold" fill="#6223cc">Z</text><text x="30" y="45" font-size="10" font-weight="bold" fill="#6223cc">Z</text><text x="40" y="40" font-size="15" font-weight="bold" fill="#6223cc">Z</text></svg>
                    </div>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Inactivity Event Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Prompt actions from inactive users with Inactivity Event, increasing engagement and conversions effectively.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Setting Delay', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Highly customizable style', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }

        // Advanced Targeting Extension
        if (cocopopup_plugin_targeting_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_targeting_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm-40-240v-200h80v200h-80Zm0 520v-200h80v200h-80Zm200-320v-80h200v80H640Zm-520 0v-80h200v80H120Z"/></svg>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Advanced Targeting Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Refine popup targeting with Advanced Targeting extension, tailoring popups based on diverse conditions.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Number of Visits', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Specific URL', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'External Link', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Logged-in User', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Language', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Operating System', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Browser', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Highly customizable style', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }

        // Schedule Extension
        if (cocopopup_plugin_schedule_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_schedule_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v200h-80v-40H200v400h280v80H200Zm0-560h560v-80H200v80Zm0 0v-80 80ZM560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Schedule Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Strategically showcase scheduled popups daily, maximizing engagement with tailored offers for diverse audiences.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Start date', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Time', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'End date', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Highly customizable style', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }

        // Advanced Closing Extension
        if (cocopopup_plugin_closing_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_closing_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="m476-420 84-84 84 84 56-56-84-84 84-84-56-56-84 84-84-84-56 56 84 84-84 84 56 56ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Advanced Closing Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Complete control of popups to ensure visitor interaction.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Opacity', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Click on the window', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Scroll', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Automatic Time', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Blocked', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Class', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Redirect', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Highly customizable style', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }

        // Overlay Filter
        if (cocopopup_plugin_overlay_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_overlay_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M120-574v-85l181-181h85L120-574Zm0-196v-70h70l-70 70Zm527 67q-10-11-21.5-21.5T602-743l97-97h85L647-703ZM220-361l77-77q7 11 14.5 20t16.5 17q-28 7-56.5 17.5T220-361Zm480-197v-2q0-19-3-37t-9-35l152-152v86L700-558ZM436-776l65-64h85l-64 64q-11-2-21-3t-21-1q-11 0-22 1t-22 3ZM120-375v-85l144-144q-2 11-3 22t-1 22q0 11 1 21t3 20L120-375Zm709 83q-8-12-18.5-23T788-335l52-52v85l-11 10Zm-116-82q-7-3-14-5.5t-14-4.5q-9-3-17.5-6t-17.5-5l190-191v86L713-374Zm-233-26q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480ZM160-120v-71q0-34 17-63t47-44q51-26 115.5-44T480-360q76 0 140.5 18T736-298q30 15 47 44t17 63v71H160Zm81-80h478q-2-9-7-15.5T699-226q-36-18-91.5-36T480-280q-72 0-127.5 18T261-226q-8 4-13 11t-7 15Zm239 0Zm0-360Z"/></svg>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Overlay Filter Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Enhance  CocoPopups with Overlay Filter, highlighting popups with customizable transparent or opaque background.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Create an overlay filter', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Blur Filter', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Background image', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Highly customizable style', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }

        // Analytics
        if (cocopopup_plugin_analytics_is_activeForm()) {
            echo wp_kses(cocopopup_plugin_analytics_content(), $allowed_tags_extensions);
        } else {
            ?>
            <div class="item">
                <div class="top-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M80-120v-80h800v80H80Zm40-120v-280h120v280H120Zm200 0v-480h120v480H320Zm200 0v-360h120v360H520Zm200 0v-600h120v600H720Z"/></svg>
                </div>
                <div class="body-item">
                    <h2><?php esc_html_e( 'Analytics Popup', 'cocopopup' )?></h2>
                    <p><?php esc_html_e( 'Track popup performance and analyze customer behavior with Analytics.', 'cocopopup' )?></p>
                </div>
                <div class="footer-item">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
                </div>
                <div class="separator"></div>
                <div class="more-item">
                    <div class="dropdown">
                        <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                        <div class="dropdown-content">
                            <p><?php esc_html_e( 'Interactive charts', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'List of best Popups', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Interactions', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Visualisations', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Closures', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Different types of charts', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <p><?php esc_html_e( 'Exports to csv', 'cocopopup' );?></p>
                            <div class="separator"></div>
                            <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }

        // Custom 
        ?>
        <div class="item">
            <div class="top-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 -960 960 960" width="60"><path d="M200-160q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v226q-19-9-39-14.5t-41-8.5v-203H200v360h168q9 27 30 47t47 28q-3 20-4 40.5t2 40.5q-36-7-67.5-26.5T320-360H200v120h253q7 22 16 42t22 38H200Zm0-80h253-253Zm481 120-12-60q-12-5-22.5-10.5T625-204l-58 18-40-68 46-40q-2-12-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T669-460l12-60h80l12 60q12 5 22.5 10.5T817-436l58-18 40 68-46 40q2 12 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T773-180l-12 60h-80Zm40-120q33 0 56.5-23.5T801-320q0-33-23.5-56.5T721-400q-33 0-56.5 23.5T641-320q0 33 23.5 56.5T721-240Z"/></svg>
            </div>
            <div class="body-item">
                <h2><?php esc_html_e( 'Custom Popup', 'cocopopup' )?></h2>
                <p><?php esc_html_e( 'Tailor your popups with Custom Popup to meet your unique needs.', 'cocopopup' )?></p>
            </div>
            <div class="footer-item">
                <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank" class="button"><?php esc_html_e( 'Buy Now', 'cocopopup' );?></a>
            </div>
            <div class="separator"></div>
            <div class="more-item">
                <div class="dropdown">
                    <button class="dropbtn"><?php esc_html_e( 'More Details', 'cocopopup' );?><span class="dashicons dashicons-arrow-down-alt2"></span></button>
                    <div class="dropdown-content">
                        <p style="text-align:left"><?php esc_html_e( 'Custom Popup offers flexibility to fully tailor your popups to fit your website\'s specific requirements. Through in-depth consultation, we create custom popup display conditions, ensuring it activates at strategic moments to engage your visitors effectively. Whether showcasing special offers, promoting events, or capturing leads, the possibilities are endless with Custom Popup.', 'cocopopup' );?></p>
                        <div class="separator"></div>
                        <button class="closebtn"><?php esc_html_e( 'See Less', 'cocopopup' );?><span class="dashicons dashicons-arrow-up-alt2"></span></button>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    <div class="pagination">
    <button onclick="prevPage()" id="prevBtn" disabled><?php esc_html_e( 'Previous', 'cocopopup' )?></button>
    <button onclick="nextPage()" id="nextBtn"><?php esc_html_e( 'Next', 'cocopopup' )?></button>
</div>
</div>