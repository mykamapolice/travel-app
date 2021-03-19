import React from 'react';
import { Select } from 'antd';
import css from './Language.module.css';

const { Option } = Select;

interface ILanguage {
  lang: string;
  setLanguage: (lang: string) => any
}

const Language = ({ lang, setLanguage }: ILanguage) => {

  return (
    <>
      <Select
        defaultValue={lang}
        size='small'
        className={css.selectBlock}
        onChange={(e: any) => {
          setLanguage(e);
        }}
      >
        <Option className={css.optionBlock} value="ru">Rus</Option>
        <Option className={css.optionBlock} value="en">Eng</Option>
        <Option className={css.optionBlock} value="be">Bel</Option>
      </Select>
    </>
  );
};

export default Language;
