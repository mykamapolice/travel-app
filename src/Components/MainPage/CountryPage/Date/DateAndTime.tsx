import React from 'react';
import {  Space, Button, Modal } from 'antd';
import { CalendarOutlined, FieldTimeOutlined } from '@ant-design/icons';
import Clock from './Time/Time';
import Date from "./Date/Date";
import { Regions } from './DataForDateAndTime';

interface IDateProps {
    city: string
    lang: string
}


const DateAndTime = (props: IDateProps): JSX.Element => {

    const { city, lang }: any = props;

    const C = city.split(' ').join('');

    // @ts-ignore
    const reg: string = Regions[C];


  function todayDate() {
    Modal.info({
      title: <CalendarOutlined style={{ fontSize: `3rem` }} />,
      content: <Date fontSize="4rem" reg={reg} lang={lang}/>,
    });
  }

  function todayTime() {
    Modal.info({
      title: <FieldTimeOutlined style={{ fontSize: `3rem` }} />,
      content: <Clock fontSize="4rem" reg={reg}/>,
    });
  }

    return (
        <div style={{ marginTop: '2rem' }}>
          <Space>
            <Button onClick={todayDate}><Date fontSize="1rem" reg={reg} lang={lang}
            /></Button>
            <Button onClick={todayTime}><Clock fontSize="1rem" reg={reg}/></Button>
          </Space>
        </div>
    );
};

export default DateAndTime;
