import '../styles/Projects.css';
import { Link } from '@mui/material';

function Projects() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <span className="line"></span>
        <div className="intro">
          Through my portfolio, I'm excited to share the projects that have
          shaped my learning journey so far, and I can't wait to contribute my
          skills to projects that make a meaningful impact.
        </div>
        <div className="project__wrapper">
          <div className="screenshot">
            <img src="/ram.png" alt="project" />
          </div>
          <div className="project__container">
            <h3>Rick and Morty Wiki</h3>
            <div className="description">
              The Website is a Single Page Application dedicated to the
              fascinating world of Rick and Morty built on Nuxt 3 (VueJS 3).
              Fans of Rick and Morty should find it easy to navigate and
              discover information about their favorite characters, episodes,
              and more. Users can explore the Rick and Morty universe without
              page reloads, providing a more engaging experience. For styling I used Tailwind CSS which implements a responsive design, making the wiki
              accessible on various devices.
            </div>
            <div className="links__wrapper">
              <Link
                class="link"
                href="https://github.com/imkozin/rick-and-morty"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                class="link"
                href="https://ram-wiki.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </Link>
            </div>
          </div>
        </div>
        <div className="project__wrapper">
          <div className="screenshot">
            <img src="/rest.png" alt="project" />
          </div>
          <div className="project__container">
            <h3>E-Commerce Website</h3>
            <div className="description">
              This ecommerce project was built in the MEVN stack (MongoDB,
              Express.js, Vue.js, and Node.js). This is functional and visually
              appealing online store with the following functionality: user
              registration and management, product catalog, shopping cart.
              Utilize SASS to create a cohesive and maintainable style system
              for the application.
            </div>
            <div className="links__wrapper">
              <Link
                class="link"
                href="https://github.com/imkozin/Restaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                class="link"
                href="https://github.com/imkozin/Restaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </Link>
            </div>
          </div>
        </div>
        <div className="project__wrapper">
          <div className="screenshot">
            <img src="/start.png" alt="project" />
          </div>
          <div className="project__container">
            <h3>Manager Web Assistant</h3>
            <div className="description">
              The Manager Web Assistant is a versatile and user-friendly web
              application designed to streamline organizational management tasks
              with dynamic and responsive user interfaces. The web application
              is built with Flask on Backend and utilizes React for frontend.
              For styling I used Tailwind CSS and Material-UI for modern and
              visually appealing designs.
            </div>
            <div className="links__wrapper">
              <Link
                class="link"
                href="https://github.com/imkozin/auth-flask"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                class="link"
                href="https://www.loom.com/share/e874ff5d97b44bc098b8db3eba8a79db"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </Link>
            </div>
          </div>
        </div>
        <div className="project__wrapper">
          <div className="screenshot">
            <img src="/bookflix.png" alt="project" />
          </div>
          <div className="project__container">
            <h3>Bookflix Website</h3>
            <div className="description">
              Bookflix is an information website, where user can find a book to
              read using search engine whether by author, genre or title. The
              website allows users to share their reviews on the book, to add
              books to the favorites list and also suggests a list of movies or
              tv-shows, if there is any, based on the book. Project is built on
              MERN Stack as Final Project of Developers Institute Bootcamp
              course.
            </div>
            <div className="links__wrapper">
              <Link
                class="link"
                href="https://github.com/imkozin/Final-Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                class="link"
                href="https://www.loom.com/share/d4bfdeeb3aa14ed4a5de827959dbf693"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </Link>
            </div>
          </div>
        </div>
        <div className="project__wrapper">
          <div className="screenshot">
            <img src="/travelmap.png" alt="project" />
          </div>
          <div className="project__container">
            <h3>Travel Map Web Application</h3>
            <div className="description">
              Travel Map is a web application that allows users to track and
              visualize the countries they have visited. Users can create an
              account, log in, and mark the countries they have visited on an
              interactive map. The application provides a user-friendly
              interface to manage and showcase their travel experiences. Project
              is built on Django for Backend and vanilla JavaScript for Frontend
              as Hackathon Project during Developers Institute Bootcamp course.
            </div>
            <div className="links__wrapper">
              <Link
                class="link"
                href="https://github.com/imkozin/HACKATHON_2"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                class="link"
                href="https://www.loom.com/share/3c60fe01a43844869e1aedef0b87c02e?sid=2814f565-7c9d-40a8-8cf9-e4f11efadcdd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </Link>
            </div>
          </div>
        </div>
        <div className="project__wrapper">
          <div className="screenshot">
            <img src="/jumping-dino.png" alt="project" />
          </div>
          <div className="project__container">
            <h3>Google Jumping Dino</h3>
            <div className="description">
              This is a Python game built using the Pygame library and connected
              to an external server on Elephant SQL. The game allows users to
              control a dinosaur character and jump over obstacles to reach
              higher levels. The user's game results, such as reached levels and
              received points, are saved in the connected database.
              Additionally, the game is designed to update the in-game record
              value whenever a user sets a new high score.
            </div>
            <div className="links__wrapper">
              <Link
                class="link"
                href="https://github.com/imkozin/Python_Games/tree/main/Dino"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                class="link"
                href="https://www.loom.com/share/939bc94445ac4d62971678685c22f8e7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Projects;