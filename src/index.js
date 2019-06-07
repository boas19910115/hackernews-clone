import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Header from './Header';
import Stories from './Fetch-TopStories';
import Table from './Table';

ReactDOM.render(
  <div>
    <Header />
    <Stories />
  </div>
  , document.getElementById('root'));
