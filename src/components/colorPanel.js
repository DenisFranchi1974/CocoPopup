import { ColorPalette } from '@wordpress/block-editor';
import { TabPanel, Button, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
const { useState } = wp.element;

const ColorOptionsPanel = ({ colorNormal, setColorNormal, colorHover, setColorHover,transitionColor,setTransitionColor }) => {

    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);
    const toggleColorPalette = () => {
        setColorPaletteOpen(!colorPaletteOpen);
    };

    return (
       
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
                            <div className='cocopopup-panel-color'>
                            <p>{__('Color','cocopopup')}</p>
                            <Button
                                onClick={toggleColorPalette}
                                style={{ backgroundColor: colorNormal }}
                                className="color-palette-toggle-button"
                            >
                            </Button>
                            </div>
                            {colorPaletteOpen && (
                            <ColorPalette
                                label={__('Color Normal','cocopopup')}
                                value={colorNormal}
                                onChange={(color) => setColorNormal(color)}
                                enableAlpha
                            />
                            )}
                            </>
                        )}
                        {tab.name === 'hover' && (
                            <>
                            <div className='cocopopup-panel-color'>
                            <p>{__('Color','cocopopup')}</p>
                            <Button
                                onClick={toggleColorPalette}
                                style={{ backgroundColor: colorHover }}
                                className="color-palette-toggle-button"
                            >
                            </Button>
                            </div>
                            {colorPaletteOpen && (
                            <ColorPalette
                                label={__('Color Hover','cocopopup')}
                                value={colorHover}
                                onChange={(color) => setColorHover(color)}
                                enableAlpha
                            />
                            )}
                            <RangeControl
                                label={__('Transition Time','cocopopup')}
                                value={transitionColor}
                                onChange={(val) => setTransitionColor(val)}
                                min={0}
                                max={5}
                                step={.1}
                            />
                            </>
                        )}
                    </div>
                )}
            </TabPanel>
    );
};

export default ColorOptionsPanel;