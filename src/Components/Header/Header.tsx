import React from 'react';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import Icon from '@ant-design/icons';
import PandaSvg from './Panda';
import LanguageContainer from './Language/LanguageContainer';
import SearchContainer from './Search/SearchContainer';
import Profile from './Profile/Profile';
import 'antd/dist/antd.css';
import './Header.css';

const Header = function () {
  return (
    <>
      <Row className="header" wrap justify="center">
        <Col
          flex={1}
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <NavLink to="/">
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Icon component={PandaSvg} />{' '}
              <span style={{ paddingLeft: '1rem', fontSize: '1.5rem' }}>
                Travel App
              </span>
            </div>
          </NavLink>
        </Col>

        <Col
          className="ant-col-search"
          flex={1}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <SearchContainer />
        </Col>

        <Col
          flex={1}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <LanguageContainer />
        </Col>

        <Col
          flex={1}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Profile />
        </Col>
      </Row>
    </>
  );
};

export default Header;
