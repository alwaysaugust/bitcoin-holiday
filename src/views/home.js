/* eslint-disable react/no-array-index-key, react/no-danger */
import React from 'react';
import { Row } from 'reactstrap';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Colxx } from '../components/common/CustomBootstrap';
import AppLayout from '../layout/AppLayout';
import CalendarToolbar from '../containers/toolbar/CalendarToolbar';
import { AgendaView } from '../containers/AgendaView';
import EventComponent from '../containers/EventComponent';

const Localizer = momentLocalizer(moment);

const Home = () => {
  const events = [
    {
      title: 'Event1',
      start: new Date('2021-11-10'),
      end: new Date('2021-11-10'),
      date: new Date(2021, 11, 10),
    },
    {
      title: 'Event2',
      start: new Date('2021-11-11'),
      end: new Date('2021-11-11'),
      date: new Date(2021, 11, 11),
    },
    {
      title: 'Diffie-Hellman Day',
      start: new Date('2021-11-19'),
      end: new Date('2021-11-19'),
      date: new Date(2021, 11, 18),
      org: 'November 1st, 1976',
      description:
        'Whitfield Diffie and Martin E. Hellman release their propo…',
    },
    {
      title: 'Event4',
      start: new Date('2021-12-1'),
      end: new Date('2021-12-1'),
      date: new Date(2021, 12, 1),
    },
  ];
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Row>
          <Colxx xxs="12">
            <div className="calendar-wrapper">
              <Calendar
                className=""
                selectable={false}
                localizer={Localizer}
                resizable
                startAccessor="start"
                endAccessor="end"
                events={events}
                defaultView="month"
                defaultDate={new Date()}
                step={60}
                components={{
                  toolbar: CalendarToolbar,
                  event: EventComponent
                }}
                views={{
                  month: true,
                  agenda: AgendaView,
                }}
              />
            </div>
          </Colxx>
        </Row>
      </div>
    </AppLayout>
  );
};

export default Home;
