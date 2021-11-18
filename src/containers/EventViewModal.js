/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const EventViewModal = ({ eventModal, setEventModal }) => {
  return (
    <Modal
      isOpen={eventModal}
      toggle={() => setEventModal(!eventModal)}
      wrapClassName="modal-right"
    >
      <ModalHeader>EventViewModal</ModalHeader>
      <ModalBody>Content Goes Here...</ModalBody>
    </Modal>
  );
};

export default EventViewModal;
