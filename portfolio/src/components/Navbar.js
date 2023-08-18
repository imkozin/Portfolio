import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setExpandNavbar(false);
          }
        };
      
        handleResize();
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [expandNavbar]);
  
    return (  
        <div className='navbar__wrapper' id={expandNavbar ? "open" : "close"}>
            <div className="logo__container">
                <img className="logo__container-img" src='/Ivan.jpg' alt='logo'/>
                <p className='logo__container-name'>Ivan Kozin</p>
            </div>
            <div className="toggleButton">
              <Button
                onClick={() => {
                  setExpandNavbar((prev) => !prev);
                }}
              >
                <MenuIcon />
              </Button>
            </div>
            <div className="links__container">
              <Link to="/"> Home </Link>
              <Link to='/about'>About</Link>
              <Link to="/projects"> Projects </Link>
              <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
  }

  export default Navbar;