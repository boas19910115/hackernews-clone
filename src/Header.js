import React from 'react';
import Comments from './Comments'
import 'tachyons';
import './Header.css'
import logo from './y18.gif';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routing'
// import { Router, Link } from '@reach/router';

const Header = () => {
  return (
    <Router>
    <div class="nav">
      <nav class="">
        <a href="#"><img class="logo" src={logo} width="18" height="18"/></a>
        <span> </span>
        <Link class="link dim black b f6 f5-ns dib mr3" href="#" title="Home">Hacker News |</Link>
        <Link class="link dim gray    f6 f5-ns dib mr3 color" href="#" title="Home">new |</Link>
        <Link class="link dim gray    f6 f5-ns dib mr3 color" href="#" title="About">past |</Link>
        <Link class="link dim gray    f6 f5-ns dib mr3 color" to='/comments' title="Store">comments |</Link>
        <Link class="link dim gray    f6 f5-ns dib color" href="#" title="Contact">ask |</Link>
      </nav>
      {/* <Route exact path='/comments' component={Comments} /> */}
    </div>
    </Router>
  )
}

export default Header;