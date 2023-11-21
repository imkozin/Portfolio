import '../styles/Home.css';
import { Button } from '@mui/material';

function Home() {
    return (
        <div className="home">
            <div className="main">
                <h2> Hi, My Name is Ivan Kozin</h2>
                <div className="prompt">
                    <p>A Junior Full-Stack developer with a passion for creating engaging and intuitive user experiences.</p>
                </div>
                <Button className='btn' onClick={() => window.open('/Ivan_Kozin_CV.pdf')}>Download CV</Button>
            </div>
        </div>
    )
}

export default Home;