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

// const onFinish = (values) => {
//     alert("hi finish");
//     console.log(values);
// };
  
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userName: ''
        };
    
        // This binding is necessary to make `this` work in the callback
        this.submit = this.submit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(name);
    
        this.setState({
          [name]: value
        });
      }

    submit = (event) => {
        
        // event.preventDefault();

        alert("hi");

        const post = {
            email: this.state.email,
            password: this.state.password,
            userName: this.state.userName
        }

        
        fetch('http://localhost:8090/account/add', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post),
            })
            .then(res => res.json())
            .then(json => {
                console.log(json)
        });
    }

    render() {
		return (
            <Form {...layout} name="nest-messages" onFinish={this.submit} validateMessages={validateMessages}>
                <Form.Item name={['user', 'email']} label="Email"
                    rules={[
                    {
                        required: true,
                        type: 'email',
                    },
                    ]}
                >
                    <Input name="email" onChange={this.handleInputChange}/>
                </Form.Item>
                <Form.Item name={['user', 'password']} label="Password"
                    rules={[
                    {
                        required: true,
                        type: 'string',
                    },
                    ]}
                >
                    <Input name="password" onChange={this.handleInputChange}/>
                </Form.Item>
                <Form.Item name={['user', 'confirmPassword']} label="Confirm password"
                    rules={[
                    {
                        required: true,
                        type: 'string',
                    },
                    ]}
                >
                    <Input name="confirmPassword" onChange={this.handleInputChange}/>
                </Form.Item>
                <Form.Item name={['user', 'name']} label="Name"
                    rules={[
                    {
                        required: true,
                        type: 'string',
                    },]}
                >
                    <Input name="userName" onChange={this.handleInputChange} />
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
