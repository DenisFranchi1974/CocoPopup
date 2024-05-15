<?php
/**
 * Plugin Name: CocoPopup
 * Plugin URI: https://www.wpcocoblock.com/popup/
 * Description: Elevate user engagement and drive conversions with CocoPopup  – the ultimate WordPress plugin for creating stunning and effective popups. With intuitive customization and advanced targeting, CocoPopup helps you deliver the perfect message to your audience, boosting your website's performance effortlessly.
 * Version: 1.0.2
 * Author: Franchi Web Design
 * Author URI: https://franchiwebdesign.com/
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: cocopopup
 *
 * @package cocopopup
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/*----------------------------------------------------------------------------------
    Register Block
-----------------------------------------------------------------------------------*/

function cocopopup_block_init() {
    // Registra il blocco
    register_block_type(__DIR__ . '/build');}

add_action( 'init', 'cocopopup_block_init' );

/*----------------------------------------------------------------------------------
    Category Blocks
-----------------------------------------------------------------------------------*/

add_filter( 'block_categories_all' , function( $categories ) {

    // Adding a new category.
	$categories[] = array(
		'slug'  => 'cocopopup-category',
		'title' => __('CocoPopup','cocopopup')
	);

	return $categories;
} );

/*----------------------------------------------------------------------------------
    Enqueue Styles and Script
-----------------------------------------------------------------------------------*/

function cocopopup_load_script(){

	// Frontend
	wp_enqueue_script('frontend', plugins_url('assets/js/frontend.min.js', __FILE__),
		array('jquery'), 
		'1.0', 
		true
	);

	// Localizza lo script e passa l'URL dell'endpoint AJAX di WordPress
    wp_localize_script(
        'frontend', // Nome dello script a cui localizzare
        'frontend_ajax_object', // Nome dell'oggetto JavaScript
        array('ajax_url' => admin_url('admin-ajax.php')) // Dati da passare all'oggetto JavaScript
    );

    // Inserisci il percorso del plugin in un oggetto JavaScript globale
    wp_localize_script('frontend', 'plugin_data', array(
        'pluginUrl' => plugins_url('assets/', __FILE__ ),
    ));

    if ( class_exists( 'woocommerce' ) ) { 
        // WooCommerce è attivo, carica gli script e esegui le funzioni necessarie
        wp_localize_script('frontend', 'wc_cart_params', array(
            'cart_contents_count' => WC()->cart->get_cart_contents_count(),
            'cart_contents' => WC()->cart->get_cart(),
            'cart_total' => WC()->cart->get_cart_total(),
        ));
    }

}
add_action('wp_enqueue_scripts', 'cocopopup_load_script');

/*----------------------------------------------------------------------------------
    Enqueue Styles and Script in Beckend
-----------------------------------------------------------------------------------*/

function cocopopup_load_admin_script() {

    // Verifica se siamo sulla pagina della dashboard
    $screen = get_current_screen();
    if ( $screen && ( $screen->id === 'toplevel_page_popup-information' ) ) {

		// Reset Popup
		wp_enqueue_script(
			'popup-reset-script',
			plugins_url('assets/js/popup-reset-script.min.js', __FILE__),
			array('jquery'),
			'1.0',
			true
		);
		wp_localize_script(
			'popup-reset-script',
			'popupResetAdminScriptData',
			array(
				'ajaxurl' => admin_url('admin-ajax.php'), // URL dell'endpoint AJAX di WordPress
				'resetSuccessMsg' => __('The popup closure count has been reset successfully for the popup with ID: ', 'cocopopup'),
				'resetErrorMsg' => __('An error occurred while resetting the popup closure count.', 'cocopopup')
			)
		);

		// Assests Popup
		wp_enqueue_script(
			'assets-popup',
			plugins_url('assets/js/assets-popup.min.js', __FILE__),
			array('jquery'),
			'1.0',
			true
		);

    }
    // Style Dashboard
    wp_enqueue_style(
        'editor', 
        plugins_url('assets/css/dashboard.css', __FILE__), 
        false, 
        '1.0', 
        'all'
    );

    $file_path = plugin_dir_path(__FILE__) . 'assets/css/custom-admin.css';
    $version = filemtime($file_path); 
    wp_enqueue_style('custom-admin-css', plugins_url('assets/css/custom-admin.css', __FILE__), array(), $version);


}
add_action('admin_enqueue_scripts', 'cocopopup_load_admin_script');

