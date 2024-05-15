<?php 

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if (cocopopup_plugin_analytics_is_active()) {
            echo esc_html(cocopopup_plugin_analytics_dashboard_content());
    } else {?>
                                                    
<div class="wrap cocopopup-dashboard-wrap">

<?php
    // Trova le informazioni del blocco Popup in tutti i contenuti del sito
    $popup_info = cocopopup_find_popup_block_info();
    // User Name
    $current_user = wp_get_current_user();
    $welcome_message = esc_html__( 'Hi', 'cocopopup' );
    if ($current_user && isset($current_user->display_name)) {
        $welcome_message .= ' ' . esc_html($current_user->display_name);
    } elseif ($current_user && isset($current_user->user_login)) {
        $welcome_message .= ' ' . esc_html($current_user->user_login);
    } else {
        $welcome_message .= esc_html__( ' Admin', 'cocopopup' );
    }
    $dashboard_message = esc_html__( 'welcome to the CocoPopup Dashboard', 'cocopopup' );
    $modal_message = esc_html__( 'I am your personal assistant.', 'cocopopup' );

    // Url

    // Community
    $url_community = 'https://www.wpcocoblock.com/community/index.php';
    $sanitized_url_community = esc_url($url_community);
    // Extensions
    $url_extensions = 'https://www.wpcocoblock.com/popup-extensions/';
    $sanitized_url_extensions = esc_url($url_extensions);
    // Guides
    $url_guides = 'https://www.wpcocoblock.com/documentation/';
    $sanitized_url_guides = esc_url($url_guides);
    // Pricing
    $url_pro = 'https://www.wpcocoblock.com/popup/#pricing';
    $sanitized_url_pro = esc_url($url_pro);

    // Allow tag in extensions
    $allowed_tags_extensions = cocopopup_get_allowed_tags_extensions();
?>

    <div class="container">
        <div class="header-dashboard">
            <div class="cocopopup-welcome">
                <div class="cocopopup-logo">
                    <img src="<?php echo esc_url( plugins_url( 'assets/images/cocopopup.png', __FILE__ ) ); ?>" alt="<?php esc_html_e( 'CocoPopup', 'cocopopup' )?>" />
                </div>
                <h1><?php echo esc_html($welcome_message) . ', ' . esc_html($dashboard_message); ?></h1>
            </div>
            <div class="cocopopup-menu">
                <p style="text-decoration:underline;font-weight:bold"><?php esc_html_e('V 1.0.2','cocopopup')?></p> 
                <button id="theme-toggle">
                    <span class="theme-icon" id="sun-icon">&#9728;</span> <!-- Sole -->
                    <span class="theme-icon" id="moon-icon">&#9790;</span> <!-- Luna -->
                </button>
                <div class="cocopopup-avatar-daschboard" id="avatar-dashboard">
                    <img src="<?php echo esc_url(plugins_url( 'assets/images/cocopopup-assistance.png', __FILE__ )); ?>" alt="<?php esc_html_e( 'CocoPopup assistance', 'cocopopup' )?>" />
                    <span class="dashicons dashicons-editor-help"></span>
                </div>
                <!-- Modal -->
                <div id="myModal" class="modal">
                    <!-- Contenuto del modale -->
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <h2><?php echo esc_html($welcome_message) . ', ' . esc_html($modal_message); ?></h2>
                        <p><?php esc_html_e('This is the Popup dashboard where you can check the results obtained from your popups. At the top, you\'ll find useful links. You can visit our extensions, ask for support, join our Community, and preview our extensions live. On the right, you can see the total number of popups you\'ve created and create new popups. Our popup is a Gutenberg block, so you can use it anywhere on your site. You can create it in a post, on a page, in a WooCommerce product, or if you want to display it site-wide, you can simply add it to the Footer using the respective link. At the bottom, there are reports of the created popups, including the name, ID, location, number of views, and you can edit or reset it. If you reset it, the views will start from 0. As for interactions, they are available in the "Analytics Popup" extension where, in addition to interactions, you\'ll have the possibility to view interactive charts and even download them in CSV format. Start Date and End Date are only available with the "Schedule Popup" extension where you can schedule the appearance and disappearance date of the popup. You can find more information about our ','cocopopup')?><a href="<?php echo esc_url($sanitized_url_guides); ?>" target="_blank"><?php esc_html_e( 'Popup here!', 'cocopopup' )?></a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cocopopup-content-body-dashboard">
            <!-- Main -->
            <div class="main">
                <div class="cocopopup-content-header-dashboard">
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank">
                        <div class="content one">
                            <h4><?php esc_html_e('Extensions','cocopopup') ?></h4>
                            <span class="dashicons dashicons-star-filled"></span>
                        </div>
                    </a>
                    <a href="<?php echo esc_url($sanitized_url_community); ?>" target="_blank">
                        <div class="content two">
                            <h4><?php esc_html_e( 'Support', 'cocopopup' )?></h4>
                            <span class="dashicons dashicons-sos"></span>
                        </div>
                    </a>
                    <a href="<?php echo esc_url($sanitized_url_community); ?>" target="_blank">
                        <div class="content three">
                            <h4><?php esc_html_e( 'Community', 'cocopopup' )?></h4>
                            <span class="dashicons dashicons-groups"></span>
                        </div>
                    </a>
                    <a href="<?php echo esc_url($sanitized_url_extensions); ?>" target="_blank">
                        <div class="content four">
                            <h4><?php esc_html_e( 'Live Demos', 'cocopopup' )?></h4>
                            <span class="dashicons dashicons-visibility"></span>
                        </div>
                    </a>
                </div>
                <div class="sep-dash-free"></div>
            
                <!-- Report -->
                <div id="tab1" class="tabcontent active">
                    <table class="widefat cocopopup-table">
                        <thead>
                            <tr class="cocopopup-tr-master">
                                <th><?php esc_html_e( 'Name', 'cocopopup' )?></th>
                                <th><?php esc_html_e( 'ID', 'cocopopup' )?></th>
                                <th><?php esc_html_e( 'Situated in', 'cocopopup' )?></th>
                                <th><?php esc_html_e( 'Start Date', 'cocopopup' )?></th>
                                <th><?php esc_html_e( 'End Date', 'cocopopup' )?></th>
                                <th><?php esc_html_e( 'Interactions', 'cocopopup' )?></th>
                                <th><?php esc_html_e( 'Visualizations', 'cocopopup' )?></th>
                                <th><?php esc_html_e( 'Edit', 'cocopopup' )?></th>
                                <th><?php esc_html_e( 'Reset', 'cocopopup' )?></th> 
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($popup_info as $popup) :  
                            // Calcolo del conteggio delle interazioni e delle visualizzazioni
                            $closureCount = get_transient('popupClosureCount_' . $popup['popup_id']);
                            $viewCount = get_transient('popupVieweCount_' . $popup['popup_id']);
                            
                            // Aggiunta delle classi in base al conteggio delle interazioni
                            $closureClass = '';
                            if ($closureCount == 0) {
                                $closureClass = 'zero-interactions';
                            } elseif ($closureCount == 1) {
                                $closureClass = 'one-interaction';
                            } elseif ($closureCount >= 2 && $closureCount <= 9) {
                                $closureClass = 'low-interactions';
                            } elseif ($closureCount > 9 && $closureCount <= 50) {
                                $closureClass = 'medium-interactions';
                            } elseif ($closureCount > 50) {
                                $closureClass = 'high-interactions';
                            }
                            // Aggiunta delle classi in base al conteggio delle visualizzazioni
                            $viewClass = '';
                            if ($viewCount == 0) {
                                $viewClass = 'zero-views';
                            } elseif ($viewCount == 1) {
                                $viewClass = 'one-view';
                            } elseif ($viewCount >= 2 && $viewCount <= 9) {
                                $viewClass = 'low-views';
                            } elseif ($viewCount > 9 && $viewCount <= 50) {
                                $viewClass = 'medium-views';
                            } elseif ($viewCount > 50) {
                                $viewClass = 'high-views';
                            }
                            ?>
                            <tr>
                                <td><?php echo esc_html($popup['popup_name']); ?></td>
                                <td><?php echo esc_html($popup['popup_id']); ?></td> 
                                <td><?php echo esc_html($popup['post_title']); ?></td>
                                <td><?php echo esc_html(str_replace('T', ' ', $popup['popup_date_date'])); ?></td>
                                <td><?php echo esc_html(str_replace('T', ' ', $popup['popup_date_end'])); ?></td>
                                <td><?php esc_html_e( 'Pro Only', 'cocopopup' )?></td>
                                <td class="<?php echo esc_attr( $viewClass); ?>"><?php echo esc_html(($viewCount > 0) ? $viewCount : '0'); ?></td>
                                <td><a href="<?php echo esc_url(get_edit_post_link( $popup['post_id'] )); ?>"><?php esc_html_e( 'Edit', 'cocopopup' )?></a></td>
                                <td><button onclick="cocoPopupResetPopupClosureCount('<?php echo esc_js($popup['popup_id']); ?>')"><?php esc_html_e( 'Reset', 'cocopopup' )?></button></td> 
                            </tr>                  
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
                
            </div>
            <!-- Sidebar -->
            <div class="sidebar">
                <h4><?php esc_html_e( 'Total Popups', 'cocopopup' )?></h4>
                <?php
                // Ottenere il numero totale dei popup
                $total_popups = count($popup_info);
                ?>
                <!-- Stampare il numero totale dei popup -->
                <div class="total-popup">
                    <span class="dashicons dashicons-images-alt2"></span>
                    <span class="text-total"><?php echo esc_html($total_popups); ?></span>
                </div>
                <h4><?php esc_html_e( 'Create a new Popup', 'cocopopup' )?></h4>
                <div class="create-popup">
                    <div>
                        <a href="<?php echo esc_url(admin_url('post-new.php')); ?>"><?php esc_html_e( 'In a new post', 'cocopopup' )?></a>
                    </div>
                    <div>
                        <a href="<?php echo esc_url(admin_url('post-new.php?post_type=page')); ?>"><?php esc_html_e( 'In a new page', 'cocopopup' )?></a>
                    </div>
                    <div>
                        <a href="<?php echo esc_url(admin_url('site-editor.php')); ?>"><?php esc_html_e( 'On the site', 'cocopopup' )?></a>
                    </div>
                </div>
               <?php
                // All Extensions
                if (cocopopup_plugin_all_extensions_is_activeForm()) {
                    echo wp_kses(cocopopup_plugin_all_extensions_content(), $allowed_tags_extensions);
                } else {
                    ?>
                    <h4><?php esc_html_e( 'Upgrade to Pro for Exclusive Features', 'cocopopup' )?></h4>
                    <div class="form-pro-version">
                    <span class="dashicons dashicons-superhero-alt"></span>
                        <a href="<?php echo esc_url($sanitized_url_pro) ?>"class="link-pro" target="_blank"><?php esc_html_e('Upgrade to Pro','cocopopup'); ?></a>
                    </div>
                    <?php }
                ?>
            </div>
        </div>
    </div>

</div>

<?php } ?>
