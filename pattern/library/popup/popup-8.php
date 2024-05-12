<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$get_url =  plugin_dir_url( __FILE__ );

$imagesPopup8= [
    $get_url . "../../images/popup-8.webp",
];

$content = '
<!-- wp:cp/cocopopup {"popupName":"Popup 8","popupId":"popup-8","borderStylePopup":"none","paddingPopup":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"selectedAnimationPopupIn":"fadeInPopup","durationAnimation":0.7,"paddingPopupButton":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"borderStylePopupButton":"none","backgroundColorButton":"#ffffff00","backgroundColorHoverButton":"#ffffff00","topButton":3,"rightButton":3,"sizeButton":20,"colorTextButton":"#111111","colorTextButtonHover":"#111111","enableCustomWidthPopup":true,"sizeButtonTablet":20,"sizeButtonMobile":20} -->
<div class="wp-block-cp-cocopopup cocopopup center bpptop rightbpd bp2ptop rightbp2d" style="border-top-width:1px;border-bottom-width:1px;border-right-width:1px;border-left-width:1px;border-style:none;border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-color:#cccccc;--border-color-hover:#cccccc;transition:background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;background:#ffffff;--background-hover:#ffffff;box-shadow: 0px 0px 0px 0px undefined;--box-shadow-hover: 0px 0px 0px 0px undefined;z-index:999;--duration-animation-popup:0.7s;opacity:1;--opacity-button:1 ;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;--border-top-width:1px;--border-bottom-width:1px;--border-right-width:1px;--border-left-width:1px;--border-style:none;--border-top-left-radius:2px;--border-top-right-radius:2px;--border-bottom-left-radius:2px;--border-bottom-right-radius:2px;--border-color:#cccccc;--border-color-hover-button:#cccccc;--transition-button:background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s, color 0.5s ease;--background-button:#ffffff00;--background-hover-button:#ffffff00;--boxShadow-button: 0px 0px 0px 0px undefined;--box-shadow-hover-button: 0px 0px 0px 0px undefined;--opacity-button2:1 ;--padding-top2:6px;--padding-bottom2:6px;--padding-left2:6px;--padding-right2:6px;--border-top-width2:1px;--border-bottom-width2:1px;--border-right-width2:1px;--border-left-width2:1px;--border-style2:solid;--border-top-left-radius2:2px;--border-top-right-radius2:2px;--border-bottom-left-radius2:2px;--border-bottom-right-radius2:2px;--border-color2:#cccccc;--border-color-hover-button2:#cccccc;--transition-button2:background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s, color 0.5s ease;--background-button2:#ffffff;--background-hover-button2:#ffffff;--boxShadow-button2: 0px 0px 0px 0px undefined;--box-shadow-hover-button2: 0px 0px 0px 0px undefined;--left-button:5%;--top-button:3%;--right-button:3%;--bottom-button:5%;--left-button-2:10%;--top-button-2:5%;--right-button-2:10%;--bottom-button-2:10%;--size-button:20px;--font-size-button-tablet:20px;--font-size-button-mobile:20px;--fontWeight-button:600;--textTransform-button:none;--textDecoration-button:none;--lineHeight-button:20.8px;--letterSpacing-button:1px;--color-button:#111111;--color-button-hover:#111111;--size-button2:14px;--font-size-button2-tablet:16px;--font-size-button2-mobile:16px;--fontWeight-button2:600;--textTransform-button2:none;--textDecoration-button2:none;--lineHeight-button2:20.8px;--letterSpacing-button2:1px;--color-button2:#505050;--color-button2-hover:#505050;--z-index-button-2:999px;width:600px;--width-tablet:500px;--width-popup-mobile:300px;max-width:none!important;position:fixed;display: none;overflow-y:auto" id="popup-8" data-logic-7="false" data-logic-8="false" data-logic-9="false" data-logic-10="false" data-delay="1000" data-time-exit="200" data-select-option-page="page-1" data-time="5000" text-button="X" data-popup-name="Popup 8" data-popup-id="popup-8" data-direction-scroll="down" data-time-direction="500" data-close-count="0" data-desktop="true" data-tablet="true" data-mobile="true" data-px-desktop="769" data-px-tablet="768" data-px-mobile="480" data-class="" data-number-visit="10" data-url-extern="" data-time-url="0" data-time-external-link="0" data-time-logged="0" data-disable-closing-popup="false" data-language-extit="false" data-language-select="en" data-schedule="false" data-operation-system="false" data-windows="false" data-mac="false" data-linus="false" data-browser="false" data-browser-select="chrome" data-time-popup-closed="2000" data-woo-cart-empty="false" data-woo-cart-count="false" data-woo-number-product-cart="0" data-woo-cart-id="false" data-woo-cart-amount="false" data-woo-amount-product-cart="0" data-woo-select-amount="lower" data-condition-and-or="or" data-class-element="" data-popup-reopen="false" data-class-element-hover="" data-exit-all="true" data-events-select="exitTime" data-select-closed="close-instant" data-open-sound="false" data-time-opacity-exit="2000" data-time-opacity="2000" data-color-contdown="#0000006E" data-second-contdown="20" data-text-before-contdown="The Popup will close in" data-text-after-contdown="seconds" data-overflow-body="true" data-filter-body="false" data-size-contdown="16" data-vertical-contdown="10" data-horizontal-contdown="10" data-color-text-contdown="#333" data-zindex-button="999" data-animation-popup-in="fadeInPopup" data-percentage-page="50" data-enable-button-2="false" data-text-button-2="X" data-select-contdown="seconds" data-date-contdown="" data-close-contdown-automatic="false" data-enable-flip-contdown="true" data-font-weight-cont="400" data-text-days-round="Days" data-text-hours-round="Hours" data-text-days-minutes="Minutes" data-text-days-seconds="Seconds" data-body-image="false" data-text-day-age="Day" data-text-month-age="Month" data-text-year-age="Year" data-language-month-age="en" data-error-form-age="You need to set your date of birth!" data-error-age-age="Sorry, you are not old enough to log in!" data-enable-welcome-age="false" data-welcome-age="Welcome to our site!" data-link-button-one-age-window="false" data-text-button-one-age="I\'m not 18" data-text-button-two-age="Confirm age" data-enable-button-one="true" data-delay-close-age="3000" data-gap-form-age="20" data-height-form-age="36" data-size-form-age="16" data-border-width-form-age="1" data-border-style-form-age="solid" data-border-radius-form-age="4" data-border-color-form-age="#ccc" data-border-color-hover-form-age="#ccc" data-trasition-border-color-form-age="0.5" data-margin-form-age="20" data-background-color-form-age="#6224cc" data-background-color-hover-form-age="#6224cc" data-transition-background-color-form-age="0.5" data-color-form-age="#FFFFFF" data-color-hover-form-age="#FFFFFF" data-transition-color-form-age="0.5" data-gap-button-age="20" data-padding-button-age-top="8" data-padding-button-age-bottom="8" data-padding-button-age-left="16" data-padding-button-age-right="16" data-border-width-button-age="1" data-border-style-button-age="solid" data-border-radius-button-age="4" data-border-color-button-age="#ccc" data-border-color-hover-button-age="#ccc" data-trasition-border-color-button-age="0.5" data-size-button-age="16" data-background-color-button-age="#6224cc" data-background-color-hover-button-age="#6224cc" data-transition-background-color-button-age="0.5" data-color-button-age="#FFFFFF" data-color-hover-button-age="#FFFFFF" data-transition-color-button-age="0.5" data-background-seconds="#6224cc" data-radius-seconds="100" data-padding-seconds="5" data-padding-right-second="10" data-link-button-no-window="true" data-link-button-yes-window="true" data-blur="false" data-blur-intens="4" data-close-button="false" data-animation-close="500">

