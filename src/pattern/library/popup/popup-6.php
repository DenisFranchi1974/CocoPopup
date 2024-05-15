<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$get_url =  plugin_dir_url( __FILE__ );

$imagesPopup6= [
    $get_url . "../../images/popup-6.webp",
];

$content = '
<!-- wp:cp/cocopopup {"popupName":"Popup 6","popupId":"popup-6","borderStylePopup":"none","paddingPopup":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"selectedAnimationPopupIn":"fadeInPopup","durationAnimation":0.7,"paddingPopupButton":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"borderStylePopupButton":"none","backgroundColorButton":"#ffffff00","backgroundColorHoverButton":"#ffffff00","topButton":3,"rightButton":3,"sizeButton":20,"sizeButtonTablet":20,"sizeButtonMobile":20} -->
<div class="wp-block-cp-cocopopup cocopopup center bpptop rightbpd bp2ptop rightbp2d" style="border-top-width:1px;border-bottom-width:1px;border-right-width:1px;border-left-width:1px;border-style:none;border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-color:#cccccc;--border-color-hover:#cccccc;transition:background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;background:#ffffff;--background-hover:#ffffff;box-shadow: 0px 0px 0px 0px undefined;--box-shadow-hover: 0px 0px 0px 0px undefined;z-index:999;--duration-animation-popup:0.7s;opacity:1;--opacity-button:1 ;--padding-top:0px;--padding-bottom:0px;--padding-left:0px;--padding-right:0px;--border-top-width:1px;--border-bottom-width:1px;--border-right-width:1px;--border-left-width:1px;--border-style:none;--border-top-left-radius:2px;--border-top-right-radius:2px;--border-bottom-left-radius:2px;--border-bottom-right-radius:2px;--border-color:#cccccc;--border-color-hover-button:#cccccc;--transition-button:background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s, color 0.5s ease;--background-button:#ffffff00;--background-hover-button:#ffffff00;--boxShadow-button: 0px 0px 0px 0px undefined;--box-shadow-hover-button: 0px 0px 0px 0px undefined;--opacity-button2:1 ;--padding-top2:6px;--padding-bottom2:6px;--padding-left2:6px;--padding-right2:6px;--border-top-width2:1px;--border-bottom-width2:1px;--border-right-width2:1px;--border-left-width2:1px;--border-style2:solid;--border-top-left-radius2:2px;--border-top-right-radius2:2px;--border-bottom-left-radius2:2px;--border-bottom-right-radius2:2px;--border-color2:#cccccc;--border-color-hover-button2:#cccccc;--transition-button2:background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease, transform 0.5s, color 0.5s ease;--background-button2:#ffffff;--background-hover-button2:#ffffff;--boxShadow-button2: 0px 0px 0px 0px undefined;--box-shadow-hover-button2: 0px 0px 0px 0px undefined;--left-button:5%;--top-button:3%;--right-button:3%;--bottom-button:5%;--left-button-2:10%;--top-button-2:5%;--right-button-2:10%;--bottom-button-2:10%;--size-button:20px;--font-size-button-tablet:20px;--font-size-button-mobile:20px;--fontWeight-button:600;--textTransform-button:none;--textDecoration-button:none;--lineHeight-button:20.8px;--letterSpacing-button:1px;--color-button:#505050;--color-button-hover:#505050;--size-button2:14px;--font-size-button2-tablet:16px;--font-size-button2-mobile:16px;--fontWeight-button2:600;--textTransform-button2:none;--textDecoration-button2:none;--lineHeight-button2:20.8px;--letterSpacing-button2:1px;--color-button2:#505050;--color-button2-hover:#505050;--z-index-button-2:999px;position:fixed;display: none;overflow-y:auto" id="popup-6" data-logic-7="false" data-logic-8="false" data-logic-9="false" data-logic-10="false" data-delay="1000" data-time-exit="200" data-select-option-page="page-1" data-time="5000" text-button="X" data-popup-name="Popup 6" data-popup-id="popup-6" data-direction-scroll="down" data-time-direction="500" data-close-count="0" data-desktop="true" data-tablet="true" data-mobile="true" data-px-desktop="769" data-px-tablet="768" data-px-mobile="480" data-class="" data-number-visit="10" data-url-extern="" data-time-url="0" data-time-external-link="0" data-time-logged="0" data-disable-closing-popup="false" data-language-extit="false" data-language-select="en" data-schedule="false" data-operation-system="false" data-windows="false" data-mac="false" data-linus="false" data-browser="false" data-browser-select="chrome" data-time-popup-closed="2000" data-woo-cart-empty="false" data-woo-cart-count="false" data-woo-number-product-cart="0" data-woo-cart-id="false" data-woo-cart-amount="false" data-woo-amount-product-cart="0" data-woo-select-amount="lower" data-condition-and-or="or" data-class-element="" data-popup-reopen="false" data-class-element-hover="" data-exit-all="true" data-events-select="exitTime" data-select-closed="close-instant" data-open-sound="false" data-time-opacity-exit="2000" data-time-opacity="2000" data-color-contdown="#0000006E" data-second-contdown="20" data-text-before-contdown="The Popup will close in" data-text-after-contdown="seconds" data-overflow-body="true" data-filter-body="false" data-size-contdown="16" data-vertical-contdown="10" data-horizontal-contdown="10" data-color-text-contdown="#333" data-zindex-button="999" data-animation-popup-in="fadeInPopup" data-percentage-page="50" data-enable-button-2="false" data-text-button-2="X" data-select-contdown="seconds" data-date-contdown="" data-close-contdown-automatic="false" data-enable-flip-contdown="true" data-font-weight-cont="400" data-text-days-round="Days" data-text-hours-round="Hours" data-text-days-minutes="Minutes" data-text-days-seconds="Seconds" data-body-image="false" data-text-day-age="Day" data-text-month-age="Month" data-text-year-age="Year" data-language-month-age="en" data-error-form-age="You need to set your date of birth!" data-error-age-age="Sorry, you are not old enough to log in!" data-enable-welcome-age="false" data-welcome-age="Welcome to our site!" data-link-button-one-age-window="false" data-text-button-one-age="I\'m not 18" data-text-button-two-age="Confirm age" data-enable-button-one="true" data-delay-close-age="3000" data-gap-form-age="20" data-height-form-age="36" data-size-form-age="16" data-border-width-form-age="1" data-border-style-form-age="solid" data-border-radius-form-age="4" data-border-color-form-age="#ccc" data-border-color-hover-form-age="#ccc" data-trasition-border-color-form-age="0.5" data-margin-form-age="20" data-background-color-form-age="#6224cc" data-background-color-hover-form-age="#6224cc" data-transition-background-color-form-age="0.5" data-color-form-age="#FFFFFF" data-color-hover-form-age="#FFFFFF" data-transition-color-form-age="0.5" data-gap-button-age="20" data-padding-button-age-top="8" data-padding-button-age-bottom="8" data-padding-button-age-left="16" data-padding-button-age-right="16" data-border-width-button-age="1" data-border-style-button-age="solid" data-border-radius-button-age="4" data-border-color-button-age="#ccc" data-border-color-hover-button-age="#ccc" data-trasition-border-color-button-age="0.5" data-size-button-age="16" data-background-color-button-age="#6224cc" data-background-color-hover-button-age="#6224cc" data-transition-background-color-button-age="0.5" data-color-button-age="#FFFFFF" data-color-hover-button-age="#FFFFFF" data-transition-color-button-age="0.5" data-background-seconds="#6224cc" data-radius-seconds="100" data-padding-seconds="5" data-padding-right-second="10" data-link-button-no-window="true" data-link-button-yes-window="true" data-blur="false" data-blur-intens="4" data-close-button="false" data-animation-close="500">
<!-- wp:group {"style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"}},"border":{"radius":"8px"}},"backgroundColor":"base-2"} -->
<div class="wp-block-columns are-vertically-aligned-center has-base-2-background-color has-background" style="border-radius:8px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"id":178,"aspectRatio":"2/3","scale":"cover","sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":{"topLeft":"8px","bottomLeft":"8px"}}}} -->
<figure class="wp-block-image size-full has-custom-border"><img src="'. esc_url( $imagesPopup6[0] ) .'" alt="" class="wp-image-178" style="border-top-left-radius:8px;border-bottom-left-radius:8px;aspect-ratio:2/3;object-fit:cover"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"600","fontSize":"34px"}}} -->
<h3 class="wp-block-heading has-text-align-center" style="font-size:34px;font-style:normal;font-weight:600">'.__('Get 20% OFF on your first order','cocopopup').'</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"18px"}}} -->
<p class="has-text-align-center" style="font-size:18px">'.__('+ Free shipping &amp; Returns','cocopopup').'</p>
<!-- /wp:paragraph -->

