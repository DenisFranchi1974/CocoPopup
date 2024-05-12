import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, MediaUpload, ColorPalette,  RichText } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl, TextControl, TextareaControl, TabPanel, Notice, DateTimePicker, Button, ButtonGroup, __experimentalAlignmentMatrixControl as AlignmentMatrixControl, __experimentalBoxControl as BoxControl, Tooltip, Disabled} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';
import { edit, styles, cog, Icon, trash, upload, lock} from '@wordpress/icons';
import NumberControl from './components/number-control';
import CustomSelect from './components/selectControl';
import AvatarPopup from './components/avatarPopup';
import BorderOptionsPanel from './components/borderPanel';
import BorderOptionsPanelSimple from './components/borderPanelSimple';
import ColorOptionsPanel from './components/colorPanel';
import BackgroundColorOptionsPanelOne from './components/backgroundColorPanelOne'
import BoxShadowControl from './components/boxShadowPanel';
import BoxShadowControlSimple from './components/boxShadowPanelSimple';
import WidthOptionsPanel from './components/widthPanel';
import React from 'react';
import apiFetch from '@wordpress/api-fetch';
import TypographyOptionsPanel from './components/typographyPanel';

export default function Edit({ attributes, setAttributes}) {
    const { 
        delay,  
        selectOptionPage,
        scrollTimeout,
        textButton,
        popupName,
        popupId,
        popupClosureCount,
        exitVisitNumber,
        exitUrl,
        exitExternal,
        exitLogUser,
        timeExit,
        scrollDirection,
        timeScrollDirection,
        exitDesktop,
        exitTablet,
        exitMobile,
        pxDesktop,
        pxTablet,
        pxMobile,
        popupClassName,
        numberVisit,
        popupUrlExt,
        timeUrl,
        timeExternaLink,
        timeLogged,
        disablePopupClosing,
        selectedLanguages,
        exitLanguage,
        exitSchedule,
        date,
        endDate,
        exitOperationSystem,
        exitWindows,
        exitMac,
        exitLinus,
        exitBrowser,
        selectBrowser,
        timeClosedPopup,
        exitWooCartEmpty,
        exitWooCartCount,
        numberProductCart,
        exitWooCartId,
        productId,
        exitWooCartAmount,
        amountProductCart,
        selectedAmountCart,
        conditionAndOr,
        classNameElement,
        reopenPopup,
        classNameElementHover,
        exitAll,
        fileAudio,
        positionPopup,
        selectedEvents,
        selectedClosed,
        openSound,
        timeOpacityExit,
        timeOpacity,
        colorContdown,
        secondContdown,
        textContdownBefore,
        textContdownAfter,
        overflowBody,
        filterBody,
        sizeContdown,
        verticalContdown,
        horizontalContdown,
        colorContdownText,
        paddingPopup,
        borderWidthPopup,
        borderStylePopup,
        borderRadiusPopup,
        borderColorPopup,
        borderColorHoverPopup,
        transitionBorderColorPopup,
        backgroundColor,
        backgroundColorHover,
        backgroundGradient,
        backgroundGradientHover,
        transitionBackgroundColor,
        boxShadow,
        hasHoverControl,
        boxShadowHover,
        transitionShadow,
        zIndexPopup,
        zIndexButton,
        selectedAnimationPopupIn,
        durationAnimation,
        opacityPopup,
        positionPopupButton,
        enableButton2,
        positionPopupButton2,
        textButton2,
        leftButton,
        topButton,
        rightButton,
        bottomButton,
        leftButton2,
        topButton2,
        rightButton2,
        bottomButton2,
        paddingPopupButton,
        borderWidthPopupButton,
        borderStylePopupButton,
        borderRadiusPopupButton,
        borderColorPopupButton,
        borderColorHoverPopupButton,
        transitionBorderColorPopupButton,
        backgroundColorButton,
        backgroundColorHoverButton,
        backgroundGradientButton,
        backgroundGradientHoverButton,
        transitionBackgroundColorButton,
        boxShadowButton,
        hasHoverControlButton,
        boxShadowHoverButton,
        transitionShadowButton,
        opacityPopupButton,
        sizeButton,  
        colorTextButton,
        colorTextButtonHover,
        transitionColorTextButton,
        transitionColorTextButton2,
        paddingPopupButton2,
        borderWidthPopupButton2,
        borderStylePopupButton2,
        borderRadiusPopupButton2,
        borderColorPopupButton2,
        borderColorHoverPopupButton2,
        transitionBorderColorPopupButton2,
        backgroundColorButton2,
        backgroundColorHoverButton2,
        backgroundGradientButton2,
        backgroundGradientHoverButton2,
        transitionBackgroundColorButton2,
        boxShadowButton2,
        hasHoverControlButton2,
        boxShadowHoverButton2,
        transitionShadowButton2,
        opacityPopupButton2,
        sizeButton2,  
        colorTextButton2,
        colorTextButton2Hover,
        enableCustomWidthPopup,
        widthPopup,
        widthPopupTablet,
        widthPopupMobile,
        pxWidthPopup,
        classClosePopup ,
        enableRotateHoverButton,
        rotateHoverButton,
        transitionRotateHoverButton,
        enableRotateHoverButton2,
        rotateHoverButton2,
        transitionRotateHoverButton2,
        percentagePage,
        zIndexButton2,
        selectedContdown,
        dateContdown,
        contdownSecondAutomaticClose,
        contDays,
        contHours,
        contMinutes,
        contSeconds,
        gapContdown,
        borderRadiusCont,
        borderRadiusContBottom,
        borderSepCont,
        weightCont,
        colorContdownTop,
        colorContdownBottom,
        colorContdownCount,
        colorContdownCountBottom,
        colorContdownSeparator,
        boxShadowCont,
        enableFlipCont,
        weightContN,
        sizeContdownCount,
        lineHeightContdownCount,
        colorContdownCircle,
        colorContdownCircleDays,
        colorContdownCircleHours,
        colorContdownCircleMinutes,
        colorContdownCircleSeconds,
        filterBodyImage,
        imageUrl,
        textDayAge,
        textMonthAge,
        textYearAge,
        selectedAgeMonth,
        errorFormAge,
        errorAgeAge,
        enableWelcomeAge,
        welcomeAge,
        linkButtonOneAge,
        linkButtonOneAgeWindow,
        buttonOneAge,
        buttonTwoAge,
        enableButtonOne,
        timecolsePopupAge,
        gapFormAge,
        heightFormAge,
        sizeFormAge,
        borderWidthFormAge,
        borderStyleFormAge,
        borderRadiusFormAge,
        borderColorFormAge,
        borderColorHoverFormAge,
        transitionBorderColorFormAge,
        marginFormAge,
        backgroundColorFormAge,
        backgroundGradientFormAge,
        backgroundColorHoverFormAge,
        backgroundGradientHoverFormAge,
        transitionBackgroundColorFormAge,
        colorFormAge,
        colorHoverFormAge,
        transitionColorFormAge,
        gapButtonAge,
        paddingButtonAgeTop,
        paddingButtonAgeBottom,
        paddingButtonAgeLeft,
        paddingButtonAgeRight,
        borderWidthButtonAge,
        borderStyleButtonAge,
        borderRadiusButtonAge,
        borderColorButtonAge,
        borderColorHoverButtonAge,
        transitionBorderColorButtonAge,
        sizeButtonAge,
        backgroundColorButtonAge,
        backgroundGradientButtonAge,
        backgroundColorHoverButtonAge,
        backgroundGradientHoverButtonAge,
        transitionBackgroundColorButtonAge,
        colorButtonAge,
        colorHoverButtonAge,
        transitionColorButtonAge,
        backgroundColorContdownSeconds,
        borderRadiusContdownSeconds,
        paddingContdownSeconds,
        paddingContdownSecondsRight,
        linkRedirectButtonNo,
        linkRedirectButtonNoWindow,
        linkRedirectButtonYes,
        linkRedirectButtonYesWindow,
        enableBlur,
        blurIntens,
        enabelButtonClass,       
        sizeButtonTablet,
        sizeButtonMobile,
        weightButton,
        trasformButton,
        decorationButton,
        lineHeightButton,
        letterSpacingButton,
        pxButton,
        sizeButton2Tablet,
        sizeButton2Mobile,
        weightButton2,
        trasformButton2,
        decorationButton2,
        lineHeightButton2,
        letterSpacingButton2,
        pxButton2,
        durationAnimationClose
    } = attributes;

    const linkProExtensions = 'https://www.wpcocoblock.com/popup-extensions/'

    // Extension Scroll
    const [pluginActive, setPluginActive] = useState(false);
    // Extension Countdown
    const [pluginActiveCountdown, setPluginActiveCountdown] = useState(false);
    // Extension Age Restriction
    const [pluginActiveAge, setPluginActiveAge] = useState(false);
    // Extension Woocommerce
    const [pluginActiveWoo, setPluginActiveWoo] = useState(false);
    // Extension Button Adder
    const [pluginActiveButton, setPluginActiveButton] = useState(false);
    // Extension Exit Intent
    const [pluginActiveIntent, setPluginActiveIntent] = useState(false);
    // Extension Exit Inactivity
    const [pluginActiveInactivity, setPluginActiveInactivity] = useState(false);
    // Extension Advanced Targeting
    const [pluginActiveTargeting, setPluginActiveTargeting] = useState(false);
    // Extension Advanced Targeting
    const [pluginActiveSchedule, setPluginActiveSchedule] = useState(false);
    // Extension Advanced Closing
    const [pluginActiveClosing, setPluginActiveClosing] = useState(false);
    // Extension Overlay Fileter
    const [pluginActiveOverlay, setPluginActiveOverlay] = useState(false);

    const TEMPLATE = [
        [ 'core/paragraph' ],
    ];
    // Contdown Text
    const onChangeContDays = ( val ) => {
		setAttributes( { contDays: val } );
	}; 
    const onChangeContHours = ( val ) => {
		setAttributes( { contHours: val } );
	}; 
    const onChangeContMinutes = ( val ) => {
		setAttributes( { contMinutes: val } );
	}; 
    const onChangeContSeconds = ( val ) => {
		setAttributes( { contSeconds: val } );
	}; 
    // Image
    const onSelectImage = (media) => {
        setAttributes({ imageUrl: media.url });
    };
    const onRemoveImage = () => {
        setAttributes({ imageUrl: '' });
    };
    // Imposta il colore di sfondo normale nel blocco
    const handleSetBackgroundColor = (color) => {
        setAttributes({
            backgroundColor: color,
            backgroundGradient: null, // Assicurati che il gradiente di sfondo sia null se non viene utilizzato
        });
    };
    // Imposta il gradiente di sfondo nel blocco
    const handleSetBackgroundGradient= (gradient) => {
        setAttributes({
            backgroundColor: null, // Assicurati che il colore di sfondo sia null se non viene utilizzato
            backgroundGradient: gradient,
        });
    };
    // Hover
    const handleSetBackgroundColorHover = (color) => {
        setAttributes({
            backgroundColorHover: color,
            backgroundGradientHover: null, // Assicurati che il gradiente di sfondo sia null se non viene utilizzato
        });
    };
    // Hover
    const handleSetBackgroundGradientHover = (gradient) => {
        setAttributes({
            backgroundColorHover: null, // Assicurati che il colore di sfondo sia null se non viene utilizzato
            backgroundGradientHover: gradient,
        });
    };
    // Definisci lo stile per il box-shadow normale
    const boxShadowStyle = {
        boxShadow: `${boxShadow.type === 'inset' ? 'inset' : ''} ${boxShadow.hOffset}px ${boxShadow.vOffset}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`,
    };
    // Imposta il colore di sfondo normale nel button
    const handleSetBackgroundColorButton = (color) => {
        setAttributes({
            backgroundColorButton: color,
            backgroundGradientButton: null, // Assicurati che il gradiente di sfondo sia null se non viene utilizzato
        });
    };
    // Imposta il gradiente di sfondo nel bottone
    const handleSetBackgroundGradientButton= (gradient) => {
        setAttributes({
            backgroundColorButton: null, // Assicurati che il colore di sfondo sia null se non viene utilizzato
            backgroundGradientButton: gradient,
        });
    };
    // Hover
    const handleSetBackgroundColorHoverButton = (color) => {
        setAttributes({
            backgroundColorHoverButton: color,
            backgroundGradientHoverButton: null, // Assicurati che il gradiente di sfondo sia null se non viene utilizzato
        });
    };
    // Hover
    const handleSetBackgroundGradientHoverButton = (gradient) => {
        setAttributes({
            backgroundColorHoverButton: null, // Assicurati che il colore di sfondo sia null se non viene utilizzato
            backgroundGradientHoverButton: gradient,
        });
    };
    // Definisci lo stile per il box-shadow normale
    const boxShadowStyleButton = {
        boxShadow: `${boxShadowButton.type === 'inset' ? 'inset' : ''} ${boxShadowButton.hOffset}px ${boxShadowButton.vOffset}px ${boxShadowButton.blur}px ${boxShadowButton.spread}px ${boxShadowButton.color}`,
    };

    // Imposta il colore di sfondo normale nel button
    const handleSetBackgroundColorButton2 = (color) => {
        setAttributes({
            backgroundColorButton2: color,
            backgroundGradientButton2: null, // Assicurati che il gradiente di sfondo sia null se non viene utilizzato
        });
    };
    // Imposta il gradiente di sfondo nel bottone
    const handleSetBackgroundGradientButton2= (gradient) => {
        setAttributes({
            backgroundColorButton2: null, // Assicurati che il colore di sfondo sia null se non viene utilizzato
            backgroundGradientButton2: gradient,
        });
    };
    // Hover
    const handleSetBackgroundColorHoverButton2 = (color) => {
        setAttributes({
            backgroundColorHoverButton2: color,
            backgroundGradientHoverButton2: null, // Assicurati che il gradiente di sfondo sia null se non viene utilizzato
        });
    };
    // Hover
    const handleSetBackgroundGradientHoverButton2 = (gradient) => {
        setAttributes({
            backgroundColorHoverButton2: null, // Assicurati che il colore di sfondo sia null se non viene utilizzato
            backgroundGradientHoverButton2: gradient,
        });
    };
    // Definisci lo stile per il box-shadow normale
    const boxShadowStyleButton2 = {
        boxShadow: `${boxShadowButton2.type === 'inset' ? 'inset' : ''} ${boxShadowButton2.hOffset}px ${boxShadowButton2.vOffset}px ${boxShadowButton2.blur}px ${boxShadowButton2.spread}px ${boxShadowButton2.color}`,
    };

    // Definisci lo stile per il box-shadow Contdown
    const boxShadowContStyle = {
        boxShadow: `${boxShadowCont.type === 'inset' ? 'inset' : ''} ${boxShadowCont.hOffset}px ${boxShadowCont.vOffset}px ${boxShadowCont.blur}px ${boxShadowCont.spread}px ${boxShadowCont.color}`,
    };
    // Style
    const stylesPopup = {
        borderTopWidth:borderWidthPopup.top,
        borderBottomWidth:borderWidthPopup.bottom,
        borderRightWidth:borderWidthPopup.right,
        borderLeftWidth:borderWidthPopup.left,
        borderStyle:borderStylePopup,
        borderTopLeftRadius: borderRadiusPopup.left,
        borderTopRightRadius: borderRadiusPopup.top,
        borderBottomLeftRadius: borderRadiusPopup.right,
        borderBottomRightRadius: borderRadiusPopup.bottom,
        borderColor:borderColorPopup,
        '--border-color-hover':borderColorHoverPopup,
        transition: 'background-color ' + transitionBackgroundColor+ 's ease, border-color ' +  transitionBorderColorPopup +'s ease, box-shadow '+ transitionShadow + 's ease',
        paddingTop:paddingPopup.top,
        paddingBottom:paddingPopup.bottom,
        paddingLeft:paddingPopup.left,
        paddingRight:paddingPopup.right,
        background: backgroundGradient || backgroundColor,
        '--background-hover': backgroundGradientHover || backgroundColorHover,
        boxShadow: boxShadowStyle.boxShadow,
        ...(hasHoverControl === false && {
            '--box-shadow-hover': boxShadowStyle.boxShadow,
        }),
        ...(hasHoverControl === true && {
            '--box-shadow-hover': `${boxShadowHover.type === 'inset' ? 'inset' : ''} ${boxShadowHover.hOffset}px ${boxShadowHover.vOffset}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color}`,
        }),
        zIndex:zIndexPopup,
        '--duration-animation-popup': durationAnimation + 's',
        opacity:opacityPopup,
        '--opacity-button':opacityPopupButton+' ',
        '--padding-top':paddingPopupButton.top,
        '--padding-bottom':paddingPopupButton.bottom,
        '--padding-left':paddingPopupButton.left,
        '--padding-right':paddingPopupButton.right,
        '--border-top-width':borderWidthPopupButton.top,
        '--border-bottom-width':borderWidthPopupButton.bottom,
        '--border-right-width':borderWidthPopupButton.right,
        '--border-left-width':borderWidthPopupButton.left,
        '--border-style':borderStylePopupButton,
        '--border-top-left-radius': borderRadiusPopupButton.left,
        '--border-top-right-radius': borderRadiusPopupButton.top,
        '--border-bottom-left-radius': borderRadiusPopupButton.right,
        '--border-bottom-right-radius': borderRadiusPopupButton.bottom,
        '--border-color':borderColorPopupButton,
        '--border-color-hover-button':borderColorHoverPopupButton,
        '--transition-button': 'background-color ' + transitionBackgroundColorButton+ 's ease, border-color ' +  transitionBorderColorPopupButton +'s ease, box-shadow '+ transitionShadowButton + 's ease, transform ' + transitionRotateHoverButton +'s, color ' +transitionColorTextButton +'s ease',
        ...(enableRotateHoverButton === true && {
        '--trasform-rotation-button':rotateHoverButton+'deg',
        }),
        '--background-button': backgroundGradientButton || backgroundColorButton,
        '--background-hover-button': backgroundGradientHoverButton || backgroundColorHoverButton,
        '--boxShadow-button': boxShadowStyleButton.boxShadow,
        ...(hasHoverControlButton === false && {
            '--box-shadow-hover-button': boxShadowStyleButton.boxShadow,
        }),
        ...(hasHoverControlButton === true && {
            '--box-shadow-hover-button': `${boxShadowHoverButton.type === 'inset' ? 'inset' : ''} ${boxShadowHoverButton.hOffset}px ${boxShadowHoverButton.vOffset}px ${boxShadowHoverButton.blur}px ${boxShadowHoverButton.spread}px ${boxShadowHoverButton.color}`,
        }),
        '--opacity-button2':opacityPopupButton2+' ',
        '--padding-top2':paddingPopupButton2.top,
        '--padding-bottom2':paddingPopupButton2.bottom,
        '--padding-left2':paddingPopupButton2.left,
        '--padding-right2':paddingPopupButton2.right,
        '--border-top-width2':borderWidthPopupButton2.top,
        '--border-bottom-width2':borderWidthPopupButton2.bottom,
        '--border-right-width2':borderWidthPopupButton2.right,
        '--border-left-width2':borderWidthPopupButton2.left,
        '--border-style2':borderStylePopupButton2,
        '--border-top-left-radius2': borderRadiusPopupButton2.left,
        '--border-top-right-radius2': borderRadiusPopupButton2.top,
        '--border-bottom-left-radius2': borderRadiusPopupButton2.right,
        '--border-bottom-right-radius2': borderRadiusPopupButton2.bottom,
        '--border-color2':borderColorPopupButton2,
        '--border-color-hover-button2':borderColorHoverPopupButton2,
        '--transition-button2': 'background-color ' + transitionBackgroundColorButton2+ 's ease, border-color ' +  transitionBorderColorPopupButton2 +'s ease, box-shadow '+ transitionShadowButton2 + 's ease, transform ' + transitionRotateHoverButton2 +'s, color ' +transitionColorTextButton2 +'s ease',
        ...(enableRotateHoverButton2 === true && {
        '--trasform-rotation-button2':rotateHoverButton2+'deg',
        }),
        '--background-button2': backgroundGradientButton2 || backgroundColorButton2,
        '--background-hover-button2': backgroundGradientHoverButton2 || backgroundColorHoverButton2,
        '--boxShadow-button2': boxShadowStyleButton2.boxShadow,
        ...(hasHoverControlButton2 === false && {
            '--box-shadow-hover-button2': boxShadowStyleButton2.boxShadow,
        }),
        ...(hasHoverControlButton2 === true && {
            '--box-shadow-hover-button2': `${boxShadowHoverButton2.type === 'inset' ? 'inset' : ''} ${boxShadowHoverButton2.hOffset}px ${boxShadowHoverButton2.vOffset}px ${boxShadowHoverButton2.blur}px ${boxShadowHoverButton2.spread}px ${boxShadowHoverButton2.color}`,
        }),
        '--left-button':leftButton+'%',
        '--top-button':topButton+'%',
        '--right-button':rightButton+'%',
        '--bottom-button':bottomButton+'%',
        '--left-button-2':leftButton2+'%',
        '--top-button-2':topButton2+'%',
        '--right-button-2':rightButton2+'%',
        '--bottom-button-2':bottomButton2+'%',
        '--size-button':sizeButton+pxButton,
        '--font-size-button-tablet':sizeButtonTablet+pxButton,
        '--font-size-button-mobile':sizeButtonMobile+pxButton,
        '--fontWeight-button':weightButton,
        '--textTransform-button':trasformButton,
        '--textDecoration-button':decorationButton,
        '--lineHeight-button':lineHeightButton+'px',
        '--letterSpacing-button':letterSpacingButton+'px',
        '--color-button':colorTextButton,
        '--color-button-hover':colorTextButtonHover,
        '--size-button2':sizeButton2+pxButton2,
        '--font-size-button2-tablet':sizeButton2Tablet+pxButton2,
        '--font-size-button2-mobile':sizeButton2Mobile+pxButton2,
        '--fontWeight-button2':weightButton2,
        '--textTransform-button2':trasformButton2,
        '--textDecoration-button2':decorationButton2,
        '--lineHeight-button2':lineHeightButton2+'px',
        '--letterSpacing-button2':letterSpacingButton2+'px',
        '--color-button2':colorTextButton2,
        '--color-button2-hover':colorTextButton2Hover,
        '--z-index-button-2':zIndexButton2,
        ...(enableCustomWidthPopup && { width: widthPopup + pxWidthPopup,'--width-popup-tablet':widthPopupTablet + pxWidthPopup,'--width-popup-mobile':widthPopupMobile + pxWidthPopup,maxWidth:'none!important' }),
    }
    // Style Cont
    const stylesCont = {
        borderTopLeftRadius: borderRadiusCont.left,
        borderTopRightRadius: borderRadiusCont.top,
        borderBottomLeftRadius: borderRadiusCont.right,
        borderBottomRightRadius: borderRadiusCont.bottom,
        borderBottom: borderSepCont + 'px solid ' + colorContdownSeparator,
        backgroundColor:colorContdownTop,
        color:colorContdownCount
    }
    const stylesContBottom = {
        borderTopLeftRadius: borderRadiusContBottom.left,
        borderTopRightRadius: borderRadiusContBottom.top,
        borderBottomLeftRadius: borderRadiusContBottom.right,
        borderBottomRightRadius: borderRadiusContBottom.bottom,
        borderTop: borderSepCont + 'px solid ' + colorContdownSeparator,
        backgroundColor:colorContdownBottom,
        color:colorContdownCountBottom
    }
    const stylesSpanCont = {
        fontWeight:weightCont,
        color:colorContdownText
    }
    const stylesTimeCont = {
        boxShadow: boxShadowContStyle.boxShadow,
        borderTopLeftRadius: borderRadiusCont.left,
        borderTopRightRadius: borderRadiusCont.top,
        borderBottomLeftRadius: borderRadiusContBottom.right,
        borderBottomRightRadius: borderRadiusContBottom.bottom,
    }
    const stylesPopupEditor = {
        '--duration-animation-popup-editor': durationAnimation + 's'
    }
    // Round
    const stylesContdownRound = {
        gap:gapContdown+'px',
        '--color-circle':colorContdownCircle,
    }
    const stylesSpanContRound = {
        fontWeight:weightCont,
        color:colorContdownText,
        fontSize:sizeContdown + 'px'
    }
    const stylesContNRound = {
        fontWeight:weightContN,
        fontSize:sizeContdownCount + 'px',
        lineHeight:lineHeightContdownCount + 'px',
        color:colorContdownCount
    }
    // Popup Age
    const stylesPopupAge = {
        '--gap-form-age':gapFormAge+'px',
        '--height-form-age':heightFormAge+'px',
        '--size-form-age':sizeFormAge+'px',
        '--border-width-form-age':borderWidthFormAge+'px',
        '--border-style-form-age':borderStyleFormAge,
        '--border-color-form-age':borderColorFormAge,
        '--border-color-hover-form-age':borderColorHoverFormAge,
        '--border-radius-form-age':borderRadiusFormAge+'px',
        '--transition-form-age': 'background-color ' + transitionBackgroundColorFormAge+ 's ease, color ' + transitionColorFormAge + 's ease, border-color ' +  transitionBorderColorFormAge +'s ease',
        '--margin-bottom-form-age':marginFormAge+'px',
        '--background-color-form-age':backgroundGradientFormAge || backgroundColorFormAge,
        '--background-color-hover-form-age': backgroundGradientHoverFormAge || backgroundColorHoverFormAge ,
        '--color-form-age':colorFormAge,
        '--color-hover-form-age':colorHoverFormAge,
        '--gap-button-age':gapButtonAge+'px',
        '--padding-top-button-age':paddingButtonAgeTop+'px',
        '--padding-bottom-button-age':paddingButtonAgeBottom+'px',
        '--padding-left-button-age':paddingButtonAgeLeft+'px',
        '--padding-right-button-age':paddingButtonAgeRight+'px',
        '--border-width-button-age':borderWidthButtonAge+'px',
        '--border-style-button-age':borderStyleButtonAge,
        '--border-color-button-age':borderColorButtonAge,
        '--border-color-hover-button-age':borderColorHoverButtonAge,
        '--border-radius-button-age':borderRadiusButtonAge+'px',
        '--transition-button-age': 'background-color ' + transitionBackgroundColorButtonAge+ 's ease, color ' + transitionColorButtonAge + 's ease, border-color ' +  transitionBorderColorButtonAge +'s ease',
        '--size-button-age':sizeButtonAge+'px',
        '--background-color-button-age':backgroundGradientButtonAge || backgroundColorButtonAge,
        '--background-color-hover-button-age':backgroundGradientHoverButtonAge || backgroundColorHoverButtonAge,
        '--color-button-age':colorButtonAge,
        '--color-hover-button-age':colorHoverButtonAge,
    }
    // Z Index Popup
    const onChangeZIndexPopup = ( val ) => {
		setAttributes( { zIndexPopup: Number( val ) } );
	};
    // Z Index Button
     const onChangeZIndexButton = ( val ) => {
		setAttributes( { zIndexButton: Number( val ) } );
	};
    // Z Index Button
    const onChangeZIndexButton2 = ( val ) => {
		setAttributes( { zIndexButton2: Number( val ) } );
	};
    // Visit Number in the Page
    const onChangeNumberVisit = ( val ) => {
		setAttributes( { numberVisit: Number( val ) } );
	};
    // Number Product in Cart
    const onChangeNumberProductCart = ( val ) => {
		setAttributes( { numberProductCart: Number( val ) } );
	};
    // General Tab
    const onSelect = (tabName) => {
		'Selecting tab', tabName;
	};
    // File Audio Upload
    const onSelectAudio = (media) => {
        setAttributes({ fileAudio: media.url });
    };
    const handlePlay = () => {
        if (fileAudio) {
            const audio = new Audio(fileAudio);
            audio.play();
        }
    };
    const handleRemoveFile = () => {
        setAttributes({ fileAudio: null });
    };
    // Open  color Contdown
    const [colorOpen, setColorOpen] = useState(false);
    const toggleColor = () => {
        setColorOpen(!colorOpen);
    };
     // Open  color Hover Button
     const [colorOpenHover, setColorOpenHover] = useState(false);
     const toggleColorHover = () => {
         setColorOpenHover(!colorOpenHover);
     };
    // Open  color Contdown B
    const [colorOpenB, setColorOpenB] = useState(false);
    const toggleColorB = () => {
        setColorOpenB(!colorOpenB);
    };
    // Open  color Contdown C
    const [colorOpenC, setColorOpenC] = useState(false);
    const toggleColorC = () => {
         setColorOpenC(!colorOpenC);
    };
    // Open  color Contdown D
    const [colorOpenD, setColorOpenD] = useState(false);
    const toggleColorD = () => {
         setColorOpenD(!colorOpenD);
    };
    // Open  color Contdown E
    const [colorOpenE, setColorOpenE] = useState(false);
    const toggleColorE = () => {
         setColorOpenE(!colorOpenE);
    };
    // Open  color Contdown F
    const [colorOpenF, setColorOpenF] = useState(false);
    const toggleColorF = () => {
        setColorOpenF(!colorOpenF);
    };
    // Popup Age
    const [isLoadingAgeMonth, setIsLoadingAgeMonth] = useState(false);
    const handleChangeAgeMonth = (selectedOption) => {
        setIsLoadingAgeMonth(true); // Imposta isLoading a true quando inizia il caricamento
      // Simula un caricamento fittizio con un ritardo di 1 secondo
      setTimeout(() => {
        setAttributes({ selectedAgeMonth: selectedOption.value });
        setIsLoadingAgeMonth(false); // Imposta isLoading a false quando il caricamento è completato
      }, 1000);
    };
    const optionsAgeMonth= [
        { value: 'en' , label: __('English', 'cocopopup')},
        { value: 'it' , label: __('Italian', 'cocopopup')},
        { value: 'fr' , label: __('French', 'cocopopup')},
        { value: 'de' , label: __('German', 'cocopopup')},
        { value: 'zh' , label: __('Chinese', 'cocopopup')},
        { value: 'es' , label: __('Spanish', 'cocopopup')},
    ];
    // Popup Animation In
    const [isLoadingAnimationPopupIn, setIsLoadingPopupAnimationIn] = useState(false);
    const handleChangeAnimationPopupIn = (selectedOption) => {
        setIsLoadingPopupAnimationIn(true); // Imposta isLoading a true quando inizia il caricamento
      // Simula un caricamento fittizio con un ritardo di 1 secondo
      setTimeout(() => {
        setAttributes({ selectedAnimationPopupIn: selectedOption.value });
        setIsLoadingPopupAnimationIn(false); // Imposta isLoading a false quando il caricamento è completato
      }, 1000);
    };
    const optionsAnimationPopupIn= [
        { value: 'none' , label: __('None', 'cocopopup')},
        { value: 'shake' , label: __('Shake', 'cocopopup')},
        { value: 'fadeInPopup' , label: __('Fade In', 'cocopopup')},        
        { value: 'slideLeft' , label: __('Slide Left', 'cocopopup')},   
        { value: 'slideRight' , label: __('Slide Right', 'cocopopup')},    
        { value: 'slideTop' , label: __('Slide Top', 'cocopopup')}, 
        { value: 'slideBottom' , label: __('Slide Bottom', 'cocopopup')}, 
        { value: 'flipInPopup' , label: __('Flip', 'cocopopup')}, 
        { value: 'wobblePopup' , label: __('Wobble', 'cocopopup')}, 
        { value: 'swingPopup' , label: __('Swing', 'cocopopup')}, 
        { value: 'flashPopup' , label: __('Flash', 'cocopopup')}, 
        { value: 'bouncePopup' , label: __('Bounce In', 'cocopopup')}, 
        { value: 'bounceInRightPopup' , label: __('Bounce In Right', 'cocopopup')}, 
        { value: 'bounceInLeftPopup' , label: __('Bounce In Left', 'cocopopup')}, 
        { value: 'tadaPopup' , label: __('Tada', 'cocopopup')}, 
        { value: 'jelloPopup' , label: __('Jello', 'cocopopup')}, 
        { value: 'rotatePopup' , label: __('Rotate', 'cocopopup')}, 
        { value: 'pulsePopup' , label: __('Pulse', 'cocopopup')}, 
    ];
    const replayAnimation = () => {
        const element = document.getElementById('pop-editor'); // Sostituisci 'id-del-tuo-elemento' con l'ID del tuo elemento HTML
        element.classList.remove(selectedAnimationPopupIn); // Rimuovi la classe che attiva l'animazione
        void element.offsetWidth; // Forza il reflow, necessario per riavviare l'animazione
        element.classList.add(selectedAnimationPopupIn); // Reimposta la classe per riavviare l'animazione
    };
    // Font Weight Cont
    const [isLoadingWeightCont, setIsLoadingWeightCont] = useState(false);
    const handleChangeWeightCont = (selectedOption) => {
        setIsLoadingWeightCont(true); // Imposta isLoading a true quando inizia il caricamento
      // Simula un caricamento fittizio con un ritardo di 1 secondo
      setTimeout(() => {
        setAttributes({ weightCont: selectedOption.value });
        setIsLoadingWeightCont(false); // Imposta isLoading a false quando il caricamento è completato
      }, 1000);
    };
    const optionsWeightCont= [
        { value: '100' , label: __('100', 'cocopopup')},
        { value: '200', label: __('200', 'cocopopup') },
        { value: '300',label: __('300', 'cocopopup') }, 
        { value: '400',label: __('400', 'cocopopup') }, 
        { value: '500',label: __('500', 'cocopopup') }, 
        { value: '600',label: __('600', 'cocopopup') }, 
        { value: '700',label: __('700', 'cocopopup') }, 
        { value: '800',label: __('800', 'cocopopup') }, 
        { value: '900',label: __('900', 'cocopopup') }, 
    ];
    // Font Weight Cont Number
    const [isLoadingWeightContN, setIsLoadingWeightContN] = useState(false);
    const handleChangeWeightContN = (selectedOption) => {
         setIsLoadingWeightContN(true); // Imposta isLoading a true quando inizia il caricamento
       // Simula un caricamento fittizio con un ritardo di 1 secondo
       setTimeout(() => {
         setAttributes({ weightContN: selectedOption.value });
         setIsLoadingWeightContN(false); // Imposta isLoading a false quando il caricamento è completato
       }, 1000);
     };
    // Page Scroll
    const [isLoadingPage, setIsLoadingPage] = useState(false);
    const handleChangePage = (selectedOption) => {
      setIsLoadingPage(true); // Imposta isLoading a true quando inizia il caricamento
      // Simula un caricamento fittizio con un ritardo di 1 secondo
      setTimeout(() => {
        setAttributes({ selectOptionPage: selectedOption.value });
        setIsLoadingPage(false); // Imposta isLoading a false quando il caricamento è completato
      }, 1000);
    };
    const optionsPage= [
        { value: 'page-2' , label: __('Half', 'cocopopup')},
        { value: 'page-1', label: __('3/4', 'cocopopup') },
        { value: 'page-3',label: __('End', 'cocopopup') }, 
        { value: 'page-percent',label: __('Page Percentage', 'cocopopup') }, 
    ];
    // Contdown
    const [isLoadingContdown, setIsLoadingContdown] = useState(false);
    const handleChangeContdown = (selectedOption) => {
    setIsLoadingContdown(true); // Imposta isLoading a true quando inizia il caricamento
    // Simula un caricamento fittizio con un ritardo di 1 secondo
    setTimeout(() => {
        setAttributes({ selectedContdown: selectedOption.value });
        setIsLoadingContdown(false); // Imposta isLoading a false quando il caricamento è completato
    }, 1000);
    };
    const optionsContdown= [
        { value: 'seconds' , label: __('Seconds', 'cocopopup')},
        { value: 'date', label: __('Date', 'cocopopup') },
        { value: 'date-round', label: __('Date Round', 'cocopopup') },
    ];
    // Scroll Direction
    const [isLoadingDirection, setIsLoadingDirection] = useState(false);
    const handleChangeDirection = (selectedOption) => {
    setIsLoadingDirection(true); // Imposta isLoading a true quando inizia il caricamento
    // Simula un caricamento fittizio con un ritardo di 1 secondo
    setTimeout(() => {
        setAttributes({ scrollDirection: selectedOption.value });
        setIsLoadingDirection(false); // Imposta isLoading a false quando il caricamento è completato
    }, 1000);
    };
    const optionsDirection= [
        { value: 'up' , label: __('Up', 'cocopopup')},
        { value: 'down', label: __('Down', 'cocopopup') },
    ];
    // Browser
    const [isLoadingBrowser, setIsLoadingBrowser] = useState(false);
    const handleChangeBrowser = (selectedOption) => {
    setIsLoadingBrowser(true); // Imposta isLoading a true quando inizia il caricamento
    // Simula un caricamento fittizio con un ritardo di 1 secondo
    setTimeout(() => {
        setAttributes({ selectBrowser: selectedOption.value });
        setIsLoadingBrowser(false); // Imposta isLoading a false quando il caricamento è completato
    }, 1000);
    };
    const optionsBrowser= [
        { value: 'chrome' , label: __('Google Chrome', 'cocopopup')},
        { value: 'firefox', label: __('Mozilla Firefox', 'cocopopup') },
        { value: 'safari', label: __('Safari', 'cocopopup') },
        { value: 'edge', label: __('Microsoft Edge', 'cocopopup') },
        { value: 'opera', label: __('Opera', 'cocopopup') },
        { value: 'msie', label: __('Internet Explorer', 'cocopopup') },
    ];
    // Events
    const [isLoadingEvents, setIsLoadingEvents] = useState(false);
    const handleChangeEvents = (selectedOption) => {
      setIsLoadingEvents(true); // Imposta isLoading a true quando inizia il caricamento
      // Simula un caricamento fittizio con un ritardo di 1 secondo
      setTimeout(() => {
        setAttributes({ selectedEvents: selectedOption.value });
        setIsLoadingEvents(false); // Imposta isLoading a false quando il caricamento è completato
      }, 1000);
    };
    const optionsEvents= [
        { value: 'exitTime' , label: __('On Load', 'cocopopup')},
        { value: 'logicExitElementClass', label: __('On Click by CSS Class', 'cocopopup') },
        { value: 'logicExitElementClassHover',label: __('On Hover by CSS Class', 'cocopopup') },
        { value: 'exitClass',label: __('On specific CSS Class', 'cocopopup') },  
    ];

    // Extensions

    // Aggiungi l'opzione solo se pluginActive Scroll è true
    if (pluginActive) {
        optionsEvents.push({ value: 'exitScrollPosition', label: __('On scroll specific position', 'cocopopup') });
        optionsEvents.push({ value: 'exitScrollDirection',label: __('On scroll direction', 'cocopopup') });

    } else {
       // Aggiungi un'opzione con il componente Disabled quando l'estensione non è attiva
       optionsEvents.push({ value: 'exitScrollPosition', label: __('On scroll specific position', 'cocopopup'), isDisabled: true });
       optionsEvents.push({ value: 'exitScrollDirection',label: __('On scroll direction', 'cocopopup'), isDisabled: true });
    }

    // Aggiungi l'opzione solo se pluginActive Exit Intent è true
    if (pluginActiveIntent) {
        optionsEvents.push({ value: 'exitPage',label: __('Exit Intent', 'cocopopup') });
    } else {
       // Aggiungi un'opzione con il componente Disabled quando l'estensione non è attiva
       optionsEvents.push({ value: 'exitPage',label: __('Exit Intent', 'cocopopup'), isDisabled: true });
    }
    // Aggiungi l'opzione solo se pluginActive Exit Iactivity è true
    if (pluginActiveInactivity) {
        optionsEvents.push( { value: 'exitScrollNo',label: __('Inactivity', 'cocopopup') });
    } else {
       // Aggiungi un'opzione con il componente Disabled quando l'estensione non è attiva
       optionsEvents.push( { value: 'exitScrollNo',label: __('Inactivity', 'cocopopup'), isDisabled: true });
    }
    
    // Language
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (selectedOption) => {
      setIsLoading(true); // Imposta isLoading a true quando inizia il caricamento
      // Simula un caricamento fittizio con un ritardo di 1 secondo
      setTimeout(() => {
        setAttributes({ selectedLanguages: selectedOption.value });
        setIsLoading(false); // Imposta isLoading a false quando il caricamento è completato
      }, 1000);
    };
    const options= [
        { value: 'ar' , label: __('Arabo', 'cocopopup')},
        { value: 'bn', label: __('Bengalese', 'cocopopup') },
        { value: 'zh',label: __('Cinese Mandarino', 'cocopopup') },
        { value: 'fr',label: __('Francese', 'cocopopup')  },
        { value: 'ja', label: __('Giapponese', 'cocopopup') },
        { value: 'hi', label: __('Hindi', 'cocopopup') },
        { value: 'id', label: __('Indonesiano', 'cocopopup') },
        { value: 'en', label: __('Inglese', 'cocopopup')  },
        { value: 'it',label: __('Ialiano', 'cocopopup')  },
        { value: 'nl', label: __('Olandese', 'cocopopup') },
        { value: 'pt', label: __('Portoghese', 'cocopopup') },
        { value: 'ru', label: __('Russo', 'cocopopup') },
        { value: 'es', label: __('Spagnolo', 'cocopopup') },
        { value: 'de', label: __('Tedesco', 'cocopopup') },
        { value: 'ur', label: __('Urdu', 'cocopopup') },
    ];
    // Cart
    const [isLoadingCart, setIsLoadingCart] = useState(false);
    const handleChangeCart = (selectedOption) => {
    setIsLoadingCart(true); // Imposta isLoading a true quando inizia il caricamento
    // Simula un caricamento fittizio con un ritardo di 1 secondo
    setTimeout(() => {
        setAttributes({ selectedAmountCart: selectedOption.value });
        setIsLoadingCart(false); // Imposta isLoading a false quando il caricamento è completato
    }, 1000);
    };
    const optionsCart= [
        { value: 'lower' , label: __('Lower', 'cocopopup')},
        { value: 'higher', label: __('Higher', 'cocopopup') },
    ];
    // Closed
    const [isLoadingClosed, setIsLoadingClosed] = useState(false);
    const handleChangeClosed = (selectedOption) => {
        setIsLoadingClosed(true); // Imposta isLoading a true quando inizia il caricamento
        // Simula un caricamento fittizio con un ritardo di 1 secondo
        setTimeout(() => {
            setAttributes({ selectedClosed: selectedOption.value });
            setIsLoadingClosed(false); // Imposta isLoading a false quando il caricamento è completato
        }, 1000);
    };
    const optionsClosed= [
        { value: 'close-instant' , label: __('Instant', 'cocopopup')},
    ];

    // Extensions
    // Aggiungi l'opzione solo se pluginActive  Countdown è true
    if (pluginActiveCountdown) {
        optionsClosed.push({ value: 'close-contdown', label: __('Contdown', 'cocopopup') });
    } else {
       // Aggiungi un'opzione con il componente Disabled quando l'estensione non è attiva
       optionsClosed.push({ value: 'close-contdown', label: __('Contdown', 'cocopopup'), isDisabled: true });
    }
    // Aggiungi l'opzione solo se pluginActive  Age è true
    if (pluginActiveAge) {
        optionsClosed.push({ value: 'close-age', label: __('Age Restriction', 'cocopopup') });
    } else {
       // Aggiungi un'opzione con il componente Disabled quando l'estensione non è attiva
       optionsClosed.push({ value: 'close-age', label: __('Age Restriction', 'cocopopup'), isDisabled: true });
    }
    // Aggiungi l'opzione solo se pluginActive  Adavanced Closing è true
    if (pluginActiveClosing) {
        optionsClosed.push( { value: 'close-opacity', label: __('Opacity', 'cocopopup') });
        optionsClosed.push(  { value: 'close-window',label: __('Click on the window', 'cocopopup')  });
        optionsClosed.push(  { value: 'close-scroll', label: __('Scroll', 'cocopopup')  });
        optionsClosed.push(  { value: 'close-time', label: __('Time', 'cocopopup')  });
        optionsClosed.push(  {  value: 'close-no', label: __('Blocked', 'cocopopup')  });
        optionsClosed.push(  {  value: 'close-class', label: __('On Class', 'cocopopup')  });
        optionsClosed.push(  {  value: 'close-url', label: __('Redirect', 'cocopopup') });
    } else {
       // Aggiungi un'opzione con il componente Disabled quando l'estensione non è attiva
       optionsClosed.push( { value: 'close-opacity', label: __('Opacity', 'cocopopup'), isDisabled: true });
       optionsClosed.push( { value: 'close-window',label: __('Click on the window', 'cocopopup') , isDisabled: true });
       optionsClosed.push( { value: 'close-scroll', label: __('Scroll', 'cocopopup') , isDisabled: true });
       optionsClosed.push( { value: 'close-time', label: __('Time', 'cocopopup') , isDisabled: true });
       optionsClosed.push( {  value: 'close-no', label: __('Blocked', 'cocopopup') , isDisabled: true });
       optionsClosed.push( { value: 'close-class', label: __('On Class', 'cocopopup') , isDisabled: true });
       optionsClosed.push( { value: 'close-url', label: __('Redirect', 'cocopopup') , isDisabled: true });
    }
    // Contdown Round
    let days, hours, minutes, seconds, ddStrokeOffset, hhStrokeOffset, mmStrokeOffset, ssStrokeOffset;
   
        // Contdown Round
        const [timeRemaining, setTimeRemaining] = useState(0);
        const [countdownFinished, setCountdownFinished] = useState(false);
        
        useEffect(() => {
            const userDate = new Date(dateContdown).getTime();
            setCountdownFinished(false); // Reimposta countdownFinished a false quando dateContdown cambia
        
            const intervalId = setInterval(() => {
                const now = new Date().getTime();
                const distance = userDate - now;
        
                if (distance <= 0) {
                    clearInterval(intervalId);
                    setCountdownFinished(true);
                } else {
                    setTimeRemaining(distance);
                }
            }, 1000);
        
            return () => clearInterval(intervalId);
        }, [dateContdown]); // Aggiorniamo il countdown ogni volta che dateContdown cambia

        if (countdownFinished) {
            // Se il countdown è finito, impostiamo tutti i valori a zero
            days = hours = minutes = seconds = 0;
            ddStrokeOffset = hhStrokeOffset = mmStrokeOffset = ssStrokeOffset = 0;
        } else {
            // Altrimenti calcoliamo i valori normalmente
            days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            ddStrokeOffset = 440 - (440 * days) / 365;
            hhStrokeOffset = 440 - (440 * hours) / 24;
            mmStrokeOffset = 440 - (440 * minutes) / 60;
            ssStrokeOffset = 440 - (440 * seconds) / 60;
        }
   
        /* Contdown Classic */
        let countdown;
        const [countdownState, setCountdownState] = useState({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        });
    
        countdown = countdownState;
    
        const newYearTime = new Date(dateContdown);
        const [flipTrigger, setFlipTrigger] = useState(false);
    
        useEffect(() => {
            const updateCountdown = () => {
                const currentTime = new Date();
                const totalSeconds = (newYearTime - currentTime) / 1000;
                if (totalSeconds <= 0) {
                    // Il tempo è terminato, fermiamo gli intervalli
                    clearInterval(countdownInterval);
                    clearInterval(flipInterval);
    
                    // Portiamo tutti i valori a zero
                    setCountdownState({
                        days: '00',
                        hours: '00',
                        minutes: '00',
                        seconds: '00'
                    });
    
                    return;
                }
    
                const days = Math.floor(totalSeconds / 3600 / 24);
                const hours = Math.floor(totalSeconds / 3600) % 24;
                const minutes = Math.floor(totalSeconds / 60) % 60;
                const seconds = Math.floor(totalSeconds) % 60;
    
                setCountdownState({
                    days: formatTime(days),
                    hours: formatTime(hours),
                    minutes: formatTime(minutes),
                    seconds: formatTime(seconds)
                });
            };
    
            const formatTime = (time) => {
                return time < 10 ? `0${time}` : time;
            };
            // Intervallo per aggiornare il countdown
            const countdownInterval = setInterval(() => {
                updateCountdown();
            }, 1000);
            // Intervallo per l'effetto flip, leggermente più lento
            const flipInterval = setInterval(() => {
                // Inverti il valore di flipTrigger ad ogni intervallo
                setFlipTrigger(prevState => !prevState);
            }, 500); // Intervallo leggermente più lento (ogni 1200 millisecondi)
            return () => {
                clearInterval(countdownInterval);
                clearInterval(flipInterval);
            };
        }, [dateContdown]);
   
    /* End Cont Down */

    // Extension Call

    // Exit Scroll
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v1/plugin-status',
        }).then((response) => {
            setPluginActive(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Countdown
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v2/plugin-status',
        }).then((response) => {
            setPluginActiveCountdown(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Age Restriction
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v3/plugin-status',
        }).then((response) => {
            setPluginActiveAge(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Woocommerce
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v4/plugin-status',
        }).then((response) => {
            setPluginActiveWoo(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Button Adder
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v5/plugin-status',
        }).then((response) => {
            setPluginActiveButton(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Exit Intent
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v6/plugin-status',
        }).then((response) => {
            setPluginActiveIntent(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Inactivity Event
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v7/plugin-status',
        }).then((response) => {
            setPluginActiveInactivity(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Advanced Targeting
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v8/plugin-status',
        }).then((response) => {
            setPluginActiveTargeting(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Schedule
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v9/plugin-status',
        }).then((response) => {
            setPluginActiveSchedule(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Advanced Closing
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v10/plugin-status',
        }).then((response) => {
            setPluginActiveClosing(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Overlay Filter
    useEffect(() => {
        // Controlla se la classe del plugin è presente
        apiFetch({
            path: '/cocopopup/v11/plugin-status',
        }).then((response) => {
            setPluginActiveOverlay(response); // Imposta lo stato basato sulla risposta API
        }).catch(error => {
            console.error('Errore nella richiesta API:', error); // Gestisci eventuali errori di richiesta API
        });
    }, []);

    // Class Popup
    const blockProps = useBlockProps({
        className: 'cocopopup editor bpp' + positionPopupButton + 'bpd bp2p' + positionPopupButton2 + 'bp2d',
        style:stylesPopup
    });

    return (
        <>             
            <InspectorControls>
            <AvatarPopup />
                <TabPanel
                    className="cocopopup-extra-tab-general"
                    activeClass="active-tab"
                    initialTabName="tab1"
                    onSelect={onSelect}
                    tabs={[
                        {
                            icon: edit,
                            name: 'tab1',
                            title: __('Content', 'cocopopup'),
                        },
                        {
                            icon: styles,
                            name: 'tab2',
                            title: __('Style', 'cocopopup')
                        },
                        {
                            icon: cog,
                            name: 'tab3',
                            title: __('Advanced', 'cocopopup')
                        }
                    ]}
                >
                {
                (tab) => (
                <>
                <PanelBody
                    title={__('Content', 'cocopopup')}
                    className={'cocopopup-extra-tab-1 ' + tab.name}
                    initialOpen={true}
                >
                   <div className={'cocopopup-editor-popup-content ' + (exitSchedule === true && 'class-schedule')}>
                        <h2>{__('Your Wonderful Popup','cocopopup')}</h2>
                        <p style={{fontWeight:'500'}}>{__('Name: ','cocopopup')}{popupName}</p>
                        <p>{__('ID: ','cocopopup')}{popupId}</p>
                        <p>
                            {__('Events: ', 'cocopopup')}
                            {selectedEvents && optionsEvents.find(option => option.value === selectedEvents)?.label}
                        </p>
                        <p>
                            {__('Closing: ', 'cocopopup')}
                            {selectedClosed && optionsClosed.find(option => option.value === selectedClosed)?.label}
                        </p>
                        {exitSchedule === true && (
                        <>
                        <p style={{fontWeight:'500',textAlign:'center'}}>{__('Schedule','cocopopup')}</p>
                        <p>{__('Start: ','cocopopup')}{date}</p>
                        <p>{__('End: ','cocopopup')}{endDate}</p>
                        </>
                        )}
                    </div>
                    <div className='cocopopup-sep-editor'></div>
                    <TextControl
                        label={__('Id Popup','cocopopup')}
                        value={ popupId}
                        onChange={ (newValue) => setAttributes({popupId: newValue}) }
                        help={__('This ID is unique only for this Popup, it will be visible only to you. It is essential to include it for the proper functioning of the Popup!','cocopopup')}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <TextControl
                        label={__('Name Popup','cocopopup')}
                        value={ popupName }
                        onChange={ (newValue) => setAttributes({popupName : newValue}) }
                        help={__('This is the name of your Popup!','cocopopup')}
                    /> 
                </PanelBody>
                <PanelBody
                    title={__('Button', 'cocopopup')}
                    className={'cocopopup-extra-tab-1 ' + tab.name}
                    initialOpen={false}
                >
                    <TextControl
                        label={__('Text Button','cocopopup')}
                        value={ textButton }
                        onChange={ (newValue) => setAttributes({textButton : newValue}) }
                        help={__('Close Button Text!','cocopopup')}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    
                    <ToggleControl
                        label={__('Button 2','cocopopup')}
                        checked={enableButton2}
                        onChange={(value) => setAttributes({enableButton2: value })}
                        help={__('Enable the second button', 'cocopopup')}
                        disabled={!pluginActiveButton}
                    />  
                    {!pluginActiveButton && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {enableButton2 ===  true && (
                    <>
                    <TextControl
                        label={__('Text Button 2','cocopopup')}
                        value={ textButton2 }
                        onChange={ (newValue) => setAttributes({textButton2 : newValue}) }
                        help={__('Close Button Text 2!','cocopopup')}
                    />
                    <TextControl
                        label={__('Link','cocopopup')}
                        value={ linkRedirectButtonYes }
                        onChange={ (newValue) => setAttributes({linkRedirectButtonYes : newValue}) }
                        type="url"
                    />
                    <ToggleControl
                        label={__('Open in a new window','cocopopup')}
                        checked={linkRedirectButtonYesWindow}
                        onChange={(value) => setAttributes({linkRedirectButtonYesWindow: value })}
                    />  
                    </>
                    )}
                </PanelBody>
                <PanelBody
                    title={__('Events', 'cocopopup')}
                    className={'cocopopup-extra-tab-1 ' + tab.name}
                    initialOpen={false}
                >
                    <p>{__('Select the specific actions that will trigger the popup, default event is on load','cocopopup')}</p>
                    <div className='cocopopup-sep-editor'></div>
                    <CustomSelect options={optionsEvents} selected={selectedEvents} handleChange={handleChangeEvents} isLoading={isLoadingEvents} />
                    {selectedEvents ===  'exitTime' && (
                    <RangeControl
                        label={__('Delay (ms)', 'cocopopup')}
                        value={delay}
                        onChange={(value) => setAttributes({ delay: value })}
                        min={0}
                        max={50000}
                        step={100}
                    />
                    )}
                    {selectedEvents === 'logicExitElementClass' && (
                    <>
                    <TextControl
                        label={__('Insert Class','cocopopup')}
                        value={ classNameElement }
                        onChange={ (newValue) => setAttributes({classNameElement : newValue}) }
                        help={__('Class element name','cocopopup')}
                    />
                    <ToggleControl
                        label={__('Opening Sound','cocopopup')}
                        checked={openSound}
                        onChange={(value) => setAttributes({openSound: value })}
                        help={__('The Pupup will open with a sound!','cocopopup')}
                    />
                    {openSound === true && (
                    <>
                    <div className='cocopopup-content-audio'>
                        <MediaUpload
                            onSelect={onSelectAudio}
                            allowedTypes={['audio']}
                            value={fileAudio}
                            render={({ open }) => (
                                <>
                                    {!fileAudio &&
                                        <Button onClick={open}><Tooltip text={__('Upload Audio files','cocopopup')}><Icon icon={upload} size={24}/></Tooltip></Button>
                                    }
                                    {fileAudio &&
                                        <Button onClick={handleRemoveFile}><Tooltip text={__('Trash','cocopopup')}><Icon icon={trash} size={24}/></Tooltip></Button>
                                    }
                                </>
                            )}
                        />
                        <Tooltip text={__('Play','cocopopup')}>
                            <Button onClick={handlePlay} disabled={!fileAudio}>
                                <span class="dashicons dashicons-controls-volumeoff"></span>
                                <svg
                                    className="volume-lines"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <rect x="5" y="8" width="2" height="8" fill="currentColor">
                                        <animate attributeName="height" attributeType="XML" values="8;12;16;12;8" dur="1.2s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="9" y="6" width="2" height="12" fill="currentColor">
                                        <animate attributeName="height" attributeType="XML" values="12;16;20;16;12" dur="1.2s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="13" y="4" width="2" height="16" fill="currentColor">
                                        <animate attributeName="height" attributeType="XML" values="16;20;24;20;16" dur="1.2s" repeatCount="indefinite" />
                                    </rect>
                                </svg>
                            </Button>
                        </Tooltip>
                    </div>
                    <Notice 
                        className='cocopopup-notice-info'
                        status="info"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('If you don\'t load any audio file, a default sound will be used!','cocopopup')}
                    </Notice>
                    </>
                    )}
                    </>
                    )}
                    {selectedEvents === 'logicExitElementClassHover' && (
                    <TextControl
                        label={__('Insert Class','cocopopup')}
                        value={ classNameElementHover }
                        onChange={ (newValue) => setAttributes({classNameElementHover : newValue}) }
                        help={__('Class element name','cocopopup')}
                    />
                    )}
                    {selectedEvents === 'exitClass' && (
                    <TextControl
                        label={__('Enter Class Name','cocopopup')}
                        value={ popupClassName }
                        onChange={ (newValue) => setAttributes({popupClassName : newValue}) }
                        help={__('Enter the class of the element you want the Popup output to correspond to here!','cocopopup')}
                    />
                    )}
                    {(selectedEvents === 'logicExitElementClassHover' || selectedEvents === 'logicExitElementClass' || selectedEvents === 'exitClass') && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Reopen Popup','cocopopup')}
                        checked={reopenPopup}
                        onChange={(value) => setAttributes({reopenPopup: value })}
                        help={__('The Popup will resume its event once closed!','cocopopup')}
                    />
                    {reopenPopup === true && (
                    <Notice 
                        className='cocopopup-notice-info'
                        status="warning"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('Caution, it may be useful for some events, while for others it may not be!','cocopopup')}
                    </Notice>
                    )}    
                    </>
                    )} 
                    {selectedEvents === 'exitPage' && (
                    <RangeControl
                        label={__('Delay (ms)', 'cocopopup')}
                        value={timeExit}
                        onChange={(value) => setAttributes({ timeExit: value })}
                        min={0}
                        max={10000}
                        step={100}
                    />
                    )}
                    {selectedEvents === 'exitScrollNo' && (         
                    <RangeControl
                        label={__('Scroll Timeout (ms)', 'cocopopup')}
                        value={scrollTimeout}
                        onChange={(value) => setAttributes({ scrollTimeout: value })}
                        min={0}
                        max={20000} 
                        step={100}
                    />
                    )}
                    {selectedEvents === 'exitScrollPosition' && (
                    <>
                    <p>{__('Select Page Position','cocopopup')}</p>
                    <CustomSelect options={optionsPage} selected={selectOptionPage} handleChange={handleChangePage} isLoading={isLoadingPage} />
                    {selectOptionPage === 'page-percent' && (
                    <RangeControl
                        label={__('Percentage', 'cocopopup')}
                        value={percentagePage}
                        onChange={(value) => setAttributes({ percentagePage: value })}
                        min={0}
                        max={100} 
                        step={1}
                    />
                    )}
                    </>
                    )}
                    {selectedEvents === 'exitScrollDirection' && (
                    <>
                    <p>{__('Select Scroll Direction','cocopopup')}</p>
                    <CustomSelect options={optionsDirection} selected={scrollDirection} handleChange={handleChangeDirection} isLoading={isLoadingDirection} />
                    <RangeControl
                        label={__('Scroll Timeout (ms)', 'cocopopup')}
                        value={timeScrollDirection}
                        onChange={(value) => setAttributes({ timeScrollDirection: value })}
                        min={0}
                        max={20000} 
                        step={100}
                    />
                    </>
                    )}
                </PanelBody>
                <PanelBody
                    title={__('Conditions', 'cocopopup')}
                    className={'cocopopup-extra-tab-1 ' + tab.name}
                    initialOpen={false}
                >
                    <p>{__('Set how conditions should occur','cocopopup')}</p>
                    <ButtonGroup className='cocopopup-buttons-group'>
                        <Button
                            label={__('AND','cocopopup')}
                            isPressed={conditionAndOr === 'and'}
                            onClick={() =>
                                setAttributes({
                                    conditionAndOr: 'and',
                                })
                            }
                        >
                            {__('AND','cocopopup')}
                        </Button>
                        <Button
                            label={__('OR','cocopopup')}
                            isPressed={conditionAndOr === 'or'}
                            onClick={() =>
                                setAttributes({
                                    conditionAndOr: 'or',
                                })
                            }
                        >
                            {__('OR','cocopopup')}
                        </Button>
                    </ButtonGroup>
                    {conditionAndOr === 'and' && (
                    <Notice 
                        className='cocopopup-notice-info'
                        status="info"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('All enabled conditions must be met!','cocopopup')}
                    </Notice>
                    )}
                    {conditionAndOr === 'or' && (
                    <Notice 
                        className='cocopopup-notice-info'
                        status="info"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('At least one enabled condition must be met!','cocopopup')}
                    </Notice>
                    )}
                    <ToggleControl
                        label={__('Activate the Popup in all cases','cocopopup')}
                        checked={exitAll}
                        onChange={(value) => setAttributes({exitAll: value })}
                        help={__('Force the Popup to appear in any situation!','cocopopup')}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Number of Visits','cocopopup')}
                        checked={exitVisitNumber}
                        onChange={(value) => setAttributes({exitVisitNumber: value })}
                        help={__('The Popup will appear after a certain number of page visits!','cocopopup')}
                        disabled={!pluginActiveTargeting}
                    />
                    {!pluginActiveTargeting && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {exitVisitNumber === true && (
                    <>
                    <NumberControl
                        label={ __( 'Enter the Number', 'cocopopup' ) }
                        value={ numberVisit }
                        onChange={ onChangeNumberVisit  }
                        min={ 0 }
                        max={ 999 }
                        step={ 1 }
                    />
                    <Notice 
                        className='cocopopup-notice-info'
                        status="info"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('For example, if you set 3, the popup will be shown on the fourth visit!','cocopopup')}
                    </Notice>
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Specific URL','cocopopup')}
                        checked={exitUrl}
                        onChange={(value) => setAttributes({exitUrl: value })}
                        help={__('The Popup will appear only if you arrive from a specific Source!','cocopopup')}
                        disabled={!pluginActiveTargeting}
                    />
                    {!pluginActiveTargeting && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {exitUrl === true && (
                    <>
                    <TextControl
                        label={__('Enter Source','cocopopup')}
                        value={ popupUrlExt}
                        onChange={ (newValue) => setAttributes({popupUrlExt : newValue}) }
                    />
                    <Notice 
                        className='cocopopup-notice-info'
                        status="info"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('Instructions: In the "Source" field, enter the desired string or identifier that you want to use as the source for the popup.\n\
                            When creating a link to the page with the popup, add the parameter "?source=value" to the popup URL, replacing "value" with the string or identifier entered in the "Source". For example, if the set source is "homepage", the link to create could be "http://example.com/popup?source=homepage".\n\
                            The popup will only appear when a visitor lands on the specified page in the popup URL and the source parameter matches the value entered in the "Source" field.\n\
                            You can test the functionality by visiting the page specified by the URL with the correct source parameter and verifying if the popup appears correctly.','cocopopup')}
                    </Notice>
                    <RangeControl
                        label={__('Delay (ms)', 'cocopopup')}
                        value={timeUrl}
                        onChange={(value) => setAttributes({ timeUrl: value })}
                        min={0}
                        max={20000}
                        step={100}
                    />
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('External Link','cocopopup')}
                        checked={exitExternal}
                        onChange={(value) => setAttributes({exitExternal: value })}
                        help={__('The Popup will appear if you arrive from an external link to the site!','cocopopup')}
                        disabled={!pluginActiveTargeting}
                    />
                    {!pluginActiveTargeting && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {exitExternal === true && (
                    <RangeControl
                        label={__('Delay (ms)', 'cocopopup')}
                        value={timeExternaLink}
                        onChange={(value) => setAttributes({ timeExternaLink: value })}
                        min={0}
                        max={20000}
                        step={100}
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Logged-in User','cocopopup')}
                        checked={exitLogUser}
                        onChange={(value) => setAttributes({exitLogUser: value })}
                        help={__('The Popup will appear only if the user is logged in!','cocopopup')}
                        disabled={!pluginActiveTargeting}
                    />
                    {!pluginActiveTargeting && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {exitLogUser === true && (
                    <RangeControl
                        label={__('Delay (ms)', 'cocopopup')}
                        value={timeLogged}
                        onChange={(value) => setAttributes({ timeLogged: value })}
                        min={0}
                        max={20000}
                        step={100}
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Language','cocopopup')}
                        checked={exitLanguage}
                        onChange={(value) => setAttributes({exitLanguage: value })}
                        help={__('Specify which visitors you want the Popup to appear to!','cocopopup')}
                        disabled={!pluginActiveTargeting}
                    />
                    {!pluginActiveTargeting && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {exitLanguage === true && (
                    <>
                        <CustomSelect options={options} selected={selectedLanguages} handleChange={handleChange} isLoading={isLoading} />
                        <Notice 
                            className='cocopopup-notice-info'
                            status="info"
                            isDismissible={false}
                            onDismiss={function noRefCheck(){}}
                            onRemove={function noRefCheck(){}}
                            >
                            {__('It\'s important to note that this logic is based on the language reported by the visitor\'s browser and may not always be 100% accurate.','cocopopup')}
                        </Notice>
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Operating System','cocopopup')}
                        checked={exitOperationSystem}
                        onChange={(value) => setAttributes({exitOperationSystem: value })}
                        help={__('The Popup will appear based on the visitor\'s operating system!','cocopopup')}
                        disabled={!pluginActiveTargeting}
                    />
                    {!pluginActiveTargeting && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {exitOperationSystem === true && (
                    <>
                    <ToggleControl
                        label={__('Windows','cocopopup')}
                        checked={exitWindows}
                        onChange={(value) => setAttributes({exitWindows: value })}
                    />
                    <ToggleControl
                        label={__('Mac','cocopopup')}
                        checked={exitMac}
                        onChange={(value) => setAttributes({exitMac: value })}
                    />
                    <ToggleControl
                        label={__('Linus','cocopopup')}
                        checked={exitLinus}
                        onChange={(value) => setAttributes({exitLinus: value })}
                    />
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Browser','cocopopup')}
                        checked={exitBrowser}
                        onChange={(value) => setAttributes({exitBrowser: value })}
                        help={__('The popup will appear based on the visitor\'s browser!','cocopopup')}
                        disabled={!pluginActiveTargeting}
                    />
                    {!pluginActiveTargeting && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {exitBrowser === true && (
                    <>
                    <p>{__('Select Browser','cocopopup')}</p>
                    <CustomSelect options={optionsBrowser} selected={selectBrowser} handleChange={handleChangeBrowser} isLoading={isLoadingBrowser} />
                    </>
                    )}
                    </PanelBody>
                    <PanelBody
                        title={__('Resonsive', 'cocopopup')}
                        className={'cocopopup-extra-tab-1 ' + tab.name}
                        initialOpen={false}
                    >
                    <ToggleControl
                        label={__('Desktop','cocopopup')}
                        checked={exitDesktop}
                        onChange={(value) => setAttributes({exitDesktop: value })}
                        help={__('The Popup will appear on Desktop devices!','cocopopup')}
                    />
                    {exitDesktop === true && (
                    <RangeControl
                        label={__('Range', 'cocopopup')}
                        value={pxDesktop}
                        onChange={(value) => setAttributes({ pxDesktop: value })}
                        min={500}
                        max={2000} 
                        step={1}
                        help={__('The default value is 769px!','cocopopup')}
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Tablet','cocopopup')}
                        checked={exitTablet}
                        onChange={(value) => setAttributes({exitTablet: value })}
                        help={__('The Popup will appear on Tablet devices!','cocopopup')}
                    />
                    {exitTablet === true && (
                    <RangeControl
                        label={__('Range', 'cocopopup')}
                        value={pxTablet}
                        onChange={(value) => setAttributes({ pxTablet: value })}
                        min={400}
                        max={1200} 
                        step={1}
                        help={__('The default value is 768px!','cocopopup')}
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Mobile','cocopopup')}
                        checked={exitMobile}
                        onChange={(value) => setAttributes({exitMobile: value })}
                        help={__('The Popup will appear on Tablet devices!','cocopopup')}
                    />
                    {exitMobile === true && (
                    <RangeControl
                        label={__('Range', 'cocopopup')}
                        value={pxMobile}
                        onChange={(value) => setAttributes({ pxMobile: value })}
                        min={400}
                        max={1200} 
                        step={1}
                        help={__('The default value is 480px!','cocopopup')}
                    />
                    )}
                </PanelBody>
                <PanelBody
                    title={__('Schedule', 'cocopopup')}
                    className={'cocopopup-extra-tab-1 ' + tab.name}
                    initialOpen={false}
                >    
                    <ToggleControl
                        label={__('Schedule','cocopopup')}
                        checked={exitSchedule}
                        onChange={(value) => setAttributes({exitSchedule: value })}
                        help={__('Set the date for the Popup publication.','cocopopup')}
                        disabled={!pluginActiveSchedule}
                    />
                    {exitSchedule === true && (
                    <Notice 
                        className='cocopopup-notice-info'
                        status="warning"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('Important: You must disable "Activate the Popup in all case" for it to work with scheduling!','cocopopup')}
                    </Notice>
                    )}
                    {!pluginActiveSchedule && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {exitSchedule === true && (
                    <>
                    <p>{__('Start Date','cocopopup')}</p>
                    <DateTimePicker
                        currentDate={date}
                        onChange={(value) => setAttributes({ date: value })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('End Date','cocopopup')}</p>
                    <DateTimePicker
                        currentDate={endDate}
                        onChange={(value) => setAttributes({ endDate: value })}
                    />
                    </>
                    )}
                </PanelBody>
                <PanelBody
                    title={__('Closing', 'cocopopup')}
                    className={'cocopopup-extra-tab-1 ' + tab.name}
                    initialOpen={false}
                >     
                    <p>{__('Closing','cocopopup')}</p>
                    <ToggleControl
                        label={__('Disable reopening of the Popup for the same visitor','cocopopup')}
                        checked={disablePopupClosing}
                        onChange={(value) => setAttributes({disablePopupClosing: value })}
                        help={__('If enabled when the visitor closes the Popup, the Popup will never reappear!','cocopopup')}
                    />
                    {disablePopupClosing === true && (
                    <Notice 
                        className='cocopopup-notice-info'
                        status="warning"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('If you need to reset this Popup from the Dashboard, remember to disable this control too!','cocopopup')}
                    </Notice>
                    )}
                    <div className='cocopopup-sep-editor'></div>  
                    <p>{__('Choose the closing method','cocopopup')}</p>
                    <CustomSelect options={optionsClosed} selected={selectedClosed} handleChange={handleChangeClosed} isLoading={isLoadingClosed} />
                    {selectedClosed === 'close-time' && (
                    <RangeControl
                        label={__('Delay (ms)', 'cocopopup')}
                        value={timeClosedPopup}
                        onChange={(value) => setAttributes({ timeClosedPopup: value })}
                        min={0}
                        max={100000}
                        step={1000}
                    />    
                    )}  
                    {selectedClosed === 'close-scroll' && (
                    <Notice 
                        className='cocopopup-notice-info'
                        status="warning"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('Make sure you disable scroll locking in the body, in Advanced -> Body Behavior!','cocopopup')}
                    </Notice>
                    )}
                    {selectedClosed === 'close-no' && (
                    <Notice 
                        className='cocopopup-notice-info'
                        status="info"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('Enable or disable body scrolling in Advanced -> Body Behavior!','cocopopup')}
                    </Notice>
                    )}
                    {selectedClosed === 'close-opacity' && (
                    <>
                    <RangeControl
                        label={__('Closing Delay (ms)', 'cocopopup')}
                        value={timeOpacityExit}
                        onChange={(value) => setAttributes({ timeOpacityExit: value })}
                        min={0}
                        max={10000}
                        step={100}
                    />   
                    <RangeControl
                        label={__('Opacity Delay (ms)', 'cocopopup')}
                        value={timeOpacity}
                        onChange={(value) => setAttributes({ timeOpacity: value })}
                        min={0}
                        max={10000}
                        step={100}
                    /> 
                    </>  
                    )} 
                    {selectedClosed === 'close-class' && (
                    <>
                    <TextControl
                        label={__('Enter the class','cocopopup')}
                        value={ classClosePopup }
                        onChange={ (newValue) => setAttributes({classClosePopup : newValue}) }
                    />
                    <ToggleControl
                        label={__('Button','cocopopup')}
                        checked={enabelButtonClass}
                        onChange={(value) => setAttributes({enabelButtonClass: value })}
                        help={__('Also enable the close button!','cocopopup')}
                    />
                    </>
                    )}
                    {selectedClosed === 'close-contdown' && (
                    <>
                    <CustomSelect options={optionsContdown} selected={selectedContdown} handleChange={handleChangeContdown} isLoading={isLoadingContdown} />
                    {selectedContdown === 'seconds' && (
                    <>
                    <RangeControl
                        label={__('Set contdown (ms)', 'cocopopup')}
                        value={secondContdown}
                        onChange={(value) => setAttributes({ secondContdown: value })}
                        min={0}
                        max={300}
                        step={1}
                    /> 
                    <TextControl
                        label={__('Countdown text before seconds','cocopopup')}
                        value={ textContdownBefore }
                        onChange={ (newValue) => setAttributes({textContdownBefore : newValue}) }
                    />
                    <TextControl
                        label={__('Countdown text after seconds','cocopopup')}
                        value={ textContdownAfter }
                        onChange={ (newValue) => setAttributes({textContdownAfter : newValue}) }
                    />
                    <ToggleControl
                        label={__('Enable automatic closing','cocopopup')}
                        checked={contdownSecondAutomaticClose}
                        onChange={(value) => setAttributes({contdownSecondAutomaticClose: value })}
                        help={__('If enabled the Popup will close automatically after the set seconds, if disabled the close button will appear at the end of the set seconds!','cocopopup')}
                    />
                    </>
                    )}
                    {(selectedContdown === 'date-round' || selectedContdown === 'date') && (
                    <>
                    <p>{__('Date Contdown','cocopopup')}</p>
                    <DateTimePicker
                        currentDate={dateContdown}
                        onChange={(value) => setAttributes({ dateContdown: value })}
                    />
                    <div className='cocopopup-sep-editor'></div>  
                    <ToggleControl
                        label={__('Enable button closing','cocopopup')}
                        checked={contdownSecondAutomaticClose}
                        onChange={(value) => setAttributes({contdownSecondAutomaticClose: value })}
                    />
                    </>
                    )}
                    {selectedContdown === 'date' && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Effect Flip','cocopopup')}
                        checked={enableFlipCont}
                        onChange={(value) => setAttributes({enableFlipCont: value })}
                        help={__('Enable effect Flip!', 'cocopopup')}
                    />
                    </>  
                    )}
                    </>
                    )}
                    {selectedClosed === 'close-age' && (
                    <>
                    <TextControl
                        label={__('Day','cocopopup')}
                        value={ textDayAge}
                        onChange={ (newValue) => setAttributes({textDayAge : newValue}) }
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <TextControl
                        label={__('Month','cocopopup')}
                        value={ textMonthAge}
                        onChange={ (newValue) => setAttributes({textMonthAge : newValue}) }
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <TextControl
                        label={__('Year','cocopopup')}
                        value={ textYearAge}
                        onChange={ (newValue) => setAttributes({ textYearAge : newValue}) }
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Select the language for the months','cocopopup')}</p>
                    <CustomSelect options={optionsAgeMonth} selected={selectedAgeMonth} handleChange={handleChangeAgeMonth} isLoading={isLoadingAgeMonth} />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Errors','cocopopup')}</p>
                    <TextControl
                        label={__('Form not set','cocopopup')}
                        value={ errorFormAge}
                        onChange={ (newValue) => setAttributes({errorFormAge : newValue}) }
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <TextControl
                        label={__('Incorrect age','cocopopup')}
                        value={ errorAgeAge}
                        onChange={ (newValue) => setAttributes({errorAgeAge : newValue}) }
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Welcome','cocopopup')}</p>
                    <ToggleControl
                        label={__('Welcome Message','cocopopup')}
                        checked={enableWelcomeAge}
                        onChange={(value) => setAttributes({enableWelcomeAge: value })}
                        help={__('Enable a welcome message!','cocopopup')}
                    />  
                    {enableWelcomeAge === true && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <TextareaControl
                        label={__('Message','cocopopup')}
                        value={ welcomeAge }
                        onChange={ ( value ) => setAttributes( {welcomeAge:value} ) }
                    />
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Buttons','cocopopup')}</p>
                    <ToggleControl
                        label={__('Enable Button 1','cocopopup')}
                        checked={enableButtonOne}
                        onChange={(value) => setAttributes({enableButtonOne: value })}
                    />  
                    {enableButtonOne === true && (
                    <>
                    <TextControl
                        label={__('Button 1','cocopopup')}
                        value={ buttonOneAge }
                        onChange={ (newValue) => setAttributes({buttonOneAge : newValue}) }
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <TextControl
                        label={__('Button 1 Link','cocopopup')}
                        value={ linkButtonOneAge }
                        onChange={ (newValue) => setAttributes({linkButtonOneAge : newValue}) }
                        type="url"
                    />
                    <ToggleControl
                        label={__('Open in a new window','cocopopup')}
                        checked={linkButtonOneAgeWindow}
                        onChange={(value) => setAttributes({linkButtonOneAgeWindow: value })}
                    />  
                    <div className='cocopopup-sep-editor'></div>
                    </>
                    )}
                    <TextControl
                        label={__('Button 2','cocopopup')}
                        value={ buttonTwoAge }
                        onChange={ (newValue) => setAttributes({buttonTwoAge : newValue}) }
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Closure Popup','cocopopup')}</p>
                    <RangeControl
                        label={__('Delay (ms)', 'cocopopup')}
                        value={timecolsePopupAge}
                        onChange={(value) => setAttributes({ timecolsePopupAge: value })}
                        min={0}
                        max={30000}
                        step={1000}
                    />
                    </>
                    )}
                    {selectedClosed === 'close-url' && (
                    <>
                    <TextControl
                        label={__('Link','cocopopup')}
                        value={ linkRedirectButtonNo }
                        onChange={ (newValue) => setAttributes({linkRedirectButtonNo : newValue}) }
                        type="url"
                    />
                    <ToggleControl
                        label={__('Open in a new window','cocopopup')}
                        checked={linkRedirectButtonNoWindow}
                        onChange={(value) => setAttributes({linkRedirectButtonNoWindow: value })}
                    />  
                    </>
                    )}
                </PanelBody>
                {pluginActiveWoo && (
                <>
                <PanelBody
                    title={__('WooCommerce', 'cocopopup')}
                    className={'cocopopup-extra-tab-1 ' + tab.name}
                    initialOpen={false}
                >   
                    <Notice 
                        className='cocopopup-notice-info'
                        status="info"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('For these controls to work you must have installed and activated the Woocommerce Plugin!','cocopopup')}
                    </Notice>
                    <Notice 
                        className='cocopopup-notice-info'
                        status="warning"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('Important: You need to set in "Conditions" -> "Set how conditions should occur" -> "OR" and deactivate "Enable popup anyway" for it to work with Woocommerce conditions!','cocopopup')}
                    </Notice>
                    <ToggleControl
                        label={__('Empty Cart','cocopopup')}
                        checked={exitWooCartEmpty}
                        onChange={(value) => setAttributes({exitWooCartEmpty: value })}
                        help={__('The Popup will appear when the cart is empty!','cocopopup')}
                    />   
                    <div className='cocopopup-sep-editor'></div>    
                    <ToggleControl
                        label={__('Number of Products in the Cart','cocopopup')}
                        checked={exitWooCartCount}
                        onChange={(value) => setAttributes({exitWooCartCount: value })}
                        help={__('The popup will appear when the cart contains a certain number of products!','cocopopup')}
                    />   
                    {exitWooCartCount === true && (
                        <NumberControl
                            label={ __( 'Enter the quantity of the products', 'cocopopup' ) }
                            value={ numberProductCart}
                            onChange={ onChangeNumberProductCart  }
                            min={ 0 }
                            max={ 99 }
                            step={ 1 }
                        />
                    )}
                    <div className='cocopopup-sep-editor'></div>    
                    <ToggleControl
                        label={__('Specific Product in Cart','cocopopup')}
                        checked={exitWooCartId}
                        onChange={(value) => setAttributes({exitWooCartId: value })}
                        help={__('The Popup will appear when a specific product is in the cart!','cocopopup')}
                    />  
                    {exitWooCartId === true && ( 
                    <>
                    <TextControl
                        label={__('ID Product','cocopopup')}
                        value={ productId }
                        onChange={ (newValue) => setAttributes({productId : newValue}) }
                        help={__('Enter the Product ID!','cocopopup')}
                    />
                    <Notice 
                        className='cocopopup-notice-info'
                        status="info"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('To find the product ID, you can go to Products -> here you will see the names of the products along with their IDs.','cocopopup')}
                    </Notice>
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>    
                    <ToggleControl
                        label={__('Total Amount in Cart','cocopopup')}
                        checked={exitWooCartAmount}
                        onChange={(value) => setAttributes({exitWooCartAmount: value })}
                        help={__('The Popup will appear based on the amount in the cart!','cocopopup')}
                    />  
                    {exitWooCartAmount === true && ( 
                    <>
                    <p>{__('Select Logic','cocopopup')}</p>
                    <CustomSelect options={optionsCart} selected={selectedAmountCart} handleChange={handleChangeCart} isLoading={isLoadingCart} />
                    <RangeControl
                        label={__('Enter the total amount in the cart', 'cocopopup')}
                        value={amountProductCart}
                        onChange={(value) => setAttributes({ amountProductCart: value })}
                        min={0}
                        max={1000}
                        step={1}
                    />    
                    </>
                    )}
                </PanelBody>
                </>
                )}
                <div id="panel-2"  className={'cocopopup-extra-tab-2 ' + tab.name} />
                <PanelBody
                    title={__('Structure', 'cocopopup')}
                    className={'cocopopup-extra-tab-2 ' + tab.name}
                    initialOpen={false}
                   
                >
                    <p>{__('Position','cocopopup')}</p>
                    <AlignmentMatrixControl
                        value={ positionPopup}
                        onChange={(value) => setAttributes({ positionPopup: value })}
                    />
                    <div className='cocopopup-sep-editor'></div> 
                    <ToggleControl
                        label={__('Width','cocopopup')}
                        checked={enableCustomWidthPopup}
                        onChange={(value) => setAttributes({enableCustomWidthPopup: value })}
                        help={enableCustomWidthPopup ? __('Enable custom width for the popup.', 'cocopopup') : __('Auto width will be applied to the popup.', 'cocopopup')}
                    />   
                    {enableCustomWidthPopup === true && (
                        <WidthOptionsPanel
                            widthElement ={widthPopup}
                            setWidthElement={(val) => setAttributes({ widthPopup: val })}
                            widthTabletElement ={widthPopupTablet}
                            setWidthTabletElement={(val) => setAttributes({ widthPopupTablet: val })}
                            widthMobileElement ={widthPopupMobile}
                            setWidthMobileElement={(val) => setAttributes({ widthPopupMobile: val })}
                            pxElement ={pxWidthPopup}
                            setPxElement={(val) => setAttributes({ pxWidthPopup: val })}
                        />
                    )} 
                    <div className='cocopopup-sep-editor'></div>   
                    <BoxControl
                        label={__('Padding','cocopopup')}
                        values={paddingPopup}
                        onChange={(nextValues) =>setAttributes({paddingPopup: nextValues})}
                    />
                    <div className='cocopopup-sep-editor'></div>  
                    <p>{__('Border','cocopopup')}</p>
                    <BorderOptionsPanel
                        width={borderWidthPopup}
                        setWidth={(val) => setAttributes({ borderWidthPopup: val })}
                        style={borderStylePopup}
                        setStyle={(val) => setAttributes({ borderStylePopup: val })}
                        radius={borderRadiusPopup}
                        setRadius={(val) => setAttributes({ borderRadiusPopup: val })}
                    />
                    {borderStylePopup !== 'none' && borderStylePopup !== 'hidden' && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Border Color','cocopopup')}</p>
                    <ColorOptionsPanel
                        colorNormal={borderColorPopup}
                        setColorNormal={(color) => setAttributes({ borderColorPopup: color })}
                        colorHover={borderColorHoverPopup}
                        setColorHover={(color) => setAttributes({ borderColorHoverPopup: color })}
                        transitionColor={transitionBorderColorPopup}
                        setTransitionColor={(val) => setAttributes({ transitionBorderColorPopup: val })}
                    />
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Background Color','cocopopup')}</p>
                    <BackgroundColorOptionsPanelOne
                        setBackgroundColor={handleSetBackgroundColor}
                        setBackgroundGradient={handleSetBackgroundGradient} 
                        backgroundColor={backgroundColor} 
                        backgroundGradient={backgroundGradient} 
                        setBackgroundColorHover={handleSetBackgroundColorHover} 
                        setBackgroundGradientHover={handleSetBackgroundGradientHover} 
                        backgroundColorHover={backgroundColorHover} 
                        backgroundGradientHover={backgroundGradientHover} 
                        transition={transitionBackgroundColor}
                        setTransition={(val) => setAttributes({ transitionBackgroundColor: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Box Shadow','cocopopup')}</p>
                    <BoxShadowControl
                        boxShadow={boxShadow}
                        setBoxShadow={(val) => setAttributes({ boxShadow: val })}
                        hasHoverControl={hasHoverControl}
                        setHasHoverControl={(val) => setAttributes({ hasHoverControl: val })}
                        boxShadowHover={boxShadowHover}
                        setBoxShadowHover={(val) => setAttributes({ boxShadowHover: val })}
                        transitionShadow={transitionShadow}
                        setTransitionShadow={(val) => setAttributes({ transitionShadow: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Opacity', 'cocopopup')}
                        value={opacityPopup}
                        onChange={(value) => setAttributes({ opacityPopup: value })}
                        min={0}
                        max={1}
                        step={.1}
                    />    
                </PanelBody>
                <PanelBody
                    title={__('Button', 'cocopopup')}
                    className={'cocopopup-extra-tab-2 ' + tab.name}
                    initialOpen={false}
                >
                    <p>{__('Position','cocopopup')}</p>
                    <AlignmentMatrixControl
                        value={ positionPopupButton}
                        onChange={(value) => setAttributes({ positionPopupButton: value })}
                    />
                    <div className='cocopopup-sep-editor'></div>  
                    {['top left', 'center left', 'bottom left'].includes(positionPopupButton) && (
                    <>
                    <RangeControl
                        label={__('Left (%)', 'cocopopup')}
                        value={leftButton}
                        onChange={(value) => setAttributes({ leftButton: value })}
                        min={0}
                        max={100}
                        step={1}
                    />  
                    <div className='cocopopup-sep-editor'></div>  
                    </>
                    )}
                    {['top left', 'top center', 'top right'].includes(positionPopupButton) && (
                    <>
                    <RangeControl
                        label={__('Top (%)', 'cocopopup')}
                        value={topButton}
                        onChange={(value) => setAttributes({ topButton: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div> 
                    </>
                    )}  
                    {['top right', 'center right', 'bottom right'].includes(positionPopupButton) && (
                    <>
                    <RangeControl
                        label={__('Right (%)', 'cocopopup')}
                        value={rightButton}
                        onChange={(value) => setAttributes({ rightButton: value })}
                        min={0}
                        max={100}
                        step={1}
                    />  
                    <div className='cocopopup-sep-editor'></div>  
                    </>
                    )}
                    {['bottom left', 'bottom center', 'bottom right'].includes(positionPopupButton) && (
                    <>
                    <RangeControl
                        label={__('Bottom (%)', 'cocopopup')}
                        value={bottomButton}
                        onChange={(value) => setAttributes({ bottomButton: value })}
                        min={0}
                        max={100}
                        step={1}
                    />  
                    <div className='cocopopup-sep-editor'></div>  
                    </>
                    )} 
                    <TypographyOptionsPanel
                        fontSize={sizeButton}
                        setFontSize={(val) => setAttributes({ sizeButton: val })}
                        fontSizeTablet={sizeButtonTablet}
                        setFontSizeTablet={(val) => setAttributes({ sizeButtonTablet: val })}
                        fontSizeMobile={sizeButtonMobile}
                        setFontSizeMobile={(val) => setAttributes({ sizeButtonMobile: val })}
                        lineHeight={lineHeightButton}
                        setLineHeight={(val) => setAttributes({ lineHeightButton: val })}
                        weight={weightButton}
                        setWeight={(val) => setAttributes({ weightButton: val })}
                        letterSpacing={letterSpacingButton}
                        setLetterSpacing={(val) => setAttributes({ letterSpacingButton: val })}
                        decoration={decorationButton}
                        setDecoration={(val) => setAttributes({ decorationButton: val })}
                        trasform={trasformButton}
                        setTrasform={(val) => setAttributes({ trasformButton: val })}
                        pxTitle={pxButton}
                        setPxTitle={(val) => setAttributes({pxButton: val})}
                    />
                    <div className='cocopopup-sep-editor'></div>  
                    <BoxControl
                        label={__('Padding','cocopopup')}
                        values={paddingPopupButton}
                        onChange={(nextValues) =>setAttributes({paddingPopupButton: nextValues})}
                    />
                    <div className='cocopopup-sep-editor'></div>  
                    <p>{__('Border','cocopopup')}</p>
                    <BorderOptionsPanel
                        width={borderWidthPopupButton}
                        setWidth={(val) => setAttributes({ borderWidthPopupButton: val })}
                        style={borderStylePopupButton}
                        setStyle={(val) => setAttributes({ borderStylePopupButton: val })}
                        radius={borderRadiusPopupButton}
                        setRadius={(val) => setAttributes({ borderRadiusPopupButton: val })}
                    />
                    {borderStylePopupButton !== 'none' && borderStylePopupButton !== 'hidden' && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Border Color','cocopopup')}</p>
                    <ColorOptionsPanel
                        colorNormal={borderColorPopupButton}
                        setColorNormal={(color) => setAttributes({ borderColorPopupButton: color })}
                        colorHover={borderColorHoverPopupButton}
                        setColorHover={(color) => setAttributes({ borderColorHoverPopupButton: color })}
                        transitionColor={transitionBorderColorPopupButton}
                        setTransitionColor={(val) => setAttributes({ transitionBorderColorPopupButton: val })}
                    />
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Color','cocopopup')}</p>
                    <ColorOptionsPanel
                        colorNormal={colorTextButton}
                        setColorNormal={(color) => setAttributes({ colorTextButton: color })}
                        colorHover={colorTextButtonHover}
                        setColorHover={(color) => setAttributes({ colorTextButtonHover: color })}
                        transitionColor={transitionColorTextButton}
                        setTransitionColor={(val) => setAttributes({ transitionColorTextButton: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Background Color','cocopopup')}</p>
                    <BackgroundColorOptionsPanelOne
                        setBackgroundColor={handleSetBackgroundColorButton}
                        setBackgroundGradient={handleSetBackgroundGradientButton} 
                        backgroundColor={backgroundColorButton} 
                        backgroundGradient={backgroundGradientButton} 
                        setBackgroundColorHover={handleSetBackgroundColorHoverButton} 
                        setBackgroundGradientHover={handleSetBackgroundGradientHoverButton} 
                        backgroundColorHover={backgroundColorHoverButton} 
                        backgroundGradientHover={backgroundGradientHoverButton} 
                        transition={transitionBackgroundColorButton}
                        setTransition={(val) => setAttributes({ transitionBackgroundColorButton: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Box Shadow','cocopopup')}</p>
                    <BoxShadowControl
                        boxShadow={boxShadowButton}
                        setBoxShadow={(val) => setAttributes({ boxShadowButton: val })}
                        hasHoverControl={hasHoverControlButton}
                        setHasHoverControl={(val) => setAttributes({ hasHoverControlButton: val })}
                        boxShadowHover={boxShadowHoverButton}
                        setBoxShadowHover={(val) => setAttributes({ boxShadowHoverButton: val })}
                        transitionShadow={transitionShadowButton}
                        setTransitionShadow={(val) => setAttributes({ transitionShadowButton: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Opacity', 'cocopopup')}
                        value={opacityPopupButton}
                        onChange={(value) => setAttributes({ opacityPopupButton: value })}
                        min={0}
                        max={1}
                        step={.1}
                    />    
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Rotation Hover','cocopopup')}
                        checked={enableRotateHoverButton}
                        onChange={(value) => setAttributes({enableRotateHoverButton: value })}
                        help={__('Enable rotation on the hover!', 'cocopopup')}
                    />  
                    {enableRotateHoverButton === true && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Rotation', 'cocopopup')}
                        value={rotateHoverButton}
                        onChange={(value) => setAttributes({ rotateHoverButton: value })}
                        min={0}
                        max={360}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>   
                    <RangeControl
                        label={__('Transition Time','cocopopup')}
                        value={transitionRotateHoverButton}
                        onChange={(value) => setAttributes({ transitionRotateHoverButton: value })}
                        min={0}
                        max={5}
                        step={.1}
                    /> 
                    </>
                    )}
                </PanelBody>
                {enableButton2 === true && (
                <>
                <PanelBody
                    title={__('Button 2', 'cocopopup')}
                    className={'cocopopup-extra-tab-2 ' + tab.name}
                    initialOpen={false}
                >
                    <div className='cocopopup-sep-editor'></div>  
                    <h2>{__('Button 2','cocopopup')}</h2>
                    <p>{__('Position','cocopopup')}</p>
                    <AlignmentMatrixControl
                        value={ positionPopupButton2}
                        onChange={(value) => setAttributes({ positionPopupButton2: value })}
                    />
                    <div className='cocopopup-sep-editor'></div>  
                    {['top left', 'center left', 'bottom left'].includes(positionPopupButton2) && (
                    <>
                    <RangeControl
                        label={__('Left (%)', 'cocopopup')}
                        value={leftButton2}
                        onChange={(value) => setAttributes({ leftButton2: value })}
                        min={0}
                        max={100}
                        step={1}
                    />  
                    <div className='cocopopup-sep-editor'></div>  
                    </>
                    )}
                    {['top left', 'top center', 'top right'].includes(positionPopupButton2) && (
                    <>
                    <RangeControl
                        label={__('Top (%)', 'cocopopup')}
                        value={topButton2}
                        onChange={(value) => setAttributes({ topButton2: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div> 
                    </>
                    )}  
                    {['top right', 'center right', 'bottom right'].includes(positionPopupButton2) && (
                    <>
                    <RangeControl
                        label={__('Right (%)', 'cocopopup')}
                        value={rightButton2}
                        onChange={(value) => setAttributes({ rightButton2: value })}
                        min={0}
                        max={100}
                        step={1}
                    />  
                    <div className='cocopopup-sep-editor'></div>  
                    </>
                    )}
                    {['bottom left', 'bottom center', 'bottom right'].includes(positionPopupButton2) && (
                    <>
                    <RangeControl
                        label={__('Bottom (%)', 'cocopopup')}
                        value={bottomButton2}
                        onChange={(value) => setAttributes({ bottomButton2: value })}
                        min={0}
                        max={100}
                        step={1}
                    />  
                    <div className='cocopopup-sep-editor'></div>  
                    </>
                    )} 
                    <TypographyOptionsPanel
                        fontSize={sizeButton2}
                        setFontSize={(val) => setAttributes({ sizeButton2: val })}
                        fontSizeTablet={sizeButton2Tablet}
                        setFontSizeTablet={(val) => setAttributes({ sizeButton2Tablet: val })}
                        fontSizeMobile={sizeButton2Mobile}
                        setFontSizeMobile={(val) => setAttributes({ sizeButton2Mobile: val })}
                        lineHeight={lineHeightButton2}
                        setLineHeight={(val) => setAttributes({ lineHeightButton2: val })}
                        weight={weightButton2}
                        setWeight={(val) => setAttributes({ weightButton2: val })}
                        letterSpacing={letterSpacingButton2}
                        setLetterSpacing={(val) => setAttributes({ letterSpacingButton2: val })}
                        decoration={decorationButton2}
                        setDecoration={(val) => setAttributes({ decorationButton2: val })}
                        trasform={trasformButton2}
                        setTrasform={(val) => setAttributes({ trasformButton2: val })}
                        pxTitle={pxButton2}
                        setPxTitle={(val) => setAttributes({pxButton2: val})}
                    />
                    <div className='cocopopup-sep-editor'></div>  
                    <BoxControl
                        label={__('Padding','cocopopup')}
                        values={paddingPopupButton2}
                        onChange={(nextValues) =>setAttributes({paddingPopupButton2: nextValues})}
                    />
                    <div className='cocopopup-sep-editor'></div>  
                    <p>{__('Border','cocopopup')}</p>
                    <BorderOptionsPanel
                        width={borderWidthPopupButton2}
                        setWidth={(val) => setAttributes({ borderWidthPopupButton2: val })}
                        style={borderStylePopupButton2}
                        setStyle={(val) => setAttributes({ borderStylePopupButton2: val })}
                        radius={borderRadiusPopupButton2}
                        setRadius={(val) => setAttributes({ borderRadiusPopupButton2: val })}
                    />
                    {borderStylePopupButton2 !== 'none' && borderStylePopupButton2 !== 'hidden' && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Border Color','cocopopup')}</p>
                    <ColorOptionsPanel
                        colorNormal={borderColorPopupButton2}
                        setColorNormal={(color) => setAttributes({ borderColorPopupButton2: color })}
                        colorHover={borderColorHoverPopupButton2}
                        setColorHover={(color) => setAttributes({ borderColorHoverPopupButton2: color })}
                        transitionColor={transitionBorderColorPopupButton2}
                        setTransitionColor={(val) => setAttributes({ transitionBorderColorPopupButton2: val })}
                    />
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Color','cocopopup')}</p>
                    <ColorOptionsPanel
                        colorNormal={colorTextButton2}
                        setColorNormal={(color) => setAttributes({ colorTextButton2: color })}
                        colorHover={colorTextButton2Hover}
                        setColorHover={(color) => setAttributes({ colorTextButton2Hover: color })}
                        transitionColor={transitionColorTextButton2}
                        setTransitionColor={(val) => setAttributes({ transitionColorTextButton2: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Background Color','cocopopup')}</p>
                    <BackgroundColorOptionsPanelOne
                        setBackgroundColor={handleSetBackgroundColorButton2}
                        setBackgroundGradient={handleSetBackgroundGradientButton2} 
                        backgroundColor={backgroundColorButton2} 
                        backgroundGradient={backgroundGradientButton2} 
                        setBackgroundColorHover={handleSetBackgroundColorHoverButton2} 
                        setBackgroundGradientHover={handleSetBackgroundGradientHoverButton2} 
                        backgroundColorHover={backgroundColorHoverButton2} 
                        backgroundGradientHover={backgroundGradientHoverButton2} 
                        transition={transitionBackgroundColorButton2}
                        setTransition={(val) => setAttributes({ transitionBackgroundColorButton2: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Box Shadow','cocopopup')}</p>
                    <BoxShadowControl
                        boxShadow={boxShadowButton2}
                        setBoxShadow={(val) => setAttributes({ boxShadowButton2: val })}
                        hasHoverControl={hasHoverControlButton2}
                        setHasHoverControl={(val) => setAttributes({ hasHoverControlButton2: val })}
                        boxShadowHover={boxShadowHoverButton2}
                        setBoxShadowHover={(val) => setAttributes({ boxShadowHoverButton2: val })}
                        transitionShadow={transitionShadowButton2}
                        setTransitionShadow={(val) => setAttributes({ transitionShadowButton2: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Opacity', 'cocopopup')}
                        value={opacityPopupButton2}
                        onChange={(value) => setAttributes({ opacityPopupButton2: value })}
                        min={0}
                        max={1}
                        step={.1}
                    />    
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Rotation Hover','cocopopup')}
                        checked={enableRotateHoverButton2}
                        onChange={(value) => setAttributes({enableRotateHoverButton2: value })}
                        help={__('Enable rotation on the hover!', 'cocopopup')}
                    />  
                    {enableRotateHoverButton2 === true && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Rotation', 'cocopopup')}
                        value={rotateHoverButton2}
                        onChange={(value) => setAttributes({ rotateHoverButton2: value })}
                        min={0}
                        max={360}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>   
                    <RangeControl
                        label={__('Transition Time','cocopopup')}
                        value={transitionRotateHoverButton2}
                        onChange={(value) => setAttributes({ transitionRotateHoverButton2: value })}
                        min={0}
                        max={5}
                        step={.1}
                    /> 
                    </>
                    )}
                </PanelBody>
                </>
                )}
                {selectedClosed === 'close-contdown' && (
                <PanelBody
                    title={__('Contdown', 'cocopopup')}
                    className={'cocopopup-extra-tab-2 ' + tab.name}
                    initialOpen={false}
                >
                    {selectedContdown === 'seconds' && (
                    <>
                    <RangeControl
                        label={__('Font Sixe', 'cocopopup')}
                        value={sizeContdown}
                        onChange={(value) => setAttributes({ sizeContdown: value })}
                        min={0}
                        max={200}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Vertical Align', 'cocopopup')}
                        value={verticalContdown}
                        onChange={(value) => setAttributes({ verticalContdown: value })}
                        min={-500}
                        max={500}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Horizontal Align', 'cocopopup')}
                        value={horizontalContdown}
                        onChange={(value) => setAttributes({ horizontalContdown: value })}
                        min={-500}
                        max={500}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Padding Top/Bottom Seconds', 'cocopopup')}
                        value={paddingContdownSeconds}
                        onChange={(value) => setAttributes({ paddingContdownSeconds: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Padding Left/Right Seconds', 'cocopopup')}
                        value={paddingContdownSecondsRight}
                        onChange={(value) => setAttributes({ paddingContdownSecondsRight: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Border Radius Seconds', 'cocopopup')}
                        value={borderRadiusContdownSeconds}
                        onChange={(value) => setAttributes({ borderRadiusContdownSeconds: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Font Weight Text','cocopopup')}</p>
                    <CustomSelect options={optionsWeightCont} selected={weightCont} handleChange={handleChangeWeightCont} isLoading={isLoadingWeightCont} />
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color','cocopopup')}</p>
                    <Button
                        onClick={toggleColor}
                        style={{ backgroundColor: colorContdownText }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpen && (
                    <ColorPalette
                        label={__('Color','cocopopup')}
                        value={colorContdownText}
                        onChange={(color) =>setAttributes({colorContdownText: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Background Color Seconds','cocopopup')}</p>
                    <Button
                        onClick={toggleColorB}
                        style={{ backgroundColor: backgroundColorContdownSeconds }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenB && (
                    <ColorPalette
                        label={__('Color','cocopopup')}
                        value={backgroundColorContdownSeconds}
                        onChange={(color) =>setAttributes({backgroundColorContdownSeconds: color})}
                        enableAlpha
                    />
                    )}
                    </>
                    )}
                    {selectedContdown === 'date-round' && (
                    <>
                    <RangeControl
                        label={__('Gap','cocopopup')}
                        value={gapContdown}
                        onChange={(value) => setAttributes({ gapContdown: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <RangeControl
                        label={__('Font Sixe Text', 'cocopopup')}
                        value={sizeContdown}
                        onChange={(value) => setAttributes({ sizeContdown: value })}
                        min={0}
                        max={50}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Font Weight Text','cocopopup')}</p>
                    <CustomSelect options={optionsWeightCont} selected={weightCont} handleChange={handleChangeWeightCont} isLoading={isLoadingWeightCont} />
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Font Sixe Count', 'cocopopup')}
                        value={sizeContdownCount}
                        onChange={(value) => setAttributes({ sizeContdownCount: value })}
                        min={0}
                        max={70}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Font Weight Count','cocopopup')}</p>
                    <CustomSelect options={optionsWeightCont} selected={weightContN} handleChange={handleChangeWeightContN} isLoading={isLoadingWeightContN} />
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Line Height Count', 'cocopopup')}
                        value={lineHeightContdownCount}
                        onChange={(value) => setAttributes({ lineHeightContdownCount: value })}
                        min={0}
                        max={70}
                        step={1}
                    /> 
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Text','cocopopup')}</p>
                    <Button
                        onClick={toggleColorE}
                        style={{ backgroundColor: colorContdownText }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenE && (
                    <ColorPalette
                        label={__('Color Text','cocopopup')}
                        value={colorContdownText}
                        onChange={(color) =>setAttributes({colorContdownText: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Count','cocopopup')}</p>
                    <Button
                        onClick={toggleColorC}
                        style={{ backgroundColor: colorContdownCount }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenC && (
                    <ColorPalette
                        label={__('Color Count','cocopopup')}
                        value={colorContdownCount}
                        onChange={(color) =>setAttributes({colorContdownCount: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Circle','cocopopup')}</p>
                    <Button
                        onClick={toggleColor}
                        style={{ backgroundColor: colorContdownCircle }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpen && (
                    <ColorPalette
                        label={__('Color Circle','cocopopup')}
                        value={colorContdownCircle}
                        onChange={(color) =>setAttributes({colorContdownCircle: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Circle Days','cocopopup')}</p>
                    <Button
                        onClick={toggleColorB}
                        style={{ backgroundColor: colorContdownCircleDays }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenB && (
                    <ColorPalette
                        label={__('Color Circle Days','cocopopup')}
                        value={colorContdownCircleDays}
                        onChange={(color) =>setAttributes({colorContdownCircleDays: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Circle Hours','cocopopup')}</p>
                    <Button
                        onClick={toggleColorC}
                        style={{ backgroundColor: colorContdownCircleHours }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenC && (
                    <ColorPalette
                        label={__('Color Circle Hours','cocopopup')}
                        value={colorContdownCircleHours}
                        onChange={(color) =>setAttributes({colorContdownCircleHours: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Circle Minutes','cocopopup')}</p>
                    <Button
                        onClick={toggleColorD}
                        style={{ backgroundColor: colorContdownCircleMinutes }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenD && (
                    <ColorPalette
                        label={__('Color Circle Minutes','cocopopup')}
                        value={colorContdownCircleMinutes}
                        onChange={(color) =>setAttributes({colorContdownCircleMinutes: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Circle Seconds','cocopopup')}</p>
                    <Button
                        onClick={toggleColorF}
                        style={{ backgroundColor: colorContdownCircleSeconds }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenF && (
                    <ColorPalette
                        label={__('Color Circle Seconds','cocopopup')}
                        value={colorContdownCircleSeconds}
                        onChange={(color) =>setAttributes({colorContdownCircleSeconds: color})}
                        enableAlpha
                    />
                    )}
                    </>
                    )}
                    {selectedContdown === 'date' && (
                    <>
                    <RangeControl
                        label={__('Gap','cocopopup')}
                        value={gapContdown}
                        onChange={(value) => setAttributes({ gapContdown: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <BoxControl
                        label={__('Border Radius Top Element','cocopopup')}
                        values={borderRadiusCont}
                        onChange={(nextValues) =>setAttributes({borderRadiusCont: nextValues})}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <BoxControl
                        label={__('Border Radius Bottom Element','cocopopup')}
                        values={borderRadiusContBottom}
                        onChange={(nextValues) =>setAttributes({borderRadiusContBottom: nextValues})}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Separator Border','cocopopup')}
                        value={borderSepCont}
                        onChange={(value) => setAttributes({ borderSepCont: value })}
                        min={0}
                        max={5}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Font Weight Text','cocopopup')}</p>
                    <CustomSelect options={optionsWeightCont} selected={weightCont} handleChange={handleChangeWeightCont} isLoading={isLoadingWeightCont} />
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Background Color Top Element','cocopopup')}</p>
                    <Button
                        onClick={toggleColor}
                        style={{ backgroundColor: colorContdownTop }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpen && (
                    <ColorPalette
                        label={__('Color','cocopopup')}
                        value={colorContdownTop}
                        onChange={(color) =>setAttributes({colorContdownTop: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Background Color Bottom Element','cocopopup')}</p>
                    <Button
                        onClick={toggleColorB}
                        style={{ backgroundColor: colorContdownBottom }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenB && (
                    <ColorPalette
                        label={__('Color','cocopopup')}
                        value={colorContdownBottom}
                        onChange={(color) =>setAttributes({colorContdownBottom: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Separator Border','cocopopup')}</p>
                    <Button
                        onClick={toggleColorF}
                        style={{ backgroundColor: colorContdownSeparator }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenF && (
                    <ColorPalette
                        label={__('Color','cocopopup')}
                        value={colorContdownSeparator}
                        onChange={(color) =>setAttributes({colorContdownSeparator: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Count Top','cocopopup')}</p>
                    <Button
                        onClick={toggleColorC}
                        style={{ backgroundColor: colorContdownCount }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenC && (
                    <ColorPalette
                        label={__('Color Count Top','cocopopup')}
                        value={colorContdownCount}
                        onChange={(color) =>setAttributes({colorContdownCount: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Count Bottom','cocopopup')}</p>
                    <Button
                        onClick={toggleColorD}
                        style={{ backgroundColor: colorContdownCountBottom }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenD && (
                    <ColorPalette
                        label={__('Color','cocopopup')}
                        value={colorContdownCountBottom}
                        onChange={(color) =>setAttributes({colorContdownCountBottom: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <div className='cocopopup-panel-color'>
                    <p>{__('Color Text','cocopopup')}</p>
                    <Button
                        onClick={toggleColorE}
                        style={{ backgroundColor: colorContdownText }}
                        className="color-palette-toggle-button"
                    >
                    </Button>
                    </div>
                    {colorOpenE && (
                    <ColorPalette
                        label={__('Color Text','cocopopup')}
                        value={colorContdownText}
                        onChange={(color) =>setAttributes({colorContdownText: color})}
                        enableAlpha
                    />
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Box Shadow','cocopopup')}</p>
                    <BoxShadowControlSimple
                        boxShadow={boxShadowCont}
                        setBoxShadow={(val) => setAttributes({ boxShadowCont: val })}
                    />
                    </>
                    )}
                </PanelBody>
                )}
                {selectedClosed === 'close-age' && (
                <PanelBody
                    title={__('Age Restriction', 'cocopopup')}
                    className={'cocopopup-extra-tab-2 ' + tab.name}
                    initialOpen={false}
                    
                >
                    <h2>{__('FORM','cocopopup')}</h2>
                    <RangeControl
                        label={__('Gap','cocopopup')}
                        value={gapFormAge}
                        onChange={(value) => setAttributes({ gapFormAge: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Height','cocopopup')}
                        value={heightFormAge}
                        onChange={(value) => setAttributes({ heightFormAge: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Size','cocopopup')}
                        value={sizeFormAge}
                        onChange={(value) => setAttributes({ sizeFormAge: value })}
                        min={10}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>  
                    <p>{__('Border','cocopopup')}</p>
                    <BorderOptionsPanelSimple
                        width={borderWidthFormAge}
                        setWidth={(val) => setAttributes({ borderWidthFormAge: val })}
                        style={borderStyleFormAge}
                        setStyle={(val) => setAttributes({ borderStyleFormAge: val })}
                        radius={borderRadiusFormAge}
                        setRadius={(val) => setAttributes({ borderRadiusFormAge: val })}
                    />
                    <Notice 
                        className='cocopopup-notice-info'
                        status="info"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('Not all browsers support the selector border radius!','cocopopup')}
                    </Notice>
                    {borderStyleFormAge !== 'none' && borderStyleFormAge !== 'hidden' && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Border Color','cocopopup')}</p>
                    <ColorOptionsPanel
                        colorNormal={borderColorFormAge}
                        setColorNormal={(color) => setAttributes({ borderColorFormAge: color })}
                        colorHover={borderColorHoverFormAge}
                        setColorHover={(color) => setAttributes({ borderColorHoverFormAge: color })}
                        transitionColor={transitionBorderColorFormAge}
                        setTransitionColor={(val) => setAttributes({ transitionBorderColorFormAge: val })}
                    />
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <RangeControl
                        label={__('Margin Bottom','cocopopup')}
                        value={marginFormAge}
                        onChange={(value) => setAttributes({ marginFormAge: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Background Color','cocopopup')}</p>
                    <BackgroundColorOptionsPanelOne
                        setBackgroundColor={(color) => setAttributes({ backgroundColorFormAge: color })}
                        setBackgroundGradient={(color) => setAttributes({ backgroundGradientFormAge: color })}
                        backgroundColor={backgroundColorFormAge} 
                        backgroundGradient={backgroundGradientFormAge} 
                        setBackgroundColorHover={(color) => setAttributes({ backgroundColorHoverFormAge: color })}
                        setBackgroundGradientHover={(color) => setAttributes({ backgroundGradientHoverFormAge: color })} 
                        backgroundColorHover={backgroundColorHoverFormAge} 
                        backgroundGradientHover={backgroundGradientHoverFormAge} 
                        transition={transitionBackgroundColorFormAge}
                        setTransition={(val) => setAttributes({ transitionBackgroundColorFormAge: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Color','cocopopup')}</p>
                    <ColorOptionsPanel
                        colorNormal={colorFormAge}
                        setColorNormal={(color) => setAttributes({ colorFormAge: color })}
                        colorHover={colorHoverFormAge}
                        setColorHover={(color) => setAttributes({ colorHoverFormAge: color })}
                        transitionColor={transitionColorFormAge}
                        setTransitionColor={(val) => setAttributes({ transitionColorFormAge: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <h2>{__('BUTTONS','cocopopup')}</h2>
                    <RangeControl
                        label={__('Gap','cocopopup')}
                        value={gapButtonAge}
                        onChange={(value) => setAttributes({ gapButtonAge: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>   
                    <RangeControl
                        label={__('Padding Top','cocopopup')}
                        value={paddingButtonAgeTop}
                        onChange={(value) => setAttributes({ paddingButtonAgeTop: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <RangeControl
                        label={__('Padding Bottom','cocopopup')}
                        value={paddingButtonAgeBottom}
                        onChange={(value) => setAttributes({ paddingButtonAgeBottom: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <RangeControl
                        label={__('Padding Left','cocopopup')}
                        value={paddingButtonAgeLeft}
                        onChange={(value) => setAttributes({ paddingButtonAgeLeft: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <RangeControl
                        label={__('Padding Right','cocopopup')}
                        value={paddingButtonAgeRight}
                        onChange={(value) => setAttributes({ paddingButtonAgeRight: value })}
                        min={0}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>  
                    <p>{__('Border','cocopopup')}</p>
                    <BorderOptionsPanelSimple
                        width={borderWidthButtonAge}
                        setWidth={(val) => setAttributes({ borderWidthButtonAge: val })}
                        style={borderStyleButtonAge}
                        setStyle={(val) => setAttributes({ borderStyleButtonAge: val })}
                        radius={borderRadiusButtonAge}
                        setRadius={(val) => setAttributes({ borderRadiusButtonAge: val })}
                    />
                    {borderStyleButtonAge !== 'none' && borderStyleButtonAge !== 'hidden' && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Border Color','cocopopup')}</p>
                    <ColorOptionsPanel
                        colorNormal={borderColorButtonAge}
                        setColorNormal={(color) => setAttributes({ borderColorButtonAge: color })}
                        colorHover={borderColorHoverButtonAge}
                        setColorHover={(color) => setAttributes({ borderColorHoverButtonAge: color })}
                        transitionColor={transitionBorderColorButtonAge}
                        setTransitionColor={(val) => setAttributes({ transitionBorderColorButtonAge: val })}
                    />
                    </>
                    )}
                    <RangeControl
                        label={__('Size','cocopopup')}
                        value={sizeButtonAge}
                        onChange={(value) => setAttributes({ sizeButtonAge: value })}
                        min={10}
                        max={100}
                        step={1}
                    /> 
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Background Color','cocopopup')}</p>
                    <BackgroundColorOptionsPanelOne
                        setBackgroundColor={(color) => setAttributes({ backgroundColorButtonAge: color })}
                        setBackgroundGradient={(color) => setAttributes({ backgroundGradientButtonAge: color })}
                        backgroundColor={backgroundColorButtonAge} 
                        backgroundGradient={backgroundGradientButtonAge} 
                        setBackgroundColorHover={(color) => setAttributes({ backgroundColorHoverButtonAge: color })}
                        setBackgroundGradientHover={(color) => setAttributes({ backgroundGradientHoverButtonAge: color })}
                        backgroundColorHover={backgroundColorHoverButtonAge} 
                        backgroundGradientHover={backgroundGradientHoverButtonAge} 
                        transition={transitionBackgroundColorButtonAge}
                        setTransition={(val) => setAttributes({ transitionBackgroundColorButtonAge: val })}
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Color','cocopopup')}</p>
                    <ColorOptionsPanel
                        colorNormal={colorButtonAge}
                        setColorNormal={(color) => setAttributes({ colorButtonAge: color })}
                        colorHover={colorHoverButtonAge}
                        setColorHover={(color) => setAttributes({ colorHoverButtonAge: color })}
                        transitionColor={transitionColorButtonAge}
                        setTransitionColor={(val) => setAttributes({ transitionColorButtonAge: val })}
                    />
                </PanelBody>
                )}
                <PanelBody
                    title={__('Z Index', 'cocopopup')}
                    className={'cocopopup-extra-tab-3 ' + tab.name}
                    initialOpen={false}
                   
                >
                    <NumberControl
                        label={ __( 'Popup', 'cocopopup' ) }
                        value={ zIndexPopup }
                        onChange={ onChangeZIndexPopup  }
                        min={ 0 }
                        max={ 999 }
                        step={ 1 }
                    />
                    <div className='cocopopup-sep-editor'></div>
                    <NumberControl
                        label={ __( 'Button', 'cocopopup' ) }
                        value={ zIndexButton }
                        onChange={ onChangeZIndexButton  }
                        min={ 0 }
                        max={ 999 }
                        step={ 1 }
                    />
                    {enableButton2 === true && (
                    <>
                    <div className='cocopopup-sep-editor'></div>
                    <NumberControl
                        label={ __( 'Button 2', 'cocopopup' ) }
                        value={ zIndexButton2 }
                        onChange={ onChangeZIndexButton2  }
                        min={ 0 }
                        max={ 999 }
                        step={ 1 }
                    />
                    </>
                    )}
                </PanelBody>
                <PanelBody
                    title={__('Body Behavior', 'cocopopup')}
                    className={'cocopopup-extra-tab-3 ' + tab.name}
                    initialOpen={false}
                   
                >
                    <ToggleControl
                        label={__('Overflow','cocopopup')}
                        checked={overflowBody}
                        onChange={(value) => setAttributes({overflowBody: value })}
                        help={__('Adjust the body overflow when the Popup opens!','cocopopup')}
                    />  
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Create an overlay filter','cocopopup')}
                        checked={filterBody}
                        onChange={(value) => setAttributes({filterBody: value })}
                        disabled={!pluginActiveOverlay && !pluginActiveCountdown && !pluginActiveAge}
                    />  
                    {(!pluginActiveOverlay && !pluginActiveCountdown && !pluginActiveAge) && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {filterBody === true && ( 
                    <>
                    <div className='cocopopup-panel-color'>
                        <p>{__('Background Color','cocopopup')}</p>
                        <Button
                            onClick={toggleColor}
                            style={{ backgroundColor: colorContdown }}
                            className="color-palette-toggle-button"
                        >
                        </Button>
                    </div>
                    {colorOpen && (
                    <ColorPalette
                        label={__('Background Color','cocopopup')}
                        value={colorContdown}
                        onChange={(color) =>setAttributes({colorContdown: color})}
                        enableAlpha
                    />
                    )}
                    <ToggleControl
                        label={__('Blur filter','cocopopup')}
                        checked={enableBlur}
                        onChange={(value) => setAttributes({enableBlur: value })}
                    />  
                    {enableBlur === true && (
                    <RangeControl
                        label={__('Filter intensity', 'cocopopup')}
                        value={blurIntens}
                        onChange={(value) => setAttributes({blurIntens: value })}
                        min={1}
                        max={20}
                        step={1}
                    />  
                    )}
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <ToggleControl
                        label={__('Background image','cocopopup')}
                        checked={filterBodyImage}
                        onChange={(value) => setAttributes({filterBodyImage: value })}
                        help={__('Set a background image','cocopopup')}
                        disabled={!pluginActiveOverlay && !pluginActiveCountdown && !pluginActiveAge}
                    />  
                    {(!pluginActiveOverlay && !pluginActiveCountdown && !pluginActiveAge) && (
                        <>
                        <a className='cocopopup-pro-version-a' href={linkProExtensions} target="_blank">
                            <div className='cocopopup-pupup-pro'>
                                <Icon icon={lock} size={24}/>
                                <p>{__('Only pro extension!','cocopopup')}</p>
                            </div>
                        </a>
                        </>
                    )}
                    {filterBodyImage === true && (
                    <>
                    <p>{__('Image','cocopopup')}</p>
                    <div className="content-select-image">
                        {!imageUrl && (
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={["image"]}
                                value={imageUrl}
                                render={({ open }) => (
                                    <Button className='button-add-image' onClick={open}>{__('Add Image','cocopopup')}</Button>
                                )}
                            />
                        )}
                        {imageUrl && <img src={imageUrl} className='img-upload' />}
                        {imageUrl && (
                            <div className='image-remove'>
                                <Button className='button-add-image' onClick={onRemoveImage}><Icon icon={trash} size={24}/></Button>
                                <MediaUpload
                                    onSelect={onSelectImage}
                                    type="image"
                                    value={imageUrl}
                                    render={({ open }) => (
                                        <Button  className='button-add-image' onClick={open}>{__('Change Image','cocopopup')}</Button>
                                    )}
                                />
                            </div>
                        )}
                    </div>
                    </>
                    )}
                </PanelBody>
                <PanelBody
                    title={__('Animation', 'cocopopup')}
                    className={'cocopopup-extra-tab-3 ' + tab.name}
                    initialOpen={false}
                   
                >
                    <p>{__('Popup Entrance Animation','cocopopup')}</p>
                    <CustomSelect options={optionsAnimationPopupIn} selected={selectedAnimationPopupIn} handleChange={handleChangeAnimationPopupIn} isLoading={isLoadingAnimationPopupIn} />
                    { selectedAnimationPopupIn !== 'none' && (
                    <>
                    <div id="pop-editor" className={'cocopopup-editor-content ' + selectedAnimationPopupIn} style={stylesPopupEditor}>
                        <p>{__('Animation In','cocopopup')}</p>
                    </div>
                    <RangeControl
                        label={__('Duration (s)', 'cocopopup')}
                        value={durationAnimation}
                        onChange={(value) => setAttributes({durationAnimation: value })}
                        min={0}
                        max={20}
                        step={.1}
                    />  
                    <Button isSecondary onClick={replayAnimation}>
                       {__('Replay Animation','cocopopup')}
                    </Button>  
                    </>
                    )}
                    <div className='cocopopup-sep-editor'></div>
                    <p>{__('Popup Close Animation','cocopopup')}</p>
                    <Notice 
                        className='cocopopup-notice-info'
                        status="info"
                        isDismissible={false}
                        onDismiss={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        >
                        {__('You can set a popup closing time for a smoother effect!','cocopopup')}
                    </Notice>
                    <RangeControl
                        label={__('Duration (ms)', 'cocopopup')}
                        value={durationAnimationClose}
                        onChange={(value) => setAttributes({durationAnimationClose: value })}
                        min={0}
                        max={3000}
                        step={100}
                    />  
                </PanelBody>

                </>
                )
                }
                </TabPanel> 
            </InspectorControls>

            <div {...blockProps} 
                id={popupId}
                data-logic-7={exitVisitNumber}
                data-logic-8={exitUrl}
                data-logic-9={exitExternal}
                data-logic-10={exitLogUser}
                data-delay={delay} 
                data-time-exit={timeExit}
                data-select-option-page={selectOptionPage} 
                data-time={scrollTimeout}
                text-button={textButton}
                data-popup-name={popupName}
                data-popup-id={popupId}
                data-direction-scroll={scrollDirection}
                data-time-direction={timeScrollDirection}
                data-close-count={popupClosureCount}
                data-desktop={exitDesktop}
                data-tablet={exitTablet}
                data-mobile={exitMobile}
                data-px-desktop={pxDesktop}
                data-px-tablet={pxTablet}
                data-px-mobile={pxMobile}
                data-class={popupClassName}
                data-number-visit={numberVisit}
                data-url-extern={popupUrlExt}
                data-time-url={timeUrl}
                data-time-external-link={timeExternaLink}
                data-time-logged={timeLogged}
                data-disable-closing-popup={disablePopupClosing}
                data-language-extit={exitLanguage}
                data-language-select={selectedLanguages}
                data-schedule={exitSchedule}
                data-date-popup={date}
                data-date-end-popup={endDate}
                data-operation-system={exitOperationSystem}
                data-windows={exitWindows}
                data-mac={exitMac}
                data-linus={exitLinus}
                data-browser={exitBrowser}
                data-browser-select={selectBrowser}
                data-time-popup-closed={timeClosedPopup}
                data-woo-cart-empty={exitWooCartEmpty}
                data-woo-cart-count={exitWooCartCount}
                data-woo-number-product-cart={numberProductCart}
                data-woo-cart-id={exitWooCartId}
                data-product-id={productId}
                data-woo-cart-amount={exitWooCartAmount}
                data-woo-amount-product-cart={amountProductCart}
                data-woo-select-amount={selectedAmountCart}
                data-condition-and-or={conditionAndOr}
                data-class-element={classNameElement}
                data-popup-reopen={reopenPopup}
                data-class-element-hover={classNameElementHover}
                data-exit-all={exitAll}
                data-file-audio={fileAudio}
                data-events-select={ selectedEvents}
                data-select-closed={selectedClosed}
                data-open-sound={openSound}
                data-time-opacity-exit={timeOpacityExit}
                data-time-opacity={ timeOpacity}
                data-color-contdown={colorContdown}
                data-second-contdown={secondContdown}
                data-text-before-contdown={textContdownBefore}
                data-text-after-contdown={textContdownAfter}
                data-overflow-body={overflowBody}
                data-filter-body={filterBody}
                data-size-contdown={sizeContdown}
                data-vertical-contdown={verticalContdown}
                data-horizontal-contdown={horizontalContdown}
                data-color-text-contdown={colorContdownText}
                data-zindex-button={zIndexButton}
                data-animation-popup-in={selectedAnimationPopupIn}
                data-class-close-popup={ classClosePopup}
                data-percentage-page={percentagePage}
                data-enable-button-2={enableButton2}
                data-text-button-2={textButton2}
                data-select-contdown={selectedContdown}
                data-date-contdown={dateContdown}
                data-close-contdown-automatic={contdownSecondAutomaticClose}
                data-enable-flip-contdown={enableFlipCont}
                data-font-weight-cont={weightCont}
                data-text-days-round={ contDays }
                data-text-hours-round={ contHours }
                data-text-days-minutes={ contMinutes }
                data-text-days-seconds={ contSeconds }
                data-body-image={filterBodyImage}
                data-url-image={imageUrl}
                data-text-day-age={textDayAge}
                data-text-month-age={textMonthAge}
                data-text-year-age={textYearAge}
                data-language-month-age={selectedAgeMonth}
                data-error-form-age={errorFormAge}
                data-error-age-age={errorAgeAge}
                data-enable-welcome-age={enableWelcomeAge}
                data-welcome-age={welcomeAge}
                data-link-button-one-age={linkButtonOneAge}
                data-link-button-one-age-window={linkButtonOneAgeWindow}
                data-text-button-one-age={buttonOneAge}
                data-text-button-two-age={buttonTwoAge}
                data-enable-button-one={enableButtonOne}
                data-delay-close-age={timecolsePopupAge}
                data-gap-form-age={gapFormAge}
                data-height-form-age={heightFormAge}
                data-size-form-age={sizeFormAge}
                data-border-width-form-age={borderWidthFormAge}
                data-border-style-form-age={borderStyleFormAge}
                data-border-radius-form-age={borderRadiusFormAge}
                data-border-color-form-age={borderColorFormAge}
                data-border-color-hover-form-age={borderColorHoverFormAge}
                data-trasition-border-color-form-age={transitionBorderColorFormAge}
                data-margin-form-age={marginFormAge}
                data-background-color-form-age={backgroundColorFormAge}
                data-background-color-hover-form-age={backgroundColorHoverFormAge}
                data-background-gradient-form-age={backgroundGradientFormAge}
                data-background-gradient-hover-form-age={backgroundGradientHoverFormAge}
                data-transition-background-color-form-age={transitionBackgroundColorFormAge}
                data-color-form-age={colorFormAge}
                data-color-hover-form-age={colorHoverFormAge}
                data-transition-color-form-age={transitionColorFormAge}
                data-gap-button-age={gapButtonAge}
                data-padding-button-age-top={paddingButtonAgeTop}
                data-padding-button-age-bottom={paddingButtonAgeBottom}
                data-padding-button-age-left={paddingButtonAgeLeft}
                data-padding-button-age-right={paddingButtonAgeRight}
                data-border-width-button-age={borderWidthButtonAge}
                data-border-style-button-age={borderStyleButtonAge}
                data-border-radius-button-age={borderRadiusButtonAge}
                data-border-color-button-age={borderColorButtonAge}
                data-border-color-hover-button-age={borderColorHoverButtonAge}
                data-trasition-border-color-button-age={transitionBorderColorButtonAge}
                data-size-button-age={sizeButtonAge}
                data-background-color-button-age={backgroundColorButtonAge}
                data-background-color-hover-button-age={backgroundColorHoverButtonAge}
                data-background-gradient-button-age={backgroundGradientButtonAge}
                data-background-gradient-hover-button-age={backgroundGradientHoverButtonAge}
                data-transition-background-color-button-age={transitionBackgroundColorButtonAge}
                data-color-button-age={colorButtonAge}
                data-color-hover-button-age={colorHoverButtonAge}
                data-transition-color-button-age={transitionColorButtonAge}
                data-background-seconds={backgroundColorContdownSeconds}
                data-radius-seconds ={borderRadiusContdownSeconds}
                data-padding-seconds={paddingContdownSeconds}
                data-padding-right-second={paddingContdownSecondsRight}
                data-link-button-no={linkRedirectButtonNo}
                data-link-button-no-window={linkRedirectButtonNoWindow}
                data-link-button-yes={linkRedirectButtonYes}
                data-link-button-yes-window={linkRedirectButtonYesWindow}
                data-blur={enableBlur}
                data-blur-intens={blurIntens}
                data-close-button={enabelButtonClass}
                data-animation-close={durationAnimationClose}
            >
                <InnerBlocks
                    template={TEMPLATE}
                />
                {(selectedClosed === 'close-time' || selectedClosed === 'close-instant' || enabelButtonClass === true) && ( 
                <button className="cocopopup-button-close-popup">{textButton}</button>
                )}
                {(enableButton2 === true) && ( 
                <button className="cocopopup-button-close-2-popup">{textButton2}</button>
                )}
                {selectedClosed === 'close-contdown' && (
                <>
                {selectedContdown === 'date-round' && (
                    <>
                    <div id="countdownRound" style={stylesContdownRound}>
                        <div className="circle" style={{stroke: '#ff4c4c'}}>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle id="dd" cx="70" cy="70" r="70" style={{ strokeDashoffset: ddStrokeOffset,stroke:colorContdownCircleDays }} />
                            </svg>
                            <div id="days" style={stylesContNRound}>{ days }<br/>
                                <RichText
                                    tagName='span'
                                    style={stylesSpanContRound}
                                    onChange={ onChangeContDays }
                                    value={ contDays }
                                    placeholder={__('Days','cocopopup')}
                                />
                            </div>
                        </div>
                        <div className="circle" style={{stroke: '#ffd700'}}>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle id="hh" cx="70" cy="70" r="70" style={{ strokeDashoffset: hhStrokeOffset,stroke:colorContdownCircleHours }} />
                            </svg>
                            <div id="hours" style={stylesContNRound}>{ hours }<br/>
                                <RichText
                                    tagName='span'
                                    style={stylesSpanContRound}
                                    onChange={ onChangeContHours }
                                    value={ contHours }
                                    placeholder={__('Hours','cocopopup')}
                                />
                            </div>
                        </div>
                        <div className="circle" style={{stroke: '#ffc0cb'}}>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle id="mm" cx="70" cy="70" r="70" style={{ strokeDashoffset: mmStrokeOffset,stroke:colorContdownCircleMinutes }} />
                            </svg>
                            <div id="minutes" style={stylesContNRound}>{ minutes }<br/>
                                <RichText
                                    tagName='span'
                                    style={stylesSpanContRound}
                                    onChange={ onChangeContMinutes }
                                    value={ contMinutes }
                                    placeholder={__('Minutes','cocopopup')}
                                />
                            </div>
                        </div>
                        <div className="circle" style={{stroke:'#b0e0e6'}}>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle id="ss" cx="70" cy="70" r="70" style={{strokeDashoffset: ssStrokeOffset, stroke:colorContdownCircleSeconds}} />
                            </svg>
                            <div id="seconds" style={stylesContNRound}>{ seconds }<br/>
                                <RichText
                                    tagName='span'
                                    style={stylesSpanContRound}
                                    onChange={ onChangeContSeconds }
                                    value={ contSeconds }
                                    placeholder={__('Seconds','cocopopup')}
                                />
                            </div>
                        </div>
                    </div>
                    {contdownSecondAutomaticClose === true && (
                        <button className="cocopopup-button-close-popup">{textButton}</button>
                    )}
                    </>
                )}
                {selectedContdown === 'date' && (
                    <main>
                        <div id="countdown">
                            <div className="countdown__container" style={{gap:gapContdown+'px'}}>
                            <div className="countdown__el">
                                <div className={`countdown__time ${enableFlipCont && countdown.seconds !== '00' ? 'flip' : ''}`} id="days" style={stylesTimeCont}>
                                    <span className="count curr top" style={stylesCont}>{countdown.days}</span>
                                    <span className="count next top" style={stylesCont}>{countdown.days}</span>
                                    <span className="count curr bottom" style={stylesContBottom}>{countdown.days}</span>
                                    <span className="count next bottom" style={stylesContBottom}>{countdown.days}</span>
                                </div>
                                <RichText
                                    tagName='span'
                                    className='countdown__label'
                                    style={stylesSpanCont}
                                    onChange={ onChangeContDays }
                                    value={ contDays }
                                    placeholder={__('Days','cocopopup')}
                                />
                            </div>
                            <div className="countdown__el">
                                <div className={`countdown__time ${enableFlipCont && countdown.seconds !== '00' ? 'flip' : ''}`} id="hours" style={stylesTimeCont}>
                                    <span className="count curr top" style={stylesCont}>{countdown.hours}</span>
                                    <span className="count next top" style={stylesCont}>{countdown.hours}</span>
                                    <span className="count curr bottom" style={stylesContBottom}>{countdown.hours}</span>
                                    <span className="count next bottom" style={stylesContBottom}>{countdown.hours}</span>
                                </div>
                                <RichText
                                    tagName='span'
                                    className='countdown__label'
                                    style={stylesSpanCont}
                                    onChange={ onChangeContHours }
                                    value={ contHours }
                                    placeholder={__('Hours','cocopopup')}
                                />
                            </div>
                            <div className="countdown__el">
                                <div  className={`countdown__time ${enableFlipCont && countdown.seconds !== '00' ? 'flip' : ''}`}  id="mins" style={stylesTimeCont}>
                                    <span className="count curr top" style={stylesCont}>{countdown.minutes}</span>
                                    <span className="count next top" style={stylesCont}>{countdown.minutes}</span>
                                    <span className="count curr bottom" style={stylesContBottom}>{countdown.minutes}</span>
                                    <span className="count next bottom" style={stylesContBottom}>{countdown.minutes}</span>
                                </div>
                                <RichText
                                    tagName='span'
                                    className='countdown__label'
                                    style={stylesSpanCont}
                                    onChange={ onChangeContMinutes }
                                    value={ contMinutes }
                                    placeholder={__('Minutes','cocopopup')}
                                />
                            </div>
                            <div className="countdown__el">
                                <div className={`countdown__time ${flipTrigger && enableFlipCont ? 'flip' : ''}`} id="seconds" style={stylesTimeCont}>
                                    <span className="count curr top" style={stylesCont}>{countdown.seconds}</span>
                                    <span className="count next top" style={stylesCont}>{countdown.seconds}</span>
                                    <span className="count curr bottom" style={stylesContBottom}>{countdown.seconds}</span>
                                    <span className="count next bottom" style={stylesContBottom}>{countdown.seconds}</span>
                                </div>
                                <RichText
                                    tagName='span'
                                    className='countdown__label'
                                    style={stylesSpanCont}
                                    onChange={ onChangeContSeconds }
                                    value={ contSeconds }
                                    placeholder={__('Seconds','cocopopup')}
                                />
                            </div>
                            </div>
                        </div>
                        {contdownSecondAutomaticClose === true && (
                            <button className="cocopopup-button-close-popup">{textButton}</button>
                        )}
                    </main>
                )}
                {selectedContdown === 'seconds' && (
                    <>
                    <div className="cocopopup-text-contdown" style={{top: verticalContdown +'px',right: horizontalContdown +'px', fontSize:sizeContdown +'px', color: colorContdownText,fontWeight:weightCont }}>
                        <p>{textContdownBefore}<span style={{ backgroundColor: backgroundColorContdownSeconds,borderRadius:borderRadiusContdownSeconds+'px',paddingTop:paddingContdownSeconds+'px',paddingRight:paddingContdownSecondsRight+'px',paddingBottom:paddingContdownSeconds+'px',paddingLeft:paddingContdownSecondsRight+'px' }}>{secondContdown}</span>{textContdownAfter}</p>
                    </div>
                    {contdownSecondAutomaticClose === false && (
                    <button className="cocopopup-button-close-popup">{textButton}</button>
                    )}
                    </>
                )}
                </>
                )}
                {selectedClosed === 'close-age' && (
                <div className="popup-age-container" style={stylesPopupAge}>
                    <div className="popup-age-select">
                        <select className="date-input day-input" id="day">
                            <option value="">{textDayAge}</option>
                        </select>
                        <select className="date-input month-input" id="month">
                            <option value="">{textMonthAge}</option>
                        </select>
                        <select className="date-input year-input" id="year">
                            <option value="">{textYearAge}</option>
                        </select>
                    </div>
                    <div className="popup-age-button">
                        {enableButtonOne === true && (
                            <button>{buttonOneAge}</button>
                        )}
                        <button id="confirmAgeButton">{buttonTwoAge}</button>
                    </div>
                </div>
                )}
            </div>
        </>
    );
}