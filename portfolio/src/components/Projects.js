import '../styles/Projects.css';
import { Button } from '@mui/material';

function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <span className="line"></span>
            <div className='intro'>Through my portfolio, I'm excited to share the projects that have shaped my learning journey so far, and I can't wait to contribute my skills to projects that make a meaningful impact.</div>
            <div className='project__wrapper'>
                <div className='screenshot'>
                    <img src="/travelmap.png" alt="project" />
                </div>
                <div className='project__container'>
                    <h3>Project 1</h3>
                    <div className='description'>
                    Travel Map is a web application that allows users to track and visualize the countries they have visited. Users can create an account, log in, and mark the countries they have visited on an interactive map. The application provides a user-friendly interface to manage and showcase their travel experiences.
                    </div>
                </div>
            </div>
            <div className='project__wrapper'>
                <div className='screenshot'>
                    <img src="/travelmap.png" alt="project" />
                </div>
                <div className='project__container'>
                    <h3>Travel Map Website</h3>
                    <div className='description'>
                    Travel Map is a web application that allows users to track and visualize the countries they have visited. Users can create an account, log in, and mark the countries they have visited on an interactive map. The application provides a user-friendly interface to manage and showcase their travel experiences. Project is built on Django for Backend and vanilla JavaScript for Frontend.
                    </div>
                    <div className='links__container'>
                        <Button class="link">GitHub</Button>
                        <Button class="link">Video</Button>
                    </div>
                </div>
            </div>
            <div className='project__wrapper'>
                <div className='screenshot'>
                    <img src="/travelmap.png" alt="project" />
                </div>
                <div className='project__container'>
                    <h3>Project 3</h3>
                    <div className='description'>
                    Travel Map is a web application that allows users to track and visualize the countries they have visited. Users can create an account, log in, and mark the countries they have visited on an interactive map. The application provides a user-friendly interface to manage and showcase their travel experiences.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;