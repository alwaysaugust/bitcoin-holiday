/* eslint-disable react/no-array-index-key */
import React from 'react';
import dayjs from 'dayjs';

const EventComponent = ({ event }) => {
  return (
    <div className="rbc-cus-event-content">
      {dayjs(event.date).format('DD') === dayjs(new Date()).format('DD') ? (
        <div className="rbc-cus-event-cell rbc-event-today">
          <div>
            <div className="rbc-date-cell">
              <span>{dayjs(event.date).format('DD')}</span>
            </div>
            <div className="rbc-title-cell">
              {event.title}
            </div>
            <div className="rbc-org-cell">
              {event.org}
            </div>
            <div className="rbc-description-cell">
              {event.description}
            </div>
          </div>
          <div className="event-btn-wrapper">
            <button type="button" className="btn btn-event-view">
              <span>View Event</span>
            </button>
          </div>
        </div>) :
        <div className="rbc-cus-event-cell" />
      }
    </div>
  );
};

export default EventComponent;
