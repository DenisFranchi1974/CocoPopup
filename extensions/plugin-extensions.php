<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/*----------------------------------------------------------------------------------
    Extension
-----------------------------------------------------------------------------------*/

/*---------------------------------------
    Scroll
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_scroll_is_active() {
    return class_exists('CocoPopupScrollClass');
}

function cocopopup_plugin_scroll_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_scroll_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v1', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_scroll_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_scroll_is_activeForm() {
    return class_exists('CocoPopupScrollClassForm');
}

/*---------------------------------------
    Countdown
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_countdown_is_active() {
    return class_exists('CocoPopupCountdownClass');
}

function cocopopup_plugin_countdown_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_countdown_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v2', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_countdown_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_countdown_is_activeForm() {
    return class_exists('CocoPopupCountdownClassForm');
}

/*---------------------------------------
    Age Restriction
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_age_is_active() {
    return class_exists('CocoPopupAgeClass');
}

function cocopopup_plugin_age_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_age_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v3', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_age_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_age_is_activeForm() {
    return class_exists('CocoPopupAgeClassForm');
}

/*---------------------------------------
    Woocomemrce
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_woo_is_active() {
    return class_exists('CocoPopupWooClass');
}

function cocopopup_plugin_woo_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_woo_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v4', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_woo_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_woo_is_activeForm() {
    return class_exists('CocoPopupWooClassForm');
}

/*---------------------------------------
    Button Adder
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_button_is_active() {
    return class_exists('CocoPopupButtonClass');
}

function cocopopup_plugin_button_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_button_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v5', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_button_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_button_is_activeForm() {
    return class_exists('CocoPopupButtonClassForm');
}

/*---------------------------------------
    Exit Intent
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_intent_is_active() {
    return class_exists('CocoPopupIntentClass');
}

function cocopopup_plugin_intent_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_intent_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v6', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_intent_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_intent_is_activeForm() {
    return class_exists('CocoPopupIntentClassForm');
}

/*---------------------------------------
    Inactivity Event
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_inatcivity_is_active() {
    return class_exists('CocoPopupInatcivityClass');
}

function cocopopup_plugin_inatcivity_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_inatcivity_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v7', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_inatcivity_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_inatcivity_is_activeForm() {
    return class_exists('CocoPopupInatcivityClassForm');
}

/*---------------------------------------
    Advenced Targeting
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_targeting_is_active() {
    return class_exists('CocoPopupTargetingClass');
}

function cocopopup_plugin_targeting_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_targeting_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v8', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_targeting_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_targeting_is_activeForm() {
    return class_exists('CocoPopupTargetingClassForm');
}

/*---------------------------------------
    Schedule
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_schedule_is_active() {
    return class_exists('CocoPopupScheduleClass');
}

function cocopopup_plugin_schedule_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_schedule_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v9', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_schedule_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_schedule_is_activeForm() {
    return class_exists('CocoPopupScheduleClassForm');
}

/*---------------------------------------
    Advanced Closing
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_closing_is_active() {
    return class_exists('CocoPopupClosingClass');
}

function cocopopup_plugin_closing_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_closing_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v10', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_closing_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_closing_is_activeForm() {
    return class_exists('CocoPopupClosingClassForm');
}

/*---------------------------------------
    Overlay Filter
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_overlay_is_active() {
    return class_exists('CocoPopupOverlayClass');
}

function cocopopup_plugin_overlay_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_overlay_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v11', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_overlay_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_overlay_is_activeForm() {
    return class_exists('CocoPopupOverlayClassForm');
}

/*---------------------------------------
    Analytics
-----------------------------------------*/

// Plugin is active 
function cocopopup_plugin_analytics_is_active() {
    return class_exists('CocoPopupAnalyticsClass');
}

function cocopopup_plugin_analytics_get_status_rest_endpoint() {
    $plugin_active = cocopopup_plugin_analytics_is_active();
    return $plugin_active;
}

add_action('rest_api_init', function() {
    register_rest_route('cocopopup/v12', '/plugin-status', array(
        'methods' => 'GET',
        'callback' => 'cocopopup_plugin_analytics_get_status_rest_endpoint',
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});

// Class form
function cocopopup_plugin_analytics_is_activeForm() {
    return class_exists('CocoPopupAnalyticsClassForm');
}

// Class dashboard
function cocopopup_plugin_analytics_is_activeDashboard() {
    return class_exists('CocoPopupAnalyticsClassDashboard');
}

/*---------------------------------------
    All Extension
-----------------------------------------*/

// Class form
function cocopopup_plugin_all_extensions_is_activeForm() {
    return class_exists('CocoPopupallClassForm');
}
