import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route } from 'react-router-dom'

const loginStyle = {
  display: 'flex',
  justifyContent: 'center'
}

ReactDOM.render(
  <BrowserRouter>
    <div style={loginStyle}>
      <Route exact path="/" component={App}/>
      <Route path="/doctorw" component={App}/>
      <Route component={Error} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
