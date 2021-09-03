import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

function Header() {
  return (
    <div className="d-flex align-items-center justify-content-between mx-2 py-3">
      <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="logo"
          className="logo me-2"
          style={{
            display: 'inline-block',
          }}
        />
        <h2>Space Travelers&apos; Hub</h2>
      </div>
      <nav className="justify-content-end">
        <NavLink
          exact
          to="/"
          className="px-3"
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          className="px-3 border-end border-dark"
        >
          Missions
        </NavLink>
        <NavLink
          to="/myprofile"
          className="px-3"
        >
          My Profile
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