/*----------------------------------------------------------------------------------
    Include File admin page
-----------------------------------------------------------------------------------*/

function cocopopup_load_files() {
    // Admin Page
    include_once(plugin_dir_path(__FILE__) . 'popup-information-content.php');
}

/*----------------------------------------------------------------------------------
    Include
-----------------------------------------------------------------------------------*/

// Pattern
require_once plugin_dir_path( __FILE__ ) . 'pattern/pattern.php';
// Pluign Extension
require_once plugin_dir_path( __FILE__ ) . 'extensions/plugin-extensions.php';

/*----------------------------------------------------------------------------------
    Admin Popup Page Information
-----------------------------------------------------------------------------------*/

// Funzione per mostrare la pagina "Popup Information" nel menu dell'amministratore
function cocopopup_add_popup_information_page() {
    add_menu_page(
        __('CocoPopup', 'cocopopup'), // Titolo della pagina
        __('CocoPopup', 'cocopopup'), // Nome nel menu
        'manage_options', // Capabilità richiesta per accedere alla pagina
        'popup-information', // Slug della pagina
        'cocopopup_display_popup_information_page', // Funzione per mostrare il contenuto della pagina
        plugins_url( 'assets/images/cocopopup-icon.png', __FILE__ ) // URL dell'immagine PNG
    );
}

add_action('admin_menu', 'cocopopup_add_popup_information_page');

// Extensions
function cocopopup_add_subpage_to_popup_information() {
    add_submenu_page(
        'popup-information', // Slug della pagina principale
        __('Extensions', 'cocopopup'), // Titolo della sottopagina
        __('Extensions', 'cocopopup'), // Nome nel menu
        'manage_options', // Capabilità richiesta per accedere alla sottopagina
        'popup-information-subpage', // Slug della sottopagina
        'cocopopup_display_subpage_content' // Funzione per mostrare il contenuto della sottopagina
    );
}
add_action('admin_menu', 'cocopopup_add_subpage_to_popup_information');

// Funzione per mostrare il contenuto della sottopagina
function cocopopup_display_subpage_content() {
     
    wp_enqueue_script('extensions-script', plugin_dir_url(__FILE__) . 'extensions/js/extensions.js', array('jquery'), '1.0.0', true);

    // Includi il file separato per il contenuto della sottopagina
    include_once(plugin_dir_path(__FILE__) . 'extensions/extensions.php');
}

// Funzione per mostrare il contenuto della pagina "Popup Information"
function cocopopup_display_popup_information_page() {
    // Trova le informazioni sui popup
    $popup_info = cocopopup_find_popup_block_info();
    // Altrimenti, mostra il contenuto normale della pagina
    cocopopup_load_files();
}

// Contenuti Popup
function cocopopup_find_popup_block_info() {
    // Ottieni tutti i tipi di contenuti
    $post_types = get_post_types();
    // Array per memorizzare le informazioni del blocco Popup
    $popup_info = array();
    // Loop attraverso i tipi di contenuti
    foreach ($post_types as $post_type) {
        // Ottieni gli ID dei post di quel tipo di contenuto
        $post_ids = get_posts(array(
            'post_type' => $post_type,
            'fields' => 'ids',
            'posts_per_page' => -1,
        ));
        // Loop attraverso gli ID dei post
        foreach ($post_ids as $post_id) {
            // Ottieni il contenuto del post
            $content = get_post_field('post_content', $post_id);
            // Verifica se ci sono blocchi di popup nel contenuto del post
            $blocks = parse_blocks($content);
            foreach ($blocks as $block) {
                if ($block['blockName'] === 'cp/cocopopup') {
                    // Ottieni i dati del blocco
                    $popup_id = isset($block['attrs']['popupId']) ? $block['attrs']['popupId'] : '';
                    $popup_name = isset($block['attrs']['popupName']) ? $block['attrs']['popupName'] : '';
                    $popup_date_date = isset($block['attrs']['date']) ? $block['attrs']['date'] : '';
                    $popup_date_end_date = isset($block['attrs']['endDate']) ? $block['attrs']['endDate'] : '';
                    // Aggiungi le informazioni trovate all'array $popup_info
                    $popup_info[] = array(
                        'post_id' => $post_id,
                        'popup_id' => $popup_id,
                        'popup_name' => $popup_name,
                        'popup_date_date' => $popup_date_date,
                        'popup_date_end' => $popup_date_end_date,
                        'post_title' => get_the_title($post_id),
                    );
                }
            }
        }
    }
    // Restituisci le informazioni trovate del blocco Popup
    return $popup_info;
}

