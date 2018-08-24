import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';



ReactDOM.render((
  <BrowserRouter>
    <div style={{}}>
      <App />
    </div>
    
  </BrowserRouter>
), document.getElementById('app'));

module.hot.accept();