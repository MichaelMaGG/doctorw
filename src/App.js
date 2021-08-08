import './App.css';
import 'antd/dist/antd.css';

import logo from './common/images/logo512.png';

import React from 'react';

import { Image } from 'antd';

import Access from './components/access/Access'

// the frame

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
  marginRight: '40px'
}

const adStyle = {
  flex: '1',
}

const imageStyle = {
  width: '450px',
  marginLeft: '20px',
}

function App() {
  return (
        <div style={bodyStyle}>
          <div style={sideStyle}>
            <Access />
          </div>
          <div style={adStyle}>
          <Image style={imageStyle} src={logo} />
          </div>
        </div>
  );
}

export default App;
