import React from 'react';
import './styles/style.css';

const Home = () => {
    return (
        <div>
            <div className="body">
                <div className="nav">
                    <a href="/" className="nav-element">Home</a>
                    <a href="/ai" className="nav-element">AI Tool</a>
                    <a href="/docs" className="nav-element">Docs</a>
                    <a href="https://github.com/prsntai" target="_blank" rel="noreferrer" className="nav-right">GitHub</a>
                </div>
                <h1>Prsnt AI</h1>
                <div className="splitHome">
                    <div className="description">
                        <b>Transforming speech into presentation slides live using AI</b>
                        <br/>
                        <br/>
                        <p>In just 3 simple steps, you can give a speech, accompanied by real-time slideshows with our <a href="/ai">AI Tool</a>.</p>

                        <div className="step-tracker">
                            <div className="step">
                                <div className="step-circle">1</div>
                                <div className="step-label">Write Summary</div>
                            </div>
                            <div className="step">
                                <div className="step-circle">2</div>
                                <div className="step-label">Enable Mic</div>
                            </div>
                            <div className="step">
                                <div className="step-circle">3</div>
                                <div className="step-label">Start Speaking</div>
                            </div>
                        </div>

                    </div>
                    <img className="demoImg" src="https://i.ibb.co/Qk350xP/kitty.png" alt="Demo"/>
                </div>
            </div>
            <footer><p>&copy; 2023 Koral Kulacoglu</p></footer>    
        </div>
    );
};

export default Home;
