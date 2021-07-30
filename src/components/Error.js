import 'antd/dist/antd.css';

import React from 'react';

import { Alert } from 'antd';

// the frame
const contentStyle = {
    display: 'flex',
    justifyContent: 'center', /* horizontal center */
    alignItems: 'center'      /* vertical center */
};

class Error extends React.Component {
    
    render() {
		return (
            <Alert style={contentStyle} message="Error"
                description="You are accessing the wrong URL."
                type="error"
                showIcon
            />
        );
	}
}

export default Error;
