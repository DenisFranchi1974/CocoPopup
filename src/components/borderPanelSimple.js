import {  SelectControl, Notice, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

const BorderOptionsPanelSimple = ({ width, setWidth, style, setStyle, radius, setRadius }) => {

    return (
       <>
            <SelectControl
                label={__('Style', 'cocopopup')}
                value={style}
                onChange={(val) => setStyle(val)}
                options={[
                    {
                        label: __('None', 'cocopopup'),
                        value: 'none',
                    },
                    {
                        label: __('Hidden', 'cocopopup'),
                        value: 'hidden',
                    },
                    {
                        label: __('Solid', 'cocopopup'),
                        value: 'solid',
                    },
                    {
                        label: __('Dotted', 'cocopopup'),
                        value: 'dotted',
                    },
                    {
                        label: __('Dashed', 'cocopopup'),
                        value: 'dashed',
                    },
                    {
                        label: __('Double', 'cocopopup'),
                        value: 'double',
                    },
                    {
                        label: __('Groove', 'cocopopup'),
                        value: 'groove',
                    },
                    {
                        label: __('Inset', 'cocopopup'),
                        value: 'inset',
                    },
                    {
                        label: __('Outset', 'cocopopup'),
                        value: 'outset',
                    },
                    {
                        label: __('Ridge', 'cocopopup'),
                        value: 'ridge',
                    }
                ]}
            />
            {style == "none" &&
            <Notice 
                className='cocopopup-notice-info'
                status="info"
                isDismissible={false}
                onDismiss={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                >
                {__('No borders!','cocopopup')}
            </Notice>
            }
            {style == "hidden" &&
            <Notice 
                className='cocopopup-notice-info'
                status="info"
                isDismissible={false}
                onDismiss={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                >
                {__('Hides the edge, but still takes up space!','cocopopup')}
            </Notice>
            }
            {style == "solid" &&
            <Notice 
                className='cocopopup-notice-info'
                status="info"
                isDismissible={false}
                onDismiss={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                >
                {__('Edge with a uniform thickness and a solid color!','cocopopup')}
            </Notice>
            }
            {style == "dotted" &&
            <Notice 
                className='cocopopup-notice-info'
                status="info"
                isDismissible={false}
                onDismiss={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                >
                {__('Border with a series of dots!','cocopopup')}
            </Notice>
            }
            {style == "dashed" &&
            <Notice 
                className='cocopopup-notice-info'
                status="info"
                isDismissible={false}
                onDismiss={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                >
                {__('Border with a series of dotted lines!','cocopopup')}
            </Notice>
            }
            {style == "double" &&
            <Notice 
                className='cocopopup-notice-info'
                status="info"
                isDismissible={false}
                onDismiss={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                >
                {__('Border composed of two parallel lines!','cocopopup')}
            </Notice>
            }
            {style == "groove" &&
            <Notice 
                className='cocopopup-notice-info'
                status="info"
                isDismissible={false}
                onDismiss={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                >
                {__('Three-dimensional effect similar to a hollow!','cocopopup')}
            </Notice>
            }
            {style == "inset" &&
            <Notice 
                className='cocopopup-notice-info'
                status="info"
                isDismissible={false}
                onDismiss={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                >
                {__('Embedded inside the element!','cocopopup')}
            </Notice>
            }
            {style == "outset" &&
            <Notice 
                className='cocopopup-notice-info'
                status="info"
                isDismissible={false}
                onDismiss={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                >
                {__('Protruding outward from the element!','cocopopup')}
            </Notice>
            }
            {style == "ridge" &&
            <Notice 
                className='cocopopup-notice-info'
                status="info"
                isDismissible={false}
                onDismiss={function noRefCheck(){}}
                onRemove={function noRefCheck(){}}
                >
                {__('Three-dimensional effect similar to a relief!','cocopopup')}
            </Notice>
            }
            {style !== 'none' && style !== 'hidden' && (
            <RangeControl
                 label={__('Width', 'cocopopup')}
                 value={width}
                 onChange={(val) => setWidth(val)}
                 min={0}
                 max={5}
                 step={1}
             />  
            )}
            <RangeControl
                label={__('Radius', 'cocopopup')}
                value={radius}
                onChange={(val) => setRadius(val)}
                min={0}
                max={100}
                step={1}
             />  
       </>
    );
};

export default BorderOptionsPanelSimple;