import { useState } from "react";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#333" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <div className="logo__container">
                <img className="logo__container-img" src='/Ivan.jpg' alt='logo'/>
                <p className='logo__container-name'>Ivan Kozin</p>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to='home' smooth={true} duration={500}
                  // className={({ isActive }) =>
                  //   "nav-links" + (isActive ? " activated" : "")
                  // }
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to='about' smooth={true} duration={500}
                  // className={({ isActive }) =>
                  //   "nav-links" + (isActive ? " activated" : "")
                  // }
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to='projects' smooth={true} duration={500}
                  // className={({ isActive }) =>
                  //   "nav-links" + (isActive ? " activated" : "")
                  // }
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="footer" smooth={true} duration={500}
                  className="nav-links"
                  // className={({ isActive }) =>
                  //   "nav-links" + (isActive ? " activated" : "")
                  // }
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;