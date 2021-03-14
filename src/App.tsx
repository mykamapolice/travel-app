import React, { FC } from 'react';
import { Layout } from 'antd';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import HeaderInner from './Components/Header/Header';
import FooterInner from './Components/Footer/Footer'
import 'antd/dist/antd.css';

const { Header, Footer,Content} = Layout;



const App: FC = () => (
    
        <>
            <Layout style={{minHeight:'100vh'}}>
            <Header style={{background:'#FFD97D'}} className="header"><HeaderInner/></Header>
            <Content><MainPage/></Content>
            <Footer style ={{marginTop:'auto'}}><FooterInner/> </Footer>
            </Layout>
            </>
    );


export default App;


// git checkout develop;
// git pull origin develop// подтягиваю изменеения из репозитория;
// git checkout -b mybranch || git checkout mybranch (если надо подтянуть изменения в свою ветку);
// ?? git merge develop || cherry-pick;
// git push origin mybranch;
// pull request на гитхабе;