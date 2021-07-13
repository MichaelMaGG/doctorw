import 'antd/dist/antd.css';

import React from 'react';

import { Layout } from 'antd';
import { Carousel } from 'antd';

import { SignInCom } from './SignIn';

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

class AccessCom extends React.Component {
    render() {
		return (
			<div>
                <SignInCom />
            </div>
        );
	}
}

export default AccessCom;
