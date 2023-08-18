import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <span className="line"></span>
            <div className='about__content'>
                    <div className='text__wrapper'>
                        <div className='text'>
                            <h3>Get to know me!</h3>
                            
                    
                        </div>
                    </div>
                <div className='skills__wrapper'>
                    <h3>My Skills</h3>
                    <div className='skills__container'>
                        <div class="skills__skill">HTML</div>
                        <div class="skills__skill">CSS</div>
                        <div class="skills__skill">JavaScript</div>
                        <div class="skills__skill">React</div>
                        <div class="skills__skill">Vue</div>
                        <div class="skills__skill">SASS</div>
                        <div class="skills__skill">GIT</div>
                        <div class="skills__skill">Node</div>
                        <div class="skills__skill">Python</div>
                        <div class="skills__skill">Django</div>
                        <div class="skills__skill">PostgreSQL</div>
                        <div class="skills__skill">MongoDB</div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About;