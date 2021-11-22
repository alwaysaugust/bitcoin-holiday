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
        <div className="event-content-wrapper">
          <div className="rbc-date-cell">
            <span>{dayjs(event.date).format('DD')}</span>
          </div>
          {!event.isMultipleEvent ? (
            <>
              <div className="rbc-title-cell">
                <span>{event.title}</span>
              </div>
              <div className="rbc-org-cell">
                <span>{moment(event.org).format('MMMM Do, YYYY')}</span>
              </div>
              <div className="rbc-description-cell">{event.description}</div>
              {event.isBitcoinEvent && (
                <div className="rbc-btc-letter-cell">
                  <img
                    src="/assets/img/bitcoin-letter.png"
                    alt="Bitcoin Holiday"
                  />
                </div>
              )}
            </>
          ) : (
            <div className="rbc-multiple-event-wrapper">
              {event.events.map((el, idx) => {
                return (
                  <div key={idx} className="rbc-multiple-event-content">
                    <span>{el.title}</span>
                    {el.isBitcoinEvent && (
                      <span>
                        <img
                          src="/assets/img/bitcoin-letter.png"
                          alt="Bitcoin Holiday"
                        />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
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
