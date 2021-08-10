import 'antd/dist/antd.css';

import React, { useState } from 'react';
import axios from 'axios';

import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
};
  /* eslint-disable no-template-curly-in-string */
  
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
};

  /* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};
  
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {passStatus: false};
    
        // This binding is necessary to make `this` work in the callback
        this.submit = this.submit.bind(this);
    }

    submit = () => {
        axios.post('http://localhost:8090/user/add', {
            userName: 'Fred',
            password: 'Flintstone'
        }).then(res => {
            this.setState({ passStatus: res });
            console.log("res:" + res);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
		return (
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="Name"
                    rules={[
                    {
                        required: true,
                    },]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'password']} label="Password"
                    rules={[
                    {
                        type: 'email',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email"
                    rules={[
                    {
                        type: 'email',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'age']}
                    label="Age"
                    rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'address']} label="Address">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'note']} label="Note">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
	}
}

export default Register;
