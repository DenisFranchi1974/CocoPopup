import { __ } from '@wordpress/i18n';
import { ColorPalette } from '@wordpress/block-editor';
import { SelectControl, RangeControl, Button } from '@wordpress/components';
const { useState } = wp.element;
import './editor.scss';

const BoxShadowControlSimple = ({
    boxShadow,
    setBoxShadow
}) => {

    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);
    const toggleColorPalette = () => {
        setColorPaletteOpen(!colorPaletteOpen);
    };

    return (
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
                label={__('Color','cocopopup')}
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
    );
};

export default BoxShadowControlSimple;