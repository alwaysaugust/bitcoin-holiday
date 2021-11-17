/* eslint-disable react/no-array-index-key, react/no-danger */
import React from 'react';
import { Row } from 'reactstrap';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { Colxx } from '../components/common/CustomBootstrap';
import AppLayout from '../layout/AppLayout';
import CalendarToolbar from '../containers/toolbar/CalendarToolbar';

const Localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

const Home = () => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Row>
          <Colxx xxs="12">
            <div className="calendar-wrapper">
              <DragAndDropCalendar
                className=""
                selectable
                localizer={Localizer}
                resizable
                events={[]}
                defaultView="month"
                defaultDate={new Date()}
                step={60}
                components={{
                  toolbar: CalendarToolbar,
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
