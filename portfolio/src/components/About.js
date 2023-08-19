import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <span className="line"></span>
            <div className='about__content'>
                    <div className='text__wrapper'>
                        <h3>Get to know me!</h3>
                        <p className='text__container'> Hey! I'm a Frontend / Fullstack Developer located in Israel. I specialize in building responsive websites and web applications using modern web technologies such as HTML, CSS, and JavaScript. With an eye for detail and a focus on usability, I strive to create visually stunning designs that are both functional and intuitive to use.  I'm continually expanding my skill set by exploring modern frameworks and learning new technologies. Thank you for stopping by – feel free to browse through my work, and if you're interested in collaboration do not hesitate to contact me.
                        </p>
                    </div>
                <div className='skills__wrapper'>
                    <h3>My Skills</h3>
                    <div className='skills__container'>
                        <div className="skills__skill">CSS</div>
                        <div className="skills__skill">JavaScript</div>
                        <div className="skills__skill">HTML</div>
                        <div className="skills__skill">React</div>
                        <div className="skills__skill">Vue</div>
                        <div className="skills__skill">SASS</div>
                        <div className="skills__skill">GIT</div>
                        <div className="skills__skill">Node</div>
                        <div className="skills__skill">Python</div>
                        <div className="skills__skill">Django</div>
                        <div className="skills__skill">PostgreSQL</div>
                        <div className="skills__skill">MongoDB</div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About;