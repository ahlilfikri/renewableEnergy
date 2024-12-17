import ReactModal from 'react-modal';
import './Modal.css';
import PropTypes from 'prop-types';

const CustomModal = ({ isOpen, onClose, image }) => {
  CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired, 
    onClose: PropTypes.func.isRequired, 
    image: PropTypes.string.isRequired 
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="custom-modal-overlay"
      overlayClassName="custom-modal-overlay"
    >
      <div className="custom-modal-content">
        <img src={image} alt="" />
        <button onClick={onClose}>X</button>
      </div>
    </ReactModal>
  );
};


export default CustomModal;
