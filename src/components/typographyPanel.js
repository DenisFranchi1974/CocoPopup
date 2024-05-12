import { RangeControl, SelectControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
const { useState } = wp.element;
const { dispatch } = wp.data;
import './editor.scss';

const TypographyOptionsPanel = ({ 
    fontSize, setFontSize, 
    fontSizeTablet, setFontSizeTablet,
    fontSizeMobile, setFontSizeMobile,
    lineHeight, setLineHeight, 
    weight, setWeight, 
    letterSpacing, setLetterSpacing, 
    decoration, setDecoration, 
    trasform, setTrasform ,
    pxTitle, setPxTitle
}) => {

    // Responsive
    const [deviceView, setDeviceView] = useState('Desktop');
    const handleDeviceViewChange = (view) => {
        setDeviceView(view);
        dispatch('core/edit-post').__experimentalSetPreviewDeviceType(view);
    };
    // Typography
    const [isOpen, setIsOpen] = useState(false);

    return (
            <>
                <div className='popup-modal'>
                    <span>{__('Typography','wp-kube')}</span>
                    <Button
                        icon="edit"
                        className='button-expand-popup'
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        label={isOpen ? "Collapse Typography" : "Expand Typography"}
                    />
                </div>
                {isOpen && (
                <div className='modal-shadow'>
                <div className='modal-font-size'>
                {deviceView === 'Desktop' && (
                    <RangeControl
                        label={__('Font Size Desktop','wp-kube')}
                        max={pxTitle === 'px' ? 200 : 100}
                        min={0}
                        step={pxTitle === 'px' ? 1 : 0.1}
                        value={fontSize}
                        onChange={setFontSize}
                    />
                )}
                {deviceView === 'Tablet' && (
                    <RangeControl
                        label={__('Font Size Tablet','wp-kube')}
                        max={pxTitle === 'px' ? 200 : 100}
                        min={0}
                        step={pxTitle === 'px' ? 1 : 0.1}
                        value={fontSizeTablet}
                        onChange={setFontSizeTablet}
                    />
                )}
                {deviceView === 'Mobile' && (
                    <RangeControl
                        label={__('Font Size Mobile','wp-kube')}
                        max={pxTitle === 'px' ? 200 : 100}
                        min={0}
                        step={pxTitle === 'px' ? 1 : 0.1}
                        value={fontSizeMobile}
                        onChange={setFontSizeMobile}
                    />
                )}
                <div className='content-button-responsive'>
                    <Button
                        icon="desktop"
                        label={__('Desktop','wp-kube')}
                        isPrimary={deviceView === 'Desktop'}
                        onClick={() => handleDeviceViewChange('Desktop')}
                    />
                    <Button
                        icon="tablet"
                        label={__('Tablet','wp-kube')}
                        isPrimary={deviceView === 'Tablet'}
                        onClick={() => handleDeviceViewChange('Tablet')}
                    />
                    <Button
                        icon="smartphone"
                        label={__('Mobile','wp-kube')}
                        isPrimary={deviceView === 'Mobile'}
                        onClick={() => handleDeviceViewChange('Mobile')}
                    />
                </div>
                <div className='content-buttonrange'>
                    <Button
                        label={__('px', 'wp-kube')}
                        isPressed={pxTitle === 'px'}
                        onClick={() => {
                            setPxTitle('px');
                        }}
                    >
                        {__('px','wp-kube')}
                    </Button>
                    <Button
                        label={__('em', 'wp-kube')}
                        isPressed={pxTitle === 'em'}
                        onClick={() => {
                            setPxTitle('em');
                        }}
                    >
                        {__('em','wp-kube')}
                    </Button>
                    <Button
                        label={__('rem', 'wp-kube')}
                        isPressed={pxTitle === 'rem'}
                        onClick={() => {
                            setPxTitle('rem');
                        }}
                    >
                        {__('rem','wp-kube')}
                    </Button>
                </div>
                </div>
                <SelectControl
                    label={ __( 'Weight', 'wp-kube' ) }
                    onChange={setWeight}
                    value={ weight }
                    options={ [
                        {
                            label: __( '100', 'wp-kube' ),
                            value: '100',
                        },
                        {
                            label: __( '200', 'wp-kube' ),
                            value: '200',
                        },
                        {
                            label: __( '300', 'wp-kube' ),
                            value: '300',
                        },
                        {
                            label: __( '400', 'wp-kube' ),
                            value: '400',
                        },
                        {
                            label: __( '500', 'wp-kube' ),
                            value: '500',
                        },
                        {
                            label: __( '600', 'wp-kube' ),
                            value: '600',
                        },
                        {
                            label: __( '700', 'wp-kube' ),
                            value: '700',
                        },
                        {
                            label: __( '800', 'wp-kube' ),
                            value: '800',
                        },
                        {
                            label: __( '900', 'wp-kube' ),
                            value: '900',
                        },
                    ] }
                />
                <SelectControl
                    label={ __( 'Trasform', 'wp-kube' ) }
                    onChange={setTrasform}
                    value={ trasform }
                    options={ [
                        {
                            label: __( 'Normal', 'wp-kube' ),
                            value: 'none',
                        },
                        {
                            label: __( 'Capitalize', 'wp-kube' ),
                            value: 'capitalize',
                        },
                        {
                            label: __( 'Uppercase', 'wp-kube' ),
                            value: 'uppercase',
                        },
                        {
                            label: __( 'Lowercase', 'wp-kube' ),
                            value: 'lowercase',
                        },
                    ] }
                />
                <SelectControl
                    label={ __( 'Decoration', 'wp-kube' ) }
                    onChange={setDecoration}
                    value={ decoration }
                    options={ [
                        {
                            label: __( 'None', 'wp-kube' ),
                            value: 'none',
                        },
                        {
                            label: __( 'Underline', 'wp-kube' ),
                            value: 'underline',
                        },
                        {
                            label: __( 'Overline', 'wp-kube' ),
                            value: 'overline',
                        },
                        {
                            label: __( 'Line Through', 'wp-kube' ),
                            value: 'line-through',
                        },
                    ] }
                />
                <RangeControl
                    label={__('Line Height','wp-kube')}
                    max={100}
                    min={0}
                    step={.1}
                    value={lineHeight}
                    onChange={setLineHeight}
                />
                <RangeControl
                    label={__('Letter Spacing','wp-kube')}
                    max={100}
                    min={-10}
                    step={1}
                    value={letterSpacing}
                    onChange={setLetterSpacing}
                />  
                </div>
                )}  
            </>
    );
};

export default TypographyOptionsPanel;