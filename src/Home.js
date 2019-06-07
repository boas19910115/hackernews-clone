import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Stories from './Fetch-TopStories';

// import Table from './Table';

const Home = () => {
  return(
    <div>
      <Stories />
    </div>
  )
}

export default Home;
