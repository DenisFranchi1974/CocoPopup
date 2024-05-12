import { RangeControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React, { useState } from 'react';
const { dispatch } = wp.data;
import './editor.scss';

const WidthOptionsPanel = ({ 
    widthElement, setWidthElement, 
    widthTabletElement, setWidthTabletElement,
    widthMobileElement, setWidthMobileElement,
    pxElement, setPxElement
}) => {
    
    // Responsive
    const [deviceView, setDeviceView] = useState('Desktop');
    const handleDeviceViewChange = (view) => {
        setDeviceView(view);
        dispatch('core/edit-post').__experimentalSetPreviewDeviceType(view);
    };

    return (
            <>
            <div className='modal-size'>
                <div className='modal-font-size'>
                {deviceView === 'Desktop' && (
                    <RangeControl
                        label={__('Width Desktop','cocopopup')}
                        max={pxElement === 'px' ? 2000 : 100}
                        min={0}
                        step={pxElement === 'px' ? 1 : 0.1}
                        value={widthElement}
                        onChange={setWidthElement}
                    />
                )}
                {deviceView === 'Tablet' && (
                    <RangeControl
                        label={__('Width Tablet','cocopopup')}
                        max={pxElement === 'px' ? 2000 : 100}
                        min={0}
                        step={pxElement === 'px' ? 1 : 0.1}
                        value={widthTabletElement}
                        onChange={setWidthTabletElement}
                    />
                )}
                {deviceView === 'Mobile' && (
                    <RangeControl
                        label={__('Width Mobile','cocopopup')}
                        max={pxElement === 'px' ? 2000 : 100}
                        min={0}
                        step={pxElement === 'px' ? 1 : 0.1}
                        value={widthMobileElement}
                        onChange={setWidthMobileElement}
                    />
                )}
                <div className='content-button-responsive'>
                    <Button
                        icon="desktop"
                        label={__('Desktop','cocopopup')}
                        isPrimary={deviceView === 'Desktop'}
                        onClick={() => handleDeviceViewChange('Desktop')}
                    />
                    <Button
                        icon="tablet"
                        label={__('Tablet','cocopopup')}
                        isPrimary={deviceView === 'Tablet'}
                        onClick={() => handleDeviceViewChange('Tablet')}
                    />
                    <Button
                        icon="smartphone"
                        label={__('Mobile','cocopopup')}
                        isPrimary={deviceView === 'Mobile'}
                        onClick={() => handleDeviceViewChange('Mobile')}
                    />
                </div>
                <div className='content-buttonrange'>
                    <Button
                        label={__('px', 'cocopopup')}
                        isPressed={pxElement === 'px'}
                        onClick={() => {
                            setPxElement('px');
                        }}
                    >
                        {__('px','cocopopup')}
                    </Button>
                    <Button
                        label={__('em', 'cocopopup')}
                        isPressed={pxElement === 'em'}
                        onClick={() => {
                            setPxElement('em');
                        }}
                    >
                        {__('em','cocopopup')}
                    </Button>
                    <Button
                        label={__('rem', 'cocopopup')}
                        isPressed={pxElement === 'rem'}
                        onClick={() => {
                            setPxElement('rem');
                        }}
                    >
                        {__('rem','cocopopup')}
                    </Button>
                    <Button
                        label={__('%', 'cocopopup')}
                        isPressed={pxElement === '%'}
                        onClick={() => {
                            setPxElement('%');
                        }}
                    >
                        {__('%','cocopopup')}
                    </Button>
                </div>
                </div>
            </div>
            </>
    );
};

export default WidthOptionsPanel;