import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from "@mui/icons-material/GitHub";
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer__wrapper">
            <div className='left'>
                <h2 className='title'>Ivan Kozin</h2>
                <h5 className='email'>ivan.kozin@hotmail.com</h5>
            </div>
            <div className='right'>
                <h2 className='title'>Social Media</h2>
                <div className='socialMedia'>
                    <InstagramIcon/>
                    <FacebookIcon />
                    <LinkedInIcon />
                    <GithubIcon />
                </div>
            </div>
        </div>
    )
}

export default Footer;