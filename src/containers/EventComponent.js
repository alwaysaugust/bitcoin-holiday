/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import dayjs from 'dayjs';
import moment from 'moment';
import EventViewModal from './EventViewModal';

const EventComponent = ({ event }) => {
  const [eventModal, setEventModal] = useState(false);

  const showEventViewModalHandler = () => {
    setEventModal(true);
  };
  return (
    <div className="rbc-cus-event-content">
      <div className="rbc-cus-event-cell rbc-event-today">
        <div>
          <div className="rbc-date-cell">
            <span>{dayjs(event.date).format('DD')}</span>
          </div>
          <div className="rbc-title-cell">
            <span>{event.title}</span>
          </div>
          <div className="rbc-org-cell">
            <span>{moment(event.org).format('MMMM Do, YYYY')}</span>
          </div>
          <div className="rbc-description-cell">{event.description}</div>
        </div>
        <div className="event-btn-wrapper">
          <button
            type="button"
            className="btn btn-event-view"
            onClick={() => showEventViewModalHandler(event)}
          >
            <span>View Event</span>
          </button>
        </div>
      </div>
      <EventViewModal
        eventModal={eventModal}
        setEventModal={setEventModal}
        eventDetail={event}
      />
    </div>
  );
};

export default EventComponent;
