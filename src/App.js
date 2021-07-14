import './App.css';
import 'antd/dist/antd.css';

import logo from './common/images/logo512.png';

import React from 'react';

import { Image } from 'antd';

import Access from './components/access/Access'

// the frame
const contentStyle = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
};

const bodyStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  width: '940px',
  marginTop: '100px',
  marginRight: '40px',
  marginBottom: '20px',
  marginLeft: '40px',
}

const sideStyle = {
  flex: '1',
  flex: '0 0 12em',
  marginRight: '40px'
}

const adStyle = {
  flex: '1',
}

const signStyle = {
  marginLeft: '22px',
  marginBottom: '24px',
  fontSize: '22px',
  lineHeight: '28px'
}

const imageStyle = {
  width: '450px',
  marginLeft: '20px',
}

function App() {
  return (
        <div style={bodyStyle}>
          <div style={sideStyle}>
            <div style={signStyle}>Sign in</div>
            <Access />
          </div>
          <div style={adStyle}>
          <Image style={imageStyle} src={logo} />
          </div>
        </div>
  );
}

export default App;
