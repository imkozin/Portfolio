import { Link } from "react-scroll";
import '../styles/Nav.css';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";


const Navbar = () => {
    const [mobile, setMobile] = useState(false);
  
    return (
        <nav>
          <div className="logo__container">
                <img className="logo__container-img" src='/Ivan.jpg' alt='logo'/>
                <p className='logo__container-name'>Ivan Kozin</p>
            </div>
            <Button className='menu' onClick={() => setMobile(!mobile)}>
            {mobile ? <CloseIcon /> : <MenuIcon />}
            </Button>
          <ul className={mobile ? "open" : ""}>
            <li>
              <Link to='home' smooth={true} duration={500}>
            Home
            </Link>
            </li>
            <li>
              <Link to='about' smooth={true} duration={500}>
            About
            </Link>
            </li>
            <li>
              <Link to='projects' smooth={true} duration={500}>
            Projects
            </Link>
            </li>
            <li>
            <Link to='footer' smooth={true} duration={500}>
            Contact
            </Link>
            </li>
          </ul>
        </nav>
      );
    };

export default Navbar