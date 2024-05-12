import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        delay, 
        selectOptionPage,
        scrollTimeout,
        textButton,
        textButton2,
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
        classClosePopup,
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
        transitionColorTextButton,
        transitionColorTextButton2,
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

    // Definisci lo stile per il box-shadow normale
    const boxShadowStyle = {
        boxShadow: `${boxShadow.type === 'inset' ? 'inset' : ''} ${boxShadow.hOffset}px ${boxShadow.vOffset}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`,
    };
    // Definisci lo stile per il box-shadow normale del Button
    const boxShadowStyleButton = {
        boxShadow: `${boxShadowButton.type === 'inset' ? 'inset' : ''} ${boxShadowButton.hOffset}px ${boxShadowButton.vOffset}px ${boxShadowButton.blur}px ${boxShadowButton.spread}px ${boxShadowButton.color}`,
    };
    // Definisci lo stile per il box-shadow normale del Button 2
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
        ...(enableCustomWidthPopup && { width: widthPopup + pxWidthPopup,'--width-tablet':widthPopupTablet + pxWidthPopup,'--width-popup-mobile':widthPopupMobile + pxWidthPopup,maxWidth:'none!important' }),
        position: 'fixed',
        display:' none', 
        overflowY: 'auto',
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
        '--background-color-hover-form-age':backgroundColorHoverFormAge || backgroundGradientHoverFormAge,
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
        '--background-color-hover-button-age':backgroundColorHoverButtonAge || backgroundGradientHoverButtonAge,
        '--color-button-age':colorButtonAge,
        '--color-hover-button-age':colorHoverButtonAge,
    }
    // Class Popup
    const blockProps = useBlockProps.save({
        className: 'cocopopup ' + positionPopup + ' bpp' + positionPopupButton + 'bpd bp2p' + positionPopupButton2 + 'bp2d',
        style:stylesPopup
    });

    return (
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
            <InnerBlocks.Content />
            {selectedClosed === 'close-contdown' && (
            <>
            {selectedContdown === 'date-round' && (
                <div id="countdownRound"  style={stylesContdownRound}>
                    <div class="circle" style=" stroke: #ff4c4c;">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70" id="dd" style={{stroke:colorContdownCircleDays}}></circle>
                        </svg>
                        <div id="days" style={stylesContNRound}>000<br/>
                            <RichText.Content
                                tagName='span'
                                style={stylesSpanContRound}
                                value={ contDays }
                            />
                        </div>
                    </div>
                    <div class="circle" style="--clr: #ffd700;">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70" id="hh" style={{stroke:colorContdownCircleHours}}></circle>
                        </svg>
                        <div id="hours" style={stylesContNRound}>00<br/>
                            <RichText.Content
                                tagName='span'
                                style={stylesSpanContRound}
                                value={ contHours }
                            />
                        </div>
                    </div>
                    <div class="circle" style="--clr: #ffc0cb;">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70" id="mm" style={{stroke:colorContdownCircleMinutes}}></circle>
                        </svg>
                        <div id="minutes" style={stylesContNRound}>00<br/>
                            <RichText.Content
                                tagName='span'
                                style={stylesSpanContRound}
                                value={ contMinutes }
                            />
                        </div>
                    </div>
                    <div class="circle" style=" stroke: #b0e0e6;">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70" id="ss" style={{stroke:colorContdownCircleSeconds}}></circle>
                        </svg>
                        <div id="seconds" style={stylesContNRound}>00<br/>
                            <RichText.Content
                                tagName='span'
                                style={stylesSpanContRound}
                                value={ contSeconds }
                            />
                        </div>
                    </div>
                </div>
            )}
            {selectedContdown === 'date' && (
            <main>
                <div id="countdown">
                    <div class="countdown__container" style={{gap:gapContdown+'px'}}>
                    <div class="countdown__el">
                        <div class="countdown__time flip" style={stylesTimeCont} id="days">
                            <span class="count curr top" style={stylesCont}>00</span>
                            <span class="count next top" style={stylesCont}>00</span>
                            <span class="count curr bottom" style={stylesContBottom}>00</span>
                            <span class="count next bottom" style={stylesContBottom}>00</span>
                        </div>
                        <RichText.Content
                            tagName="span"
                            className='countdown__label'
                            style={stylesSpanCont}
                            value={ contDays }
                        />
                    </div>
                    <div class="countdown__el">
                        <div class="countdown__time flip" style={stylesTimeCont} id="hours">
                            <span class="count curr top" style={stylesCont}>00</span>
                            <span class="count next top" style={stylesCont}>00</span>
                            <span class="count curr bottom" style={stylesContBottom}>00</span>
                            <span class="count next bottom" style={stylesContBottom}>00</span>
                        </div>
                        <RichText.Content
                            tagName="span"
                            className='countdown__label'
                            style={stylesSpanCont}
                            value={ contHours }
                        />
                    </div>
                    <div class="countdown__el">
                        <div class="countdown__time flip" style={stylesTimeCont} id="mins">
                            <span class="count curr top" style={stylesCont}>00</span>
                            <span class="count next top" style={stylesCont}>00</span>
                            <span class="count curr bottom" style={stylesContBottom}>00</span>
                            <span class="count next bottom" style={stylesContBottom}>00</span>
                        </div>
                        <RichText.Content
                            tagName="span"
                            className='countdown__label'
                            style={stylesSpanCont}
                            value={ contMinutes }
                        />
                    </div>
                    <div class="countdown__el">
                        <div class="countdown__time flip" style={stylesTimeCont} id="seconds">
                            <span class="count curr top" style={stylesCont}>00</span>
                            <span class="count next top" style={stylesCont}>00</span>
                            <span class="count curr bottom" style={stylesContBottom}>00</span>
                            <span class="count next bottom" style={stylesContBottom}>00</span>
                        </div>
                        <RichText.Content
                            tagName="span"
                            className='countdown__label'
                            style={stylesSpanCont}
                            value={ contSeconds }
                        />
                    </div>
                    </div>
                </div>
            </main>
            )}
            </>
            )}
    </div>
    );
}