import React from 'react';
import Typical from 'react-typical';
import smoothscroll from 'smoothscroll-polyfill';
import { Nav, NavItem, NavLink, Container } from 'reactstrap';

import logo from './star.svg';
import './App.css';
import './stars.scss';

import CanvasJSReact from './canvasjs.react';


function App() {
  let CanvasJS = CanvasJSReact.CanvasJS;
  let CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const polly = (val) => {
    smoothscroll.polyfill(document.querySelector(val).scrollIntoView({ behavior: 'smooth' }));
  }
  const options = {
    title: {
      text: "Skills",
      titleFontFamily:'Montserrat',
    },
    axisY: {
      suffix: "%",
      gridColor: "white",
      labelFontSize: 0,
    },
    data: [{				
      type: "stackedBar",
      yValueFormatString: "#,###'%'",
      indexLabelFontColor: "white",
      indexLabel: "{y}",
      dataPoints: [
          { label: "UX/UI",  y: 65, color: "#F02D3A" },
          { label: "Git",  y: 65, color: "#30BCED" },
          { label: "API",  y: 70, color: "#F02D3A" },
          { label: "JSON",  y: 70, color: "#30BCED" },
          { label: "Node.js",  y: 70, color: "#F02D3A" },
          { label: "React",  y: 80, color: "#30BCED" },
          { label: "Javascript", y: 80, color: "#F02D3A" },
          { label: "CSS", y: 90, color: "#30BCED" },
          { label: "HTML",  y: 90, color: "#F02D3A" },
      ]
     }]
 }
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
                  'through.', 2000,
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
      <Nav className="navigation">
        <Container>
          <NavItem>
            <NavLink onClick={()=>{polly('#home')}}>HOME</NavLink>
          </NavItem>
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
        </Container>

      </Nav>
      <div id="about">
        <Container>
          <h1>About</h1>
          <img src="./me.JPG" alt="Dominc Nguyen"></img>
          <h3>I am a full stack developer with a passion for back end 
          and database creation. Take a look around my site to get to know about how I am as a developer or if you want me to help
          on a project.</h3>
          <div>
            <CanvasJSChart options = {options}/>
          </div>
        </Container>
      </div>
      <div id="projects">
        <Container>
          <h1>Projects</h1>
          <div className="articles">
            <img src="me.jpg" alt="project" width="500" height="300"></img>
            <div className="articlesContent">
              <h2>Title</h2>
              <h3>Skill</h3>
              <p>Description</p>
              <a href="wow.com"><p>Site Link</p></a>
              <a href="wow.com"><p>Github Link</p></a>
            </div>
          </div>
          <div className="articles">
            <div className="articlesContent">
              <h2>Title</h2>
              <h3>Skill</h3>
              <p>Description</p>
              <a href="wow.com"><p>Site Link</p></a>
              <a href="wow.com"><p>Github Link</p></a>
            </div>
            <img src="me.jpg" alt="project" width="500" height="300"></img>
          </div>
        </Container>
      </div>
      <div id="testimonials">
        <Container>
          <h1>Testimonials</h1>
          <div>
            <h3>"Awesome quote about me here"</h3>
            <p>- Person Name</p>
          </div>
        </Container>
      </div>
      <div id="contact">
          <h1>Contact</h1>
          <p>Want to get in touch with me or work on a project together?</p>
          <p>Email me at <a href="nguyendominic1998@gmail.com">nguyendominic1998@gmail.com</a></p>
      </div>
      <div className="footer">
        <p>Dominic Nguyen <b>©2020</b></p>
      </div>
    </div>
  );
}

export default App;

