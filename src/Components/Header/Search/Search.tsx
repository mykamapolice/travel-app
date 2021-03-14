import React, {useEffect} from 'react';
import { Input } from 'antd';
import { CompassOutlined } from '@ant-design/icons';

const Search: React.FC = ({text,enabled,setInputText}:any) => {
  const searchRef:any = React.createRef();

  useEffect(() => {
    searchRef.current.focus({
      cursor: 'start',
    })
  }, [])

  return(<>
 <Input.Search disabled={enabled} ref={searchRef}  allowClear onChange={(e)=>setInputText(e.target.value)} value={text} placeholder="набирай сцуко" prefix={<CompassOutlined />} />
  </>
  )
}

export default Search;