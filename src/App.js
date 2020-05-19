import React, { useState } from 'react';
import Typical from 'react-typical';
import smoothscroll from 'smoothscroll-polyfill';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import { FaGithubSquare, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import logo from './star.svg';
import me from './me.jpg';
import carol from './img/carol.png';
import head from './img/head.jpg';
import bike from './img/bike.png';
import dogily from './img/dogily.jpg';
import paw from './img/paw.png';

import './App.css';
import './stars.scss';

import CanvasJSReact from './canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
  const polly = (val) => {
    smoothscroll.polyfill(document.querySelector(val).scrollIntoView({ behavior: 'smooth' }));
  }
  const options = {
    title: {
      text: "Skills",
      fontFamily: 'Montserrat',
    },
    axisY: {
      suffix: "%",
      gridColor: "white",
      labelFontSize: 0,
      tickThickness: 0,
      lineThickness: 0,
      fontFamily: 'Roboto',
    },
    data: [{				
      type: "stackedBar",
      yValueFormatString: "#,###'%'",
      indexLabelFontColor: "white",
      indexLabel: "{y}",
      dataPoints: [
          { label: "UX/UI",  y: 65, color: "#F02D3A" },
          { label: "Git",  y: 65, color: "#2b7cff" },
          { label: "API",  y: 70, color: "#F02D3A" },
          { label: "JSON",  y: 70, color: "#2b7cff" },
          { label: "Wordpress",  y: 70, color: "#F02D3A" },
          { label: "Node.js",  y: 70, color: "#2b7cff" },
          { label: "React",  y: 80, color: "#F02D3A" },
          { label: "Javascript", y: 80, color: "#2b7cff" },
          { label: "CSS", y: 90, color: "#F02D3A" },
          { label: "HTML",  y: 90, color: "#2b7cff" },
          
      ]
     }]
 }
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App"> 
      <header className="App-header">
        <div id="home">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="headingcontent">
            <h1>Welcome to my website</h1>
            <h1>
              I am {' '}
              <Typical
                steps={[
                  'Dominic Nguyen.',2000,
                  'a Full Stack Developer.', 2000, 
                  'creative.', 2000,
                  'curious.', 2000,
                  'thorough.', 2000,
                  'friendly.', 2000,
                  'passionate.', 2000,
              ]}
                loop={Infinity}
                wrapper='b'
                className="highlight"
              />
            </h1>
          </div>

          <button className="readmore" onClick={()=>{
            smoothscroll.polyfill(document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }));
          }}>
            <h2>Learn More</h2>
          </button>

        </div>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
      </header>
      <Navbar dark expand="md" className="navigation">
      <Container>
        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="items">
                <NavItem>
                  <NavLink onClick={()=>{polly('#about')}}>ABOUT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={()=>{polly('#projects')}}>PROJECTS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={()=>{polly('#testimonials')}}>TESTIMONIALS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={()=>{polly('#contact')}}>CONTACT</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <div id="about">
        <Container>
          <h1>About</h1>
          <div className="aboutcontent">
            <div className="aboutcontent2">
              <img src={me} alt="Dominc Nguyen" width='250px' height='300px'></img>
              <p>I am a full stack developer with a passion for back end 
              and database creation. Take a look around my site to get to know about my skills as a developer or if you want me to help
              on a project.</p>
            </div>  
            <CanvasJSChart options = {options}/>
          </div>
        </Container>
      </div>
      <div id="projects">
        <Container>
          <h1>Projects</h1>
          <div className="articles">
            <img src={carol} alt="project" />
            <div className="articlesContent">
              <h2>L Carol Holt Associates</h2>
              <h3>WordPress</h3>
              <p>Brainstormed brand and site identity with client and made sure their preferences were incorporated. I planned and designed the site, gathered assets and information for the layout, and finished the entire process in less than a month. Im currently the web master of this site providing technical assistance when needed.
              </p>
              <a href="https://lcarolholt.com/" target="_blank" rel="noopener noreferrer"><button className="abutton">Site <FaExternalLinkAlt /></button></a>
            </div>
          </div>
          <div className="articles">
            <img src={head} alt="project" />
            <div className="articlesContent">
              <h2>3 Headed Dragon</h2>
              <h3>React/Redux</h3>
              <p>This site was my final submission for Full Sail University and it displays my ability to handle large amounts of data and to keep track and store them in the database. Each item, weapon, skill, feat, and spell is tracked by a character ID, which is tied to a user ID. The site functions as a character creator for dnd 3.5e, and it allows users to keep track of their characters they can store for themselves. This site was difficult to construct, because of the asynchronous nature of javascript. I really enjoy interacting with the back end of a site and hope this shows off my skills as a developer.
              </p>
              <a href="https://github.com/fs-tech-degs/capstone-project-1911-ddnguyen98" target="_blank" rel="noopener noreferrer"><button className="abutton">Github <FaExternalLinkAlt /></button></a>
            </div>
          </div>
          <div className="articles">
            <img src={bike} alt="project" />
            <div className="articlesContent">
              <h2>Bike shop</h2>
              <h3>Javascript</h3>
              <p>When designing this site from scratch, I practiced proper html semantic code and used pre-given assets. This project also included preplanning and setting up asset boards.</p>
              <a href="https://github.com/ddnguyen98/ddnguyen98.github.io/tree/master" target="_blank" rel="noopener noreferrer"><button className="abutton">Github <FaExternalLinkAlt /></button></a>
              <a href="https://ddnguyen98.github.io/BikeShop/" target="_blank" rel="noopener noreferrer"><button className="abutton">Site <FaExternalLinkAlt /></button></a>
            </div>
          </div>
          <div className="articles">
            <img src={paw} alt="project" />
            <div className="articlesContent">
              <h2>Paw Pals</h2>
              <h3>React/Firebase</h3>
              <p>Paw pals is a site where dog owners arrange play dates with other dog owners that sign up for the site. Using data created from a random user API along with a dog api that spit out a dog based on the first letter of a user's name, a profile was created with those dog details. The list was saved to a matches page where users can view dates declined and accepted. I used Google Firebase to set up user authentication that stored user json data.</p>
              <a href="https://github.com/ddnguyen98/deployPP5" target="_blank" rel="noopener noreferrer"><button className="abutton">Github <FaExternalLinkAlt /></button></a>
              <a href="https://ddnguyen98.github.io/deployPP5/#/" target="_blank" rel="noopener noreferrer"><button className="abutton">Site <FaExternalLinkAlt /></button></a>
            </div>
          </div>
          <div className="articles">
            <img src={dogily} alt="project" />
            <div className="articlesContent">
              <h2>Dogily</h2>
              <h3>Javascript</h3>
              <p>Dogily is a concept site where users can adopt dogs based on an opening quiz. This project was a test of my designing skills, and I practiced my use of css and design principles in this project.</p>
              <a href="https://github.com/ddnguyen98/Dogily" target="_blank" rel="noopener noreferrer"><button className="abutton">Github <FaExternalLinkAlt /></button></a>
              <a href="https://ddnguyen98.github.io/Dogily/html/" target="_blank" rel="noopener noreferrer"><button className="abutton">Site <FaExternalLinkAlt /></button></a>
            </div>
          </div>
        </Container>
      </div>
      <div id="testimonials">
        <Container>
          <h1>Testimonials</h1>
          <div className="testimonialcontent">
            <h3>"I have no idea how I could work remotely without Dominic's skills."</h3>
            <p>- Tomas Salinger</p>
          </div>
          <div className="testimonialcontent">
            <h3>"Dominic’s combination of technical and motivational expertise made him the perfect partner to develop my web-site. His energy is positive and earnest and inspired me! "</h3>
            <p>- Carol Holt</p>
          </div>
        </Container>
      </div>
      <div id="contact">
        <Container>
          <h1>Contact</h1>
          <p>Want to get in touch with me or work on a project together?</p>
          <p>Email me at <a href="mailto:nguyendominic1998@gmail.com"><b className="highlight">nguyendominic1998@gmail.com</b></a></p>
          <div className="faiconcontent">
          <a href="https://github.com/ddnguyen98" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="faicon"></FaGithubSquare></a>
          <a href="https://www.linkedin.com/in/dominic-nguyen-b385b7165/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="faicon"></FaLinkedin></a>
          </div>
          <p>Dominic Nguyen <b className="highlight">©2020</b></p>
        </Container>
      </div>
    </div>
  );
}

export default App;