<!-- wp:group {"style":{"background":{"backgroundImage":{"url":"'. esc_url( $imagesPopup8[0] ) .'","id":200,"source":"file","title":"starfishes-1351559_1280"}},"spacing":{"padding":{"right":"var:preset|spacing|20","left":"var:preset|spacing|20","top":"0","bottom":"0"},"margin":{"top":"0","bottom":"0"},"blockGap":"0"},"dimensions":{"minHeight":"400px"}},"layout":{"type":"flex","orientation":"vertical","verticalAlignment":"center"}} -->
<div class="wp-block-group" style="min-height:400px;margin-top:0;margin-bottom:0;padding-top:0;padding-right:var(--wp--preset--spacing--20);padding-bottom:0;padding-left:var(--wp--preset--spacing--20)"><!-- wp:heading {"level":4,"style":{"typography":{"fontStyle":"normal","fontWeight":"100","fontSize":"24px"}}} -->
<h4 class="wp-block-heading" style="font-size:24px;font-style:normal;font-weight:100">'.__('HOLIDAY EVENT','cocopopup').'</h4>
<!-- /wp:heading -->

<!-- wp:heading {"style":{"spacing":{"margin":{"top":"var:preset|spacing|10","bottom":"0"}},"typography":{"fontSize":"48px"}}} -->
<h2 class="wp-block-heading" style="margin-top:var(--wp--preset--spacing--10);margin-bottom:0;font-size:48px">'.__('SUMMER','cocopopup').'</h2>
<!-- /wp:heading -->