<!-- wp:separator {"align":"center","className":"is-style-dots"} -->
<hr class="wp-block-separator aligncenter has-alpha-channel-opacity is-style-dots"/>
<!-- /wp:separator -->

<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"align":"left"} -->
<p class="has-text-align-left">'.__('Enter Your Email Address','cocopopup').'</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"contrast","textColor":"base-2","style":{"elements":{"link":{"color":{"text":"var:preset|color|base-2"}}},"typography":{"fontSize":"22px"},"spacing":{"padding":{"left":"8px","right":"8px","top":"0px","bottom":"0px"}}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:22px"><a class="wp-block-button__link has-base-2-color has-contrast-background-color has-text-color has-background has-link-color wp-element-button" style="padding-top:0px;padding-right:8px;padding-bottom:0px;padding-left:8px">'.__('+','cocopopup').'</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"10px","fontStyle":"normal","fontWeight":"200"},"spacing":{"margin":{"top":"20px"}}}} -->
<p style="margin-top:20px;font-size:10px;font-style:normal;font-weight:200">'.__('By entering your email, you agree to our Term &amp; Conditions and Privacy Policy, including emails and promotions. You can unsubscribe at any time.','cocopopup').'</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->
</div>
<!-- /wp:cp/cocopopup -->
' ;
                
register_block_pattern(
    'cocopopup/popup-6',
    array(
        'title'         => __( 'Popup 6', 'cocopopup' ),
        'description'   => __( 'Popup Sale', 'cocopopup' ),
        'content'       => trim($content),
        'categories'    => array( 'popup' ),
        'keywords'      => array( 'popup', 'sale', 'buy'),
        'viewportWidth' => 800,
    )
);