import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <img src="/" alt="logo" />
      <h1>Space Travelers Hub</h1>
      <nav>
        <ul>
          <li><Link to="/">Rockets</Link></li>
          <li><Link to="/missions">Missions</Link></li>
          <li><Link to="/myprofile">My Profile</Link></li>
        </ul>
      </nav>
    </nav>
  </header>
);

export default Header;