/* Risposte Ajax */

// Registra i metadati per il conteggio delle chiusure del popup quando viene creato un nuovo popup
function cocopopup_register_popup_closure_count_metadata($post_id) {
    // Inizializza il conteggio delle chiusure del popup nel localStorage
    $popup_id = 'popupClosureCount_' . $post_id;
    if (!isset($_SESSION[$popup_id])) {
        $_SESSION[$popup_id] = 0;
    }

}
add_action('cocopopup/create', 'cocopopup_register_popup_closure_count_metadata');

// Registra i metadati per le visualizzazioni del popup quando viene creato un nuovo popup
function cocopopup_register_popup_closure_view_metadata($popup_id) {
    // Inizializza le visualizzazioni del popup nel localStorage
    $transient_name = 'popupVieweCount_' . $popup_id;
    if (false === get_transient($transient_name)) {
        set_transient($transient_name, 0);
    }
}
add_action('cocopopup/create', 'cocopopup_register_popup_closure_view_metadata');

// Reset Popup
function cocopopup_reset_popup_closure_count_ajax() {

    if ( isset( $_POST['_wpnonce']) && wp_verify_nonce(sanitize_text_field(wp_unslash( $_POST['_wpnonce'])), 'popup_id' ))
    $popup_id = sanitize_text_field(wp_unslash($_POST['popup_id']));
    // Controlla se la richiesta AJAX è stata inviata correttamente
    if (isset($_POST['popup_id'])) {
        // Ottieni l'ID del popup dalla richiesta AJAX
        $popup_id =sanitize_text_field(wp_unslash( $_POST['popup_id']));

        // Azzerare il conteggio delle chiusure del popup
        delete_transient('popupClosureCount_' . $popup_id);

		 // Azzerare il conteggio delle chiusure del popup
		 delete_transient('popupVieweCount_' . $popup_id);

        // Imposta il valore nella tabella a "0"
        update_option('popupClosureCount_' . $popup_id, 0);

		 // Imposta il valore nella tabella a "0"
		 update_option('popupVieweCount_' . $popup_id, 0);

        // Restituisci una risposta di successo
        echo esc_html__( 'success', 'cocopopup' );
    } else {
        // Se la richiesta AJAX non è valida, restituisci un errore
        echo esc_html__( 'error', 'cocopopup' );
    }

    // Assicurati di terminare l'esecuzione dopo aver gestito la richiesta AJAX
    wp_die();
}
add_action('wp_ajax_reset_popup_closure_count', 'cocopopup_reset_popup_closure_count_ajax');

add_action('wp_ajax_update_popup_closure_count', 'cocopopup_update_popup_closure_count_callback');
add_action('wp_ajax_nopriv_update_popup_closure_count', 'cocopopup_update_popup_closure_count_callback'); // Per gli utenti non loggati

function cocopopup_update_popup_closure_count_callback() {
    // Verifica che sia stata passata l'ID del popup nella richiesta AJAX
    if ( isset( $_POST['_wpnonce']) && wp_verify_nonce(sanitize_text_field(wp_unslash( $_POST['_wpnonce'])), 'popup_id' ))
    $popup_id = sanitize_text_field(wp_unslash($_POST['popup_id']));
    if (isset($_POST['popup_id'])) {
        $popup_id = sanitize_text_field(wp_unslash($_POST['popup_id']));
        
        $popup_closure_count = intval(get_transient('popupClosureCount_' . $popup_id));
        $popup_closure_count++; // Incrementa il conteggio delle chiusure del popup
        set_transient('popupClosureCount_' . $popup_id, $popup_closure_count); // Salva il nuovo conteggio

        // Invia il conteggio aggiornato come risposta AJAX
        echo esc_html($popup_closure_count);
    } else {
        // Se l'ID del popup non è stato passato nella richiesta AJAX, restituisci un errore
        echo esc_html__('Error: Popup ID not provided.', 'cocopopup');
    }

    // Assicurati di terminare l'esecuzione dopo aver gestito la richiesta AJAX
    wp_die();
}

