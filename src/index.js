import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Stories from './Fetch-TopStories';

ReactDOM.render(
  <div>
    <Header />
    <Stories />
  </div>
  , document.getElementById('root'));