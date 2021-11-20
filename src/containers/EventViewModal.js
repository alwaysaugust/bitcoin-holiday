/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import moment from 'moment';

import ArrowLeftIcon from '../components/svg/ArrowLeftIcon';
import ShareIcon from '../components/svg/ShareIcon';

const EventViewModal = ({ eventModal, setEventModal, eventDetail }) => {

  return (
    <Modal
      className="event-view-modal"
      isOpen={eventModal}
      toggle={() => setEventModal(!eventModal)}
      wrapClassName="modal-right"
    >
      <ModalBody>
        <div className="section-header">
          <button
            type="button"
            className="btn btn-empty p-0"
            onClick={() => setEventModal(!eventModal)}
          >
            <span className="theme-svg">
              <ArrowLeftIcon />
            </span>
          </button>
          <div className="header-title">
            What happened in {eventDetail !== undefined ? moment(eventDetail.org).format('MMMM') : ''}?
          </div>
          <button type="button" className="btn btn-empty p-0">
            <span className="theme-svg">
              <ShareIcon />
            </span>
          </button>
        </div>
        <div className="section-body">
          <div className="event-title">{eventDetail?.title ?? ''}</div>
          <div className="event-img-wrapper">
            {eventDetail?.img && (
              <img
                alt={eventDetail?.title ?? ''}
                src={eventDetail?.img}
                className="event-img"
              />
            )}
          </div>
          <div className="event-org">
            {eventDetail !== undefined
              ? moment(eventDetail.org).format('MMMM Do, YYYY')
              : ''}
          </div>
          <div className="separator" />
          <div className="event-description">
            {eventDetail?.description ?? ''}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default EventViewModal;
