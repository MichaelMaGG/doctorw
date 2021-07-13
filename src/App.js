import './App.css';
import 'antd/dist/antd.css';

import React from 'react';

import { Layout } from 'antd';
import { Carousel } from 'antd';

import { AccessCom } from './components/access/Access'

const { Header, Footer, Sider, Content } = Layout;

// the frame
let screenStyle = {
	margin: 'auto',
	width: '100%'
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function App() {
  return (
      <div style={contentStyle}>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>
              <AccessCom />
            </Sider>
            <Content>
              <PicCarousel />
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
  );
}

class PicCarousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
  }

	render() {
		return (
			<Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
		);
	}
}

export default App;
