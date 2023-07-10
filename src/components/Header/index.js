// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-cont">
    <div className="logo-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <p className="text-color">Wave</p>
    </div>
    <ul className="ul-list">
      <li className="each-list">
        <Link className="text-color" to="/">
          Home
        </Link>
      </li>
      <li className="each-list">
        <Link className="text-color" to="/about">
          About
        </Link>
      </li>

      <li className="each-list">
        <Link className="text-color" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
