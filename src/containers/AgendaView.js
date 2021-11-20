import React, { useState } from 'react';
import * as dates from 'date-arithmetic';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import moment from 'moment';
import EventViewModal from './EventViewModal';

function rangeFunc(start, end, unit = 'day') {
  let current = start;
  const days = [];
  while (dates.lte(current, end, unit)) {
    days.push(current);
    current = dates.add(current, 1, unit);
  }
  return days;
}

function inRange(e, start, end, accessors) {
  const eStart = dates.startOf(accessors.start(e), 'day');
  const eEnd = accessors.end(e);
  const startsBeforeEnd = dates.lte(eStart, end, 'day');
  const endsAfterStart = !dates.eq(eStart, eEnd, 'minutes')
    ? dates.gt(eEnd, start, 'minutes')
    : dates.gte(eEnd, start, 'minutes');
  return startsBeforeEnd && endsAfterStart;
}

// eslint-disable-next-line import/prefer-default-export
export const AgendaView = ({ accessors, localizer, length, date, events }) => {
  const [eventModal, setEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  const showEventViewModalHandler = (idx) => {
    setEventModal(true);
    setSelectedEvent(events[idx]);
  };

  // eslint-disable-next-line no-shadow
  const renderDay = (day, events) => {
    // eslint-disable-next-line no-param-reassign
    events = events.filter((e) =>
      inRange(e, dates.startOf(day, 'day'), dates.endOf(day, 'day'), accessors)
    );
    return events.map((event, idx) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div key={idx} className="listview-item">
          <div className="listview-item-date-wrap">
            {idx === 0 && (
              <div className="styles-dateWrap">
                <p>{localizer.format(day, 'dddd DD')}</p>
                <div className="styles-line" />
                {event.isBitcoinEvent && (
                  <img
                    alt="Bitcoin"
                    src="/assets/img/bitcoin-letter.png"
                    className="lg-bitcoin"
                  />
                )}
              </div>
            )}
            <div>
              {/* eslint-disable-next-line no-use-before-define */}
              <div className="styles-eventTitle">{accessors.title(event)}</div>
              <div className="styles-org">
                {moment(event.org).format('MMMM Do, YYYY')}
              </div>
              {/* <div className="styles.time">{timeRangeLabel(day, event)}</div> */}
            </div>
          </div>
          <div className="styles-description">{event.description}</div>
          <div className="styles-btn-div ml-auto">
            <button
              type="button"
              className="btn btn-list-view-event-view"
              onClick={() => showEventViewModalHandler(idx)}
            >
              <span>View Event</span>
            </button>
          </div>
        </div>
      );
    }, []);
  };

  // eslint-disable-next-line consistent-return
  // const timeRangeLabel = (day, event) => {
  //   const end = accessors.end(event)
  //   const start = accessors.start(event)

  //   if (!accessors.allDay(event)) {
  //     if (dayjs(start).day() === dayjs(end).day()) {
  //       const timePeriod = `${dayjs(start).format('h:mma')} – ${dayjs(
  //         end
  //       ).format('h:mma')}`
  //       return timePeriod;
  //     }
  //     const startDate = dayjs(start).format('DD-MM YYYY, h:mma')
  //     const endDate = dayjs(end).format('DD-MM YYYY, h:mma')
  //     return `${startDate} – ${endDate}`

  //   }
  // }

  const end = dates.add(date, length, 'day');
  const range = rangeFunc(date, end, 'day');
  // eslint-disable-next-line no-param-reassign
  events = events.filter((event) => inRange(event, date, end, accessors));
  events.sort((a, b) => +accessors.start(a) - +accessors.start(b));

  return (
    <div>
      {events.length !== 0
        ? range.map((day, idx) => renderDay(day, events, idx))
        : 'No event dates in range'}

      <EventViewModal
        eventModal={eventModal}
        setEventModal={setEventModal}
        eventDetail={selectedEvent}
      />
    </div>
  );
};

AgendaView.title = (start, { localizer }) => {
  const end = dates.add(start, 1, 'month');
  return localizer.format({ start, end }, 'agendaHeaderFormat');
};

AgendaView.navigate = (date, action) => {
  const sDate = dayjs(date).startOf('month').toDate();
  switch (action) {
    case 'PREV':
      return dates.add(sDate, -1, 'month');
    case 'NEXT':
      return dates.add(sDate, 1, 'month');
    default:
      return date;
  }
};

AgendaView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  events: PropTypes.array,
  // eslint-disable-next-line react/require-default-props
  date: PropTypes.instanceOf(Date),
  // eslint-disable-next-line react/require-default-props
  length: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types,react/no-unused-prop-types,react/require-default-props
  selected: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  accessors: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types,react/no-unused-prop-types
  components: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types,react/no-unused-prop-types
  getters: PropTypes.object.isRequired,
  // localizer: PropTypes.object.isRequired,
};
