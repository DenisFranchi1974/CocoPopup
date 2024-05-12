<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Category
function cocopopup_register_block_categories() {
	if ( class_exists( 'WP_Block_Patterns_Registry' ) ) {
        // Popup
        register_block_pattern_category(
            'popup',
            array( 'label' => __( 'Popup', 'cocopopup' ) )
        );

    }
}
add_action( 'init', 'cocopopup_register_block_categories' );

// Pattern
function cocopopup_register_block_patterns() {

    if ( class_exists( 'WP_Block_Patterns_Registry' ) ) {
        // Popup 1
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-1.php';
        // Popup 2
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-2.php';
        // Popup 3
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-3.php';
        // Popup 4
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-4.php';
        // Popup 5
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-5.php';
        // Popup 6
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-6.php';
        // Popup 7
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-7.php';
        // Popup 8
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-8.php';
        // Popup 9
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-9.php';
        // Popup 10
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-10.php';
        // Popup 11
        require_once plugin_dir_path( __FILE__ ) . 'library/popup/popup-11.php';

    }

}
add_action( 'init', 'cocopopup_register_block_patterns' );