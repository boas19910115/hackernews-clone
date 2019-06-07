import React from 'react';
import 'tachyons';
import './Header.css'
import logo from './y18.gif';

const Header = () => {
  return (
    <div class="nav">
      <nav class="">
        <a href="#"><img class="logo" src={logo} width="18" height="18"/></a>
        <a class="link dim black b f6 f5-ns dib mr3" href="#" title="Home">Hacker News |</a>
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">new |</a>
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">past |</a>
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">comments |</a>
        <a class="link dim gray    f6 f5-ns dib" href="#" title="Contact">ask |</a>
      </nav>
    </div>
  )
}

export default Header;