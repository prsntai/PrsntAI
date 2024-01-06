import React from 'react';
import Typewriter from 'typewriter-effect';
import './styles/style.css';
import './styles/background.css';

const Home = () => {
    return (
        <div>
            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="body">
                <div className="nav">
                    <a href="/"><img src="https://i.ibb.co/wJD0wwv/Prsnt-AILogo-No-BG.png" className="nav-logo" alt="logo"/></a>
                    <a href="/" className="nav-element">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Home
                    </a>
                    <a href="/ai" className="nav-element">AI Tool</a>
                    <a href="/docs" className="nav-element">Docs</a>
                    <a href="https://github.com/prsntai" target="_blank" rel="noreferrer" className="nav-right">GitHub</a>
                </div>
                <img className="title-logo" src="https://i.ibb.co/rMpr4fS/prsnt-AILinked-In.jpg" alt="PrsntAI Logo"/>
                <h1>PrsntAI</h1>
                <div class="typewriter">
                    <Typewriter 
                        options={{
                        strings: ['Create real-time slideshows with your voice', "Powered by ChatGPT & DALL-E"],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 25,
                    }}/>
                </div>
                <a href="/ai" className="try-button">Try it out!</a>
            </div>
            <footer><p>&copy; 2023 PrsntAI</p></footer>
        </div>
    );
};

export default Home;
