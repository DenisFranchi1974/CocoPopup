import { registerBlockType} from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import CustomIconImage from '../assets/images/cocopopup-icon.png'; 

const CustomIcon = () => (
    <div className="cocopopup-svg-block">
		 <img src={CustomIconImage} alt={__('CocoPopup Icon','cocopopup')} /> 
    </div>
);

registerBlockType( metadata.name, {
	icon: <CustomIcon />,
	edit: Edit,
	save,
} );