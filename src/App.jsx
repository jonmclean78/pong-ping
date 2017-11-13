import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import  PongPing from './containers/PongPing';

export default () => (
  <div className="container">
    <h1>PongPing 🏓</h1>
    <PongPing />
  </div>

);
