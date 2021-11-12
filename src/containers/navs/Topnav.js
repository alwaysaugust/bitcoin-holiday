/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { changeLocale } from 'redux/actions';
import { Nav, NavItem } from 'reactstrap';
import navItems from '../../constants/menu';
import IntlMessages from '../../helpers/IntlMessages';

const TopNav = () => {
  return (
    <nav className="navbar fixed-top">
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
