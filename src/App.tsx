import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import { auth } from './redux/actions/userActions';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import HeaderInner from './Components/Header/Header';
import FooterInner from './Components/Footer/Footer';
import 'antd/dist/antd.css';

const { Content } = Layout;

const App: FC = () => {
  const isAuth = useSelector((state: any) => state.userReducer.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderInner />
        <Content style={{ position: 'relative' }}>
          <MainPage />
        </Content>
        <FooterInner />
      </Layout>
    </>
  );
};

export default App;
