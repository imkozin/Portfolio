import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from "@mui/icons-material/GitHub";
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className='left'>
                <h2 className='title'>Ivan Kozin</h2>
                <a href="mailto:ivan.kozin@hotmail.com" className='email'>
                ivan.kozin@hotmail.com
                </a>
            </div>
            <div className='right'>
                <h2 className='title'>Social Media</h2>
                <div className='socialMedia'>
                    <a href="https://www.instagram.com/im.kozin/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                    </a>
                <a href="https://www.facebook.com/ivannizok" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://www.linkedin.com/in/ivankozin/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/imkozin" target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;