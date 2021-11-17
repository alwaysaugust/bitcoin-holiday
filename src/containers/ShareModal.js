/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const ShareModal = ({ shareModal, setShareModal }) => {
  return (
    <Modal isOpen={shareModal} toggle={() => setShareModal(!shareModal)}>
      <ModalBody>Share</ModalBody>
    </Modal>
  );
};

export default ShareModal;
