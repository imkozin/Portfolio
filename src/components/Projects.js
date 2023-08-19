import '../styles/Projects.css';
import { Link } from '@mui/material';

function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <span className="line"></span>
            <div className='intro'>Through my portfolio, I'm excited to share the projects that have shaped my learning journey so far, and I can't wait to contribute my skills to projects that make a meaningful impact.</div>
            <div className='project__wrapper'>
                <div className='screenshot'>
                    <img src="/bookflix.png" alt="project" />
                </div>
                <div className='project__container'>
                    <h3>Bookflix Website</h3>
                    <div className='description'>
                    Bookflix is an information website, where user can find a book to read using search engine whether by author, genre or title. The website allows users to share their reviews on the book, to add books to the favorites list and also suggests a list of movies or tv-shows, if there is any, based on the book. Project is built on MERN Stack as Final Project of Developers Institute Bootcamp course.
                    </div>
                    <div className='links__wrapper'>
                        <Link class="link" href="https://github.com/imkozin/Final-Project" target="_blank" rel="noopener noreferrer">GitHub</Link>
                        <Link class="link" href="https://www.loom.com/share/3c60fe01a43844869e1aedef0b87c02e?sid=2814f565-7c9d-40a8-8cf9-e4f11efadcdd" target="_blank" rel="noopener noreferrer">Video</Link>
                    </div>
                </div>
            </div>
            <div className='project__wrapper'>
                <div className='screenshot'>
                    <img src="/travelmap.png" alt="project" />
                </div>
                <div className='project__container'>
                    <h3>Travel Map Web Application</h3>
                    <div className='description'>
                    Travel Map is a web application that allows users to track and visualize the countries they have visited. Users can create an account, log in, and mark the countries they have visited on an interactive map. The application provides a user-friendly interface to manage and showcase their travel experiences. Project is built on Django for Backend and vanilla JavaScript for Frontend as Hackathon Project during Developers Institute Bootcamp course.
                    </div>
                    <div className='links__wrapper'>
                        <Link class="link" href="https://github.com/imkozin/HACKATHON_2" target="_blank" rel="noopener noreferrer">GitHub</Link>
                        <Link class="link" href="https://www.loom.com/share/3c60fe01a43844869e1aedef0b87c02e?sid=2814f565-7c9d-40a8-8cf9-e4f11efadcdd" target="_blank" rel="noopener noreferrer">Video</Link>
                    </div>
                </div>
            </div>
            <div className='project__wrapper'>
                <div className='screenshot'>
                    <img src="/jumping-dino.png" alt="project" />
                </div>
                <div className='project__container'>
                    <h3>Google Jumping Dino</h3>
                    <div className='description'>
                    This is a Python game built using the Pygame library and connected to an external server on Elephant SQL. The game allows users to control a dinosaur character and jump over obstacles to reach higher levels. The user's game results, such as reached levels and received points, are saved in the connected database. Additionally, the game is designed to update the in-game record value whenever a user sets a new high score.
                    </div>
                    <div className='links__wrapper'>
                        <Link class="link" href="https://github.com/imkozin/Python_Games/tree/main/Dino" target="_blank" rel="noopener noreferrer">GitHub</Link>
                        <Link class="link" href="https://www.loom.com/share/939bc94445ac4d62971678685c22f8e7" target="_blank" rel="noopener noreferrer">Video</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;