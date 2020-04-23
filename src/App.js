import React from 'react';
import Typical from 'react-typical';
import smoothscroll from 'smoothscroll-polyfill';

import logo from './star.svg';
import './App.css';
import './stars.scss';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <div className="test">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome, I am <b className="highlight">Dominic Nguyen.</b>
          </h1>
          <h2>
            I am {' '}
            <Typical
              steps={[
                'a Full Stack Developer.', 2000, 
                'creative.', 2000,
                'curious.', 2000,
                'through.', 2000,
            ]}
              loop={Infinity}
              wrapper='b'
            />
          </h2>
          <button className="readmore" onClick={()=>{
            smoothscroll.polyfill(document.querySelector('#wow').scrollIntoView({ behavior: 'smooth' }));
          }}>
            <h2>Read More</h2>
          </button>

        </div>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
      </header>
      <nav className="nav">
        <ul>
          <li id="wow">test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

