import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { Modal, Button } from '@wordpress/components';
import './editor.scss';
import avatar from '../../assets/images/cocopopup-assistance.png'; 
import {Icon, helpFilled } from '@wordpress/icons';
import { useSelect } from '@wordpress/data';

const AvatarPopup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

// All'interno del componente React
const currentUser = useSelect((select) => select('core').getCurrentUser(), []);
const userName = currentUser && currentUser.name; // Otteniamo il nome dell'utente, supponendo che ci sia

let welcomeMessage = userName || ''; // Assicurati che welcomeMessage sia una stringa, altrimenti una stringa vuota
       
    return (
        <>
            <div className="avatar-button" onClick={openModal}>
                <img src={avatar} alt={__('CocoPopup Assistance','cocopopup')} />
                <Icon className='svg-assistance' icon={helpFilled} size={18}/>
            </div>
            {isModalOpen && (
                <Modal
                    title={ __('Hi ','cocopopup') + welcomeMessage + __('. I am your personal assistant.','cocopopup')}
                    onRequestClose={closeModal}
                    className="avatar-popup-modal"
                    shouldCloseOnClickOutside={true}
                >
                    <p>{__('To create a popup correctly, you need to input both the Popup Name and its ID (which must be unique for each popup you create). This information will only be visible to you but may prove useful for monitoring the respective statistics from the Popup dashboard. If you look to your right, you\'ll find this data readily available, allowing you to keep track of it effortlessly. Additionally, on your right-hand side, the controls are categorized into three parts: Content, Style, and Advanced. Within the Content section, you\'ll discover all the contents of the popup, including methods for triggering its appearance, the conditions it must meet to display, and the closing mechanism. The Style section offers controls for customizing the popup\'s appearance, while the Advanced section provides options for configuring body scrolling behavior upon popup appearance and introducing animations. In the Pattern section, you\'ll encounter a new entry labeled "Popup", offering predefined patterns for your convenience. Naturally, within the popup, you have the freedom to insert any blocks you desire, making it effortless to bring your ideas to life.','cocopopup')}</p>
                    <Button isPrimary onClick={closeModal}>{__('Close','cocopopup')}</Button>
                </Modal>
            )}
        </>
    );
};

export default AvatarPopup;