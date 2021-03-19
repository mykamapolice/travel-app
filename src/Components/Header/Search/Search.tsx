import React, { useEffect } from 'react';
import { Input } from 'antd';
import { CompassOutlined } from '@ant-design/icons';

const Search: React.FC = ({ text, disabled, setInputText, placeholder }: any)=>{
  const searchRef: any = React.createRef();
  const onSearchEnter = () => setInputText(searchRef.current.props.value);

  useEffect(() => {
    searchRef.current.focus({
      cursor: 'end',
    });
  });

  return (
    <>
      <Input.Search
        size = 'middle'
        disabled={disabled}
        ref={searchRef}
        allowClear
        onPressEnter={onSearchEnter}
        onSearch={onSearchEnter}
        onChange={(e) => setInputText(e.target.value)}
        value={text}
        placeholder={placeholder}
        prefix={<CompassOutlined />}
      />
    </>
  );
};

export default Search;
