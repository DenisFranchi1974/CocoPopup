import { __ } from '@wordpress/i18n';
import { ColorPalette } from '@wordpress/block-editor';
import { SelectControl, RangeControl, ToggleControl, TabPanel, Button } from '@wordpress/components';
const { useState } = wp.element;
import './editor.scss';

const BoxShadowControl = ({
    boxShadow,
    setBoxShadow,
    hasHoverControl,
    setHasHoverControl,
    boxShadowHover,
    setBoxShadowHover,
    transitionShadow,
    setTransitionShadow
}) => {

    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);
    const toggleColorPalette = () => {
        setColorPaletteOpen(!colorPaletteOpen);
    };

    return (
        <>
            <ToggleControl
                label={__('Separate Hover Box Shadow','cocopopup')}
                checked={hasHoverControl}
                onChange={(checked) => setHasHoverControl(checked)}
            />
            {!hasHoverControl && (
                <>
                    <div className='cocopopup-panel-color'>
                        <p>{__('Color','cocopopup')}</p>
                        <Button
                            onClick={toggleColorPalette}
                            style={{ backgroundColor: boxShadow.color }}
                            className="color-palette-toggle-button"
                        >
                        </Button>
                    </div>
                    {colorPaletteOpen && (
                    <ColorPalette
                        label={__('Color Hover','cocopopup')}
                        value={boxShadow.color}
                        onChange={(value) => setBoxShadow({ ...boxShadow,color: value })}
                        enableAlpha
                    />
                    )}
                    <RangeControl
                        label={__('Horizontal Offset', 'cocopopup')}
                        value={boxShadow.hOffset}
                        onChange={(value) => setBoxShadow({ ...boxShadow, hOffset: value })}
                        min={-50}
                        max={100}
                        step={1}
                    />
                    <RangeControl
                        label={__('Vertical Offset', 'cocopopup')}
                        value={boxShadow.vOffset}
                        onChange={(value) => setBoxShadow({ ...boxShadow, vOffset: value })}
                        min={-50}
                        max={100}
                        step={1}
                    />
                    <RangeControl
                        label={__('Blur', 'cocopopup')}
                        value={boxShadow.blur}
                        onChange={(value) => setBoxShadow({ ...boxShadow, blur: value })}
                    />
                    <RangeControl
                        label={__('Spread', 'cocopopup')}
                        value={boxShadow.spread}
                        onChange={(value) => setBoxShadow({ ...boxShadow, spread: value })}
                        min={-50}
                        max={100}
                        step={1}
                    />
                    <SelectControl
                        label={__('Shadow Type', 'cocopopup')}
                        value={boxShadow.type}
                        options={[
                            { label: __('Inset', 'cocopopup'), value: 'inset' },
                            { label: __('Outset', 'cocopopup'), value: 'outset' },
                        ]}
                        onChange={(value) => setBoxShadow({ ...boxShadow, type: value })}
                    />
                </>
            )}
            {hasHoverControl && (
                <TabPanel
                    className="cocopopup-color-options-tabs"
                    activeClass="active-tab"
                    tabs={[
                        {
                            name: 'normal',
                            title: __('Normal', 'cocopopup'),
                            className: 'box-shadow-normal-tab',
                        },
                        {
                            name: 'hover',
                            title: __('Hover', 'cocopopup'),
                            className: 'box-shadow-hover-tab',
                        },
                    ]}
                >
                    {(tab) => (
                        <>
                            {tab.name === 'normal' && (
                                <>
                                    <div className='cocopopup-panel-color'>
                                        <p>{__('Color','cocopopup')}</p>
                                        <Button
                                            onClick={toggleColorPalette}
                                            style={{ backgroundColor: boxShadow.color }}
                                            className="color-palette-toggle-button"
                                        >
                                        </Button>
                                    </div>
                                    {colorPaletteOpen && (
                                    <ColorPalette
                                        label={__('Color Hover','cocopopup')}
                                        value={boxShadow.color}
                                        onChange={(value) => setBoxShadow({ ...boxShadow,color: value })}
                                        enableAlpha
                                    />
                                    )}
                                    <RangeControl
                                        label={__('Horizontal Offset', 'cocopopup')}
                                        value={boxShadow.hOffset}
                                        onChange={(value) => setBoxShadow({ ...boxShadow, hOffset: value })}
                                    />
                                    <RangeControl
                                        label={__('Vertical Offset', 'cocopopup')}
                                        value={boxShadow.vOffset}
                                        onChange={(value) => setBoxShadow({ ...boxShadow, vOffset: value })}
                                    />
                                    <RangeControl
                                        label={__('Blur', 'cocopopup')}
                                        value={boxShadow.blur}
                                        onChange={(value) => setBoxShadow({ ...boxShadow, blur: value })}
                                    />
                                    <RangeControl
                                        label={__('Spread', 'cocopopup')}
                                        value={boxShadow.spread}
                                        onChange={(value) => setBoxShadow({ ...boxShadow, spread: value })}
                                        min={-50}
                                        max={100}
                                        step={1}
                                    />
                                    <SelectControl
                                        label={__('Shadow Type', 'cocopopup')}
                                        value={boxShadow.type}
                                        options={[
                                            { label: __('Inset', 'cocopopup'), value: 'inset' },
                                            { label: __('Outset', 'cocopopup'), value: 'outset' },
                                        ]}
                                        onChange={(value) => setBoxShadow({ ...boxShadow, type: value })}
                                    />
                                </>
                            )}
                            {tab.name === 'hover' && (
                                <>
                                    <div className='cocopopup-panel-color'>
                                        <p>{__('Color','cocopopup')}</p>
                                        <Button
                                            onClick={toggleColorPalette}
                                            style={{ backgroundColor: boxShadowHover.color }}
                                            className="color-palette-toggle-button"
                                        >
                                        </Button>
                                    </div>
                                    {colorPaletteOpen && (
                                    <ColorPalette
                                        label={__('Color Hover','cocopopup')}
                                        value={boxShadowHover.color}
                                        onChange={(value) => setBoxShadowHover({ ...boxShadowHover,color: value })}
                                        enableAlpha
                                    />
                                    )}
                                    <RangeControl
                                        label={__('Horizontal Offset', 'cocopopup')}
                                        value={boxShadowHover.hOffset}
                                        onChange={(value) => setBoxShadowHover({ ...boxShadowHover, hOffset: value })}
                                    />
                                    <RangeControl
                                        label={__('Vertical Offset', 'cocopopup')}
                                        value={boxShadowHover.vOffset}
                                        onChange={(value) => setBoxShadowHover({ ...boxShadowHover, vOffset: value })}
                                    />
                                    <RangeControl
                                        label={__('Blur', 'cocopopup')}
                                        value={boxShadowHover.blur}
                                        onChange={(value) => setBoxShadowHover({ ...boxShadowHover, blur: value })}
                                    />
                                    <RangeControl
                                        label={__('Spread', 'cocopopup')}
                                        value={boxShadowHover.spread}
                                        onChange={(value) => setBoxShadowHover({ ...boxShadowHover, spread: value })}
                                        min={-50}
                                        max={100}
                                        step={1}
                                    />
                                    <SelectControl
                                        label={__('Shadow Type', 'cocopopup')}
                                        value={boxShadowHover.type}
                                        options={[
                                            { label: __('Inset', 'cocopopup'), value: 'inset' },
                                            { label: __('Outset', 'cocopopup'), value: 'outset' },
                                        ]}
                                        onChange={(value) => setBoxShadowHover({ ...boxShadowHover, type: value })}
                                    />
                                    <RangeControl
                                        label={__('Transition Time','cocopopup')}
                                        value={transitionShadow}
                                        onChange={(val) => setTransitionShadow(val)}
                                        min={0}
                                        max={5}
                                        step={.1}
                                    />
                                </>
                            )}
                        </>
                    )}
                </TabPanel>
            )}
        </>
    );
};

export default BoxShadowControl;