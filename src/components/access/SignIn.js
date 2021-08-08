import 'antd/dist/antd.css';

import React from 'react';
import axios from 'axios';

import { withRouter } from 'react-router-dom'

import { Form, Input, Button, Checkbox } from 'antd';

// the frame
const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const buttonStyle = {
    width: '100%'
}

const signStyle = {
    fontSize: '22px',
    lineHeight: '28px'
}

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {passStatus: false};
    
        // This binding is necessary to make `this` work in the callback
        this.submit = this.submit.bind(this);
        this.register = this.register.bind(this);
    }
    
    submit = () => {
        axios.post('http://localhost:8090/user/check', {
            userName: 'Fred',
            password: 'Flintstone'
          }).then(res => {
				    this.setState({ passStatus: res });
                    console.log("res:" + res);
			    }
			).catch(function (error) {
				console.log(error);
			});
    }

    register = () => {
        console.log(this.props);
        this.props.history.push({
            pathname : '/register'
        });
    }

    render() {
		return (
			<Form name="basic" labelCol={{span: 8,}}
                wrapperCol={{span: 16,}}
                initialValues={{remember: true,}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item name="signin" wrapperCol={{offset: 8, span: 16,}}>
                    <div style={signStyle}>
                        Sign In
                    </div>
                </Form.Item>
                <Form.Item label="Username" name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}>
                        <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button style={buttonStyle} type="primary" htmlType="submit" onClick={this.submit}>
                        Sign In
                    </Button>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button style={buttonStyle} type="default" htmlType="button" onClick={this.register}>
                        Register 
                    </Button>

                </Form.Item>
            </Form>
            );
	}
}

export default withRouter(SignIn);
