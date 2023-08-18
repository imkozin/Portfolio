import { Link } from 'react-scroll';
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
            <Link to='home' smooth={true} duration={500}>
            Home
            </Link>
            <Link to='about' smooth={true} duration={500}>
            About
            </Link>
            <Link to='projects' smooth={true} duration={500}>
            Projects
            </Link>
            <Link to='footer' smooth={true} duration={500}>
            Contact
            </Link>
            </div>
        </div>
    );
  }

  export default Navbar;