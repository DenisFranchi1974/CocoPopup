import { ColorPalette } from '@wordpress/block-editor';
import { TabPanel, Button ,GradientPicker, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
const { useState  } = wp.element;

const BackgroundColorOptionsPanelOne = ({ 
    backgroundColor,
    setBackgroundColor,
    backgroundGradient,
    setBackgroundGradient,
    backgroundColorHover,
    setBackgroundColorHover,
    backgroundGradientHover,
    setBackgroundGradientHover,
    transition,
    setTransition
}) => {

    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);
    const toggleColorPalette = () => {
        setColorPaletteOpen(!colorPaletteOpen);
    };
    const [activeTab, setActiveTab] = useState('color');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
            <>
            <TabPanel
                className="cocopopup-color-options-tabs"
                activeClass="active-tab"
                tabs={[
                    {
                        name: 'normal',
                        title: __('Normal', 'cocopopup'),
                        className: 'cocopopup-normal-tab',
                    },
                    {
                        name: 'hover',
                        title: __('Hover', 'cocopopup'),
                        className: 'cocopopup-hover-tab',
                    },
                ]}
            >
                {(tab) => (
                    <div>
                        {tab.name === 'normal' && (
                            <>
                                <p>{__('Type','cocopopup')}</p>
                                <div className='cocopopup-tab-panel-background-one'>
                                    <Button
                                        isPrimary={activeTab === 'color'}
                                        onClick={() => handleTabClick('color')}
                                    >
                                    {__('Color','cocopopup')}
                                    </Button>
                                    <Button
                                        isPrimary={activeTab === 'gradient'}
                                        onClick={() => handleTabClick('gradient')}
                                    >
                                    {__('Gradient','cocopopup')}
                                    </Button>
                                </div>
                                {activeTab === 'color' && (
                                    <>
                                    <div className='cocopopup-panel-color'>
                                        <p>{__('Color','cocopopup')}</p>
                                        <Button
                                            onClick={toggleColorPalette}
                                            style={{ backgroundColor: backgroundColor }}
                                            className="color-palette-toggle-button"
                                        >
                                        </Button>
                                    </div>
                                    {colorPaletteOpen && (
                                    <ColorPalette
                                        value={backgroundColor}
                                        onChange={(color) => setBackgroundColor(color)}
                                        enableAlpha
                                    />
                                    )}
                                    </>
                                )}
                                {activeTab === 'gradient' && (
                                    <>
                                    <GradientPicker
                                        value={ backgroundGradient }
                                        onChange={(gradient) => setBackgroundGradient(gradient)}
                                        __nextHasNoMargin={true} 
                                        gradients={[
                                        {
                                            name: __('Vivid cyan blue to vivid purple','cocopopup'),
                                            gradient:
                                                'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
                                            slug: 'vivid-cyan-blue-to-vivid-purple',
                                        },
                                        {
                                            name: __( 'Light green cyan to vivid green cyan','cocopopup'),
                                            gradient:
                                                'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
                                            slug: 'light-green-cyan-to-vivid-green-cyan',
                                        },
                                        {
                                            name: __('Luminous vivid amber to luminous vivid orange','cocopopup'),
                                            gradient:
                                                'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
                                            slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
                                        },
                                        {
                                            name: __('Luminous vivid orange to vivid red','cocopopup'),
                                            gradient:
                                                'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
                                            slug: 'luminous-vivid-orange-to-vivid-red',
                                        },
                                        {
                                            name: __('Very light gray to cyan bluish gray','cocopopup'),
                                            gradient:
                                                'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
                                            slug: 'very-light-gray-to-cyan-bluish-gray',
                                        },
                                        {
                                            name: __('Cool to warm spectrum','cocopopup'),
                                            gradient:
                                                'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
                                            slug: 'cool-to-warm-spectrum',
                                        },
                                    ]}   
                                    />
                                    </>
                                )}
                               
                            </>
                        )}
                        {tab.name === 'hover' && (
                            <>
                            <p>{__('Type','cocopopup')}</p>
                            <div className='cocopopup-tab-panel-background-one'>
                                <Button
                                    isPrimary={activeTab === 'color'}
                                    onClick={() => handleTabClick('color')}
                                >
                                    {__('Color','cocopopup')}
                                </Button>
                                <Button
                                    isPrimary={activeTab === 'gradient'}
                                    onClick={() => handleTabClick('gradient')}
                                >
                                {__('Gradient','cocopopup')}
                                </Button>
                            </div>
                            {activeTab === 'color' && (
                                <>
                                <div className='cocopopup-panel-color'>
                                    <p>{__('Color','cocopopup')}</p>
                                    <Button
                                        onClick={toggleColorPalette}
                                        style={{ backgroundColor: backgroundColorHover }}
                                        className="color-palette-toggle-button"
                                    >
                                    </Button>
                                </div>
                                {colorPaletteOpen && (
                                <ColorPalette
                                    value={backgroundColorHover}
                                    onChange={(color) => setBackgroundColorHover(color)}
                                    enableAlpha
                                />
                                )}
                                </>
                            )}
                            {activeTab === 'gradient' && (
                                <>
                                <GradientPicker
                                    value={ backgroundGradientHover }
                                    onChange={(gradient) => setBackgroundGradientHover(gradient)}
                                    __nextHasNoMargin={true} 
                                    gradients={[
                                    {
                                        name: __('Vivid cyan blue to vivid purple','cocopopup'),
                                        gradient:
                                            'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
                                        slug: 'vivid-cyan-blue-to-vivid-purple',
                                    },
                                    {
                                        name: __( 'Light green cyan to vivid green cyan','cocopopup'),
                                        gradient:
                                            'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
                                        slug: 'light-green-cyan-to-vivid-green-cyan',
                                    },
                                    {
                                        name: __('Luminous vivid amber to luminous vivid orange','cocopopup'),
                                        gradient:
                                            'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
                                        slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
                                    },
                                    {
                                        name: __('Luminous vivid orange to vivid red','cocopopup'),
                                        gradient:
                                            'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
                                        slug: 'luminous-vivid-orange-to-vivid-red',
                                    },
                                    {
                                        name: __('Very light gray to cyan bluish gray','cocopopup'),
                                        gradient:
                                            'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
                                        slug: 'very-light-gray-to-cyan-bluish-gray',
                                    },
                                    {
                                        name: __('Cool to warm spectrum','cocopopup'),
                                        gradient:
                                            'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
                                        slug: 'cool-to-warm-spectrum',
                                    },
                                ]}   
                                />
                                </>
                            )}
                            <RangeControl
                                label={__('Transition Time','cocopopup')}
                                value={transition}
                                onChange={(val) => setTransition(val)}
                                min={0}
                                max={5}
                                step={.1}
                            />
                        </>
                        )}
                    </div>
                )}
            </TabPanel>
            </>
    );
};

export default BackgroundColorOptionsPanelOne;