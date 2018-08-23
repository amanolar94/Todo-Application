import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';


const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <App />
    </div>
    
  </BrowserRouter>
), document.getElementById('app'));

module.hot.accept();