import logo from './logo.svg';
import './App.css';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

// using ES6 modules
import { BrowserRouter, Route, Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

  );
}

export default App;