<!-- wp:heading {"style":{"typography":{"fontSize":"62px"},"spacing":{"margin":{"top":"0","bottom":"0"}}}} -->
<h2 class="wp-block-heading" style="margin-top:0;margin-bottom:0;font-size:62px">'.__('SALE','cocopopup').'</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"10px"},"elements":{"link":{"color":{"text":"var:preset|color|base-2"}}}},"textColor":"base-2"} -->
<p class="has-base-2-color has-text-color has-link-color" style="font-size:10px">'.__('Lorem ipsum dolor sit amen, te bonorum blandito pri, assume utinam passim eu.','cocopopup').'</p>
<!-- /wp:paragraph -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"var:preset|spacing|10","bottom":"var:preset|spacing|10"},"blockGap":"8px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-top:var(--wp--preset--spacing--10);margin-bottom:var(--wp--preset--spacing--10)"><!-- wp:heading {"level":5,"style":{"spacing":{"padding":{"top":"6px","bottom":"6px","left":"12px","right":"12px"}}},"backgroundColor":"base-2"} -->
<h5 class="wp-block-heading has-base-2-background-color has-background" style="padding-top:6px;padding-right:12px;padding-bottom:6px;padding-left:12px">'.__('2','cocopopup').'</h5>
<!-- /wp:heading -->

<!-- wp:heading {"level":5,"style":{"spacing":{"padding":{"top":"6px","bottom":"6px","left":"12px","right":"12px"}}},"backgroundColor":"base-2"} -->
<h5 class="wp-block-heading has-base-2-background-color has-background" style="padding-top:6px;padding-right:12px;padding-bottom:6px;padding-left:12px">'.__('0','cocopopup').'</h5>
<!-- /wp:heading -->

<!-- wp:heading {"level":5,"style":{"spacing":{"padding":{"top":"6px","bottom":"6px","left":"12px","right":"12px"}}},"backgroundColor":"base-2"} -->
<h5 class="wp-block-heading has-base-2-background-color has-background" style="padding-top:6px;padding-right:12px;padding-bottom:6px;padding-left:12px">'.__('2','cocopopup').'</h5>
<!-- /wp:heading -->

<!-- wp:heading {"level":5,"style":{"spacing":{"padding":{"top":"6px","bottom":"6px","left":"12px","right":"12px"}}},"backgroundColor":"base-2"} -->
<h5 class="wp-block-heading has-base-2-background-color has-background" style="padding-top:6px;padding-right:12px;padding-bottom:6px;padding-left:12px">'.__('4','cocopopup').'</h5>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|20"}}}} -->
<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--20)"><!-- wp:button {"backgroundColor":"contrast","textColor":"base-2","style":{"elements":{"link":{"color":{"text":"var:preset|color|base-2"}}},"border":{"radius":"100px"},"spacing":{"padding":{"left":"var:preset|spacing|20","right":"var:preset|spacing|20"}}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-base-2-color has-contrast-background-color has-text-color has-background has-link-color wp-element-button" style="border-radius:100px;padding-right:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20)">'.__('VIEW DETAILS','cocopopup').'</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->
</div>
<!-- /wp:cp/cocopopup -->
' ;
                
register_block_pattern(
    'cocopopup/popup-8',
    array(
        'title'         => __( 'Popup 8', 'cocopopup' ),
        'description'   => __( 'Popup', 'cocopopup' ),
        'content'       => trim($content),
        'categories'    => array( 'popup' ),
        'keywords'      => array( 'popup', 'event'),
        'viewportWidth' => 800,
    )
);