add_action('wp_ajax_update_popup_viewe_count', 'cocopopup_update_popup_viewe_count_callback');
add_action('wp_ajax_nopriv_update_popup_viewe_count', 'cocopopup_update_popup_viewe_count_callback'); // Per gli utenti non loggati

function cocopopup_update_popup_viewe_count_callback() {

    if ( isset( $_POST['_wpnonce']) && wp_verify_nonce(sanitize_text_field(wp_unslash( $_POST['_wpnonce'])), 'popup_id' ))
    $popup_id = sanitize_text_field(wp_unslash($_POST['popup_id']));
    // Verifica che sia stata passata l'ID del popup nella richiesta AJAX
    if (isset($_POST['popup_id'])) {
        $popup_id = sanitize_text_field(wp_unslash($_POST['popup_id']));

        // Per ora, simuliamo un conteggio incrementale
        $popup_viewe_count = intval(get_transient('popupVieweCount_' . $popup_id));
        $popup_viewe_count++; // Incrementa il conteggio delle visualizzazioni del popup
        set_transient('popupVieweCount_' . $popup_id, $popup_viewe_count); // Salva il nuovo conteggio

        // Invia il conteggio aggiornato come risposta AJAX
        echo esc_html($popup_viewe_count);
    } else {
        // Se l'ID del popup non è stato passato nella richiesta AJAX, restituisci un errore
        echo esc_html__('Error: Popup ID not provided.', 'cocopopup');
    }

    // Assicurati di terminare l'esecuzione dopo aver gestito la richiesta AJAX
    wp_die();
}

// Funzione per incrementare il conteggio delle chiusure del popup utilizzando i transients di WordPress
function cocopopup_increment_popup_closure_count($popup_id) {
    $transient_name = 'popupClosureCount_' . $popup_id;
    $current_count = get_transient($transient_name);
    if ($current_count === false) {
        $current_count = 0;
    }
    $new_count = $current_count + 1;
    set_transient($transient_name, $new_count);
    
}

// Funzione per incrementare il conteggio delle visualizzazioni del popup utilizzando i transients di WordPress
function cocopopup_increment_popup_viewe_count($popup_id) {
    $transient_name = 'popupVieweCount_' . $popup_id;
    $current_count = get_transient($transient_name);
    if ($current_count === false) {
        $current_count = 0;
    }
    $new_count = $current_count + 1;
    set_transient($transient_name, $new_count);
}

/*----------------------------------------------------------------------------------
    Allow tag extension
-----------------------------------------------------------------------------------*/

function cocopopup_get_allowed_tags_extensions() {
    return array(
        'div' => array(
            'class' => array(),
            'id' => array(),
            'style' => array(),
        ),
        'span' => array(
            'class' => array(),
            'id' => array(),
            'style' => array(),
        ),
        'button' => array(
            'class' => array(),
            'id' => array(),
            'type' => array(),
            'onclick' => array(),
        ),
        'form' => array(
            'action' => array(),
            'method' => array(),
            'enctype' => array(),
        ),
        'input' => array(
            'type' => array(),
            'name' => array(),
            'value' => array(),
            'placeholder' => array(),
            'class' => array(),
            'id' => array(),
        ),
        'script' => array(
            'type' => array(),
            'src' => array(),
        ),
        'a' => array(
            'href' => array(),
            'target' => array(),
            'rel' => array(),
            'class' => array(),
        ),
        'h1' => array(
            'class' => array(),
            'id' => array(),
        ),
        'h2' => array(),
        'h3' => array(),
        'h4' => array(),
        'h5' => array(),
        'p' => array( 'class' => array(),),
        'b' => array(),
        'br' => array(),
        'strong' => array(),
        'img' => array(
            'src' => array(),
            'alt' => array(),
            'class' => array(),
            'width' => array(),
            'height' => array(),
        ),
        'table' => array(
            'class' => array(),
        ),
        'tr' => array(),
        'td' => array(),
        'ul' => array(
            'class' => array(),
        ),
        'li' => array(),
    );
}