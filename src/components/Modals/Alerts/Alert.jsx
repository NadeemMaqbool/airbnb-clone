import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FaExclamation} from "react-icons/fa"
import "./Alert.css"

const Alert = (props) => {
  const {show, setShow, deleteHotel, selectedHotel, title} = props;
  
  const handleClose = () => setShow(false);
  
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='modal-symbol'>
            <FaExclamation color='#C53104' padding="10" />
          </Modal.Title>
          <div className='heading'>
            <h4>Alert</h4>
          </div>
        </Modal.Header>
        <Modal.Body>
        <Modal.Title className="headings">You are about to delete a {title} record</Modal.Title>
          Are you sure you want to delete this item? You cannot undone this action!
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondry" 
            onClick={handleClose}
            className='btn-modal'
          >
            Close
          </Button>
          <Button 
            className='btn-modal'
            variant="primary"
            onClick={() => deleteHotel(selectedHotel)}    
          >Continue</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Alert
