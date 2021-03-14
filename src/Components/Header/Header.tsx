import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import Search from './Search/Search';
import Language from './Language/Language';
import logo from '../../Img/logo.png';
import SearchContainer from './Search/SearchContainer'
import 'antd/dist/antd.css';


const Header = function () {

  const { i18n } = useTranslation<any>();
  
  const onLanguageChange = (lang: any) =>{
    i18n.changeLanguage(lang.value);
  };

 

  return (<>
    <Row wrap justify="center" style={{background:'#FFD97D'}}>
      <Col flex={2} style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}><img style={{width:'120px', height:'auto'}} src={logo} /></Col>

      <Col flex={2} style ={{display:'flex', alignItems:'center'}}><SearchContainer /></Col>
      <Col flex={2} style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}} ><Language onLanguageChange={onLanguageChange}/></Col>
    </Row>
  </>)
}


export default Header;