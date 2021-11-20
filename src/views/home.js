/* eslint-disable react/no-array-index-key, react/no-danger */
import React from 'react';
import { Row } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import fm from 'front-matter';
import { Colxx } from '../components/common/CustomBootstrap';
import AppLayout from '../layout/AppLayout';
import CalendarToolbar from '../containers/toolbar/CalendarToolbar';
import { AgendaView } from '../containers/AgendaView';
import EventComponent from '../containers/EventComponent';

const Localizer = momentLocalizer(moment);

const importAll = (r) => r.keys();
const markdownFiles = importAll(
  require.context('../../public/events', false, /\.md$/)
);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    const events = await Promise.all(
      markdownFiles.map((file) =>
        fetch(`/events/${file}`)
          .then((res) => res.text())
          .then((res) => fm(res))
          .then((res) => ({
            start: res.attributes.date,
            end: res.attributes.date,
            date: res.attributes.date,
            title: res.attributes.title,
            img: res.attributes.img,
            org: res.attributes.org,
            isBitcoinEvent: res.attributes.isBitcoinEvent,
            description: res.body
          }))
          .catch((error) => alert(error))
      )
    );

    this.setState((state) => ({ ...state, events }));
  }

  render() {
    const { events } = this.state;
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
                    event: EventComponent,
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
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Home);
