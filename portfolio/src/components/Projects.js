import '../styles/Projects.css'

function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <span className="line"></span>
            <div className='intro'>Through my portfolio, I'm excited to share the projects that have shaped my learning journey so far, and I can't wait to contribute my skills to projects that make a meaningful impact.</div>
            <div className='project__wrapper'>
                <div className='screenshot'>
                    <img src="#" alt="project" />
                </div>
                <div className='project__container'>
                    <h3>Project 1</h3>
                    <div className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora, explicabo quae quod deserunt eius sapiente praesentium.
                    </div>
                </div>
            </div>
            <div className='project__wrapper'>
                <div className='project__container'>
                    <h3>Project 2</h3>
                    <div className='screenshot'>
                        <img src="/travelmap.png" alt="project" className='project__img'/>
                    </div>
                
                    <div className='description'>
                    Travel Map is a web application that allows users to track and visualize the countries they have visited. Users can create an account, log in, and mark the countries they have visited on an interactive map. The application provides a user-friendly interface to manage and showcase their travel experiences.
                    </div>
                </div>
            </div> 
            <div className='project__wrapper'>
                <div className='screenshot'>
                    <img src="#" alt="project" />
                </div>
                <div className='project__container'>
                    <h3>Project 3</h3>
                    <div className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora, explicabo quae quod deserunt eius sapiente praesentium.
                    </div>
                </div>
            </div> 
        </div>

    )
}

export default Projects;