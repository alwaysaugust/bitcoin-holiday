/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import moment from 'moment';
import { Button, ButtonGroup } from 'reactstrap';
import DarkSwitch from './DarkSwitch';
import ShareIcon from '../../components/svg/ShareIcon';
import AddIcon from '../../components/svg/AddIcon';
import ListViewIcon from '../../components/svg/ListViewIcon';
import GridViewIcon from '../../components/svg/GridViewIcon';
import PrevIcon from '../../components/svg/PrevIcon';
import NextIcon from '../../components/svg/NextIcon';
import CalendarIcon from '../../components/svg/CalendarIcon';
import ShareModal from '../ShareModal';

const CalendarToolbar = (toolbar) => {
  const [selectedRadio, setSelectedRadio] = useState(0);
  const [shareModal, setShareModal] = useState(false);
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };
  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };
  const goToWeekView = () => {
    setSelectedRadio(1);
    toolbar.onView('agenda');
  };
  const goToMonthView = () => {
    setSelectedRadio(0);
    toolbar.onView('month');
  };

  const label = () => {
    const date = moment(toolbar.date);
    return <span>{date.format('MMMM')} </span>;
  };

  return (
    <div className="big-calendar-header">
      <div className="d-flex justify-content-between align-items-center">
        <div className="bch-left-wrapper">
          <img
            src="/assets/logos/black.png"
            alt="Bitcoin Logo"
            className="btc-logo"
          />
          <div className="brc-header-title">
            <span className="brc-title-label">
              <b>Bitcoin</b> Holiday Calendar
            </span>
            <span className="brc-month-name-label">{label()}</span>
          </div>

          <div>
            <button
              type="button"
              className="btn calendar-prev-btn"
              onClick={goToBack}
            >
              <span className="theme-svg">
                <PrevIcon />
              </span>
            </button>
            <button
              type="button"
              className="btn calendar-next-btn"
              onClick={goToNext}
            >
              <span className="theme-svg">
                <NextIcon />
              </span>
            </button>
            <button type="button" className="btn calendar-btn">
              <span className="theme-svg">
                <CalendarIcon />
              </span>
            </button>
          </div>
        </div>

        <div className="bch-right-wrapper">
          <DarkSwitch />
          <ButtonGroup className="btn-group-toggle-view">
            <Button
              color="primary"
              className="btn-grid-view"
              onClick={goToMonthView}
              active={selectedRadio === 0}
            >
              <GridViewIcon />
            </Button>
            <Button
              color="primary"
              className="btn-list-view"
              onClick={goToWeekView}
              active={selectedRadio === 1}
            >
              <ListViewIcon />
            </Button>
          </ButtonGroup>
          <button
            type="button"
            className="btn btn-add-to-calendar"
          >
            <AddIcon />
            <span>Add to Calendar</span>
          </button>
          <button
            type="button"
            className="btn btn-share"
            onClick={() => setShareModal(!shareModal)}
          >
            <ShareIcon />
          </button>
        </div>
      </div>
      <ShareModal shareModal={shareModal} setShareModal={setShareModal} />
    </div>
  );
};
export default CalendarToolbar;
