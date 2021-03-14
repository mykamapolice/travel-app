import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface ILanguage {
  onLanguageChange: (lang: string) => void;
}

const Language: React.FC<ILanguage> = (props: ILanguage) => {
  return (
    <>
      <Select
        labelInValue
        defaultValue="ru"
        style={{ width: 120 }}
        onChange={props.onLanguageChange}
      >
        <Option value="ru">Rus</Option>
        <Option value="en">Eng</Option>
        <Option value="by">Bel</Option>
      </Select>
    </>
  );
};

export default Language;
