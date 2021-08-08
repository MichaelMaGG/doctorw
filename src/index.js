import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Error from './components/error/Error';
import CalendarCom from './components/CalendarCom';
import Register from './components/access/Register';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const loginStyle = {
  display: 'flex',
  justifyContent: 'center'
}

ReactDOM.render(
  <BrowserRouter>
    <div style={loginStyle}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/doctorw" component={App}/>
        <Route exact path="/calendar" component={CalendarCom}/>
        <Route exact path="/register" component={Register}/>
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
