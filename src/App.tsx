import React, { FC } from 'react';
import { Layout } from 'antd';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import HeaderInner from './Components/Header/Header';
import FooterInner from './Components/Footer/Footer';
import 'antd/dist/antd.css';

const {Content } = Layout;
const App: FC = () => (

        <>
            <Layout style={{minHeight:'100vh'}}>
            <HeaderInner/>
            <Content style = {{position: 'relative'}}>
                <MainPage />
            </Content>
            <FooterInner/>
            </Layout>
            </>
    );

export default App;

