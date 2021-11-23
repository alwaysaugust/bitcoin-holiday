/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { changeLocale } from 'redux/actions';
import { Nav, NavItem } from 'reactstrap';
import navItems from '../../constants/menu';
import IntlMessages from '../../helpers/IntlMessages';
import HamburgerIcon from '../../components/svg/HamburgerIcon';
import CloseIcon from '../../components/svg/CloseIcon';
import AddIcon from '../../components/svg/AddIcon';
import ShareIcon from '../../components/svg/ShareIcon';
import DarkSwitch from '../toolbar/DarkSwitch';
import ShareModal from '../ShareModal';

const TopNav = () => {
  const [enableMobileNav, setEnableMobileNav] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const showMobileNavHandler = () => {
    setEnableMobileNav(true);
  };
  const closeMobileNavHandler = () => {
    setEnableMobileNav(false);
  };
  return (
    <>
      <nav className="navbar  d-none d-md-flex">
        <div className="d-flex align-items-center navbar-left">
          <span>Made with</span>
          <img alt="CoinKite" src="/assets/img/heart.png" className="mx-1" />
          <span>by CoinKite</span>
        </div>
        <div className="navbar-right">
          <Nav>
            {navItems &&
              navItems.map((item) => {
                return (
                  <NavItem key={item.id}>
                    <a
                      key={item.id}
                      href={item.to}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <IntlMessages id={item.label} />
                    </a>
                  </NavItem>
                );
              })}
          </Nav>
        </div>
      </nav>
      <nav className="mobile-navbar d-flex d-md-none">
        {!enableMobileNav && (
          <button
            type="button"
            className="hamburger-icon-btn"
            onClick={() => {
              showMobileNavHandler();
            }}
          >
            <HamburgerIcon />
          </button>
        )}
        {enableMobileNav && (
          <button
            type="button"
            className="close-icon-btn"
            onClick={() => {
              closeMobileNavHandler();
            }}
          >
            <CloseIcon />
          </button>
        )}

        <img
          src="/assets/logos/black.png"
          alt="Bitcoin Logo"
          className="btc-logo-mobile"
        />
        {enableMobileNav && (
          <div className="mobile-navbar-content">
            <div className="mobile-navbar-li">
              <div
                className="d-flex align-items-center"
                style={{
                  paddingLeft: 20,
                  marginBottom: 10,
                  marginTop: 9,
                  fontWeight: 'bold',
                }}
              >
                <span>Made with</span>
                <img
                  alt="CoinKite"
                  src="/assets/img/heart.png"
                  className="mx-1"
                />
                <span>by CoinKite</span>
              </div>
              {navItems &&
                navItems.map((item) => {
                  return (
                    <NavItem key={item.id}>
                      <a
                        key={item.id}
                        href={item.to}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <IntlMessages id={item.label} />
                      </a>
                    </NavItem>
                  );
                })}
            </div>
            <div className="btn-board">
              <button
                type="button"
                className="btn btn-add-to-calendar"
                // onClick={() => setAddToCalendarModal(!addToCalendarModal)}
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
            <div className="mobile-theme-toggle">
              <DarkSwitch className="d-flex" />
            </div>
          </div>
        )}
      </nav>

      <ShareModal shareModal={shareModal} setShareModal={setShareModal} />
    </>
  );
};

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
export default injectIntl(
  connect(mapStateToProps, {
    changeLocaleAction: changeLocale,
  })(TopNav)
);
