import React from 'react';
import './styles/style.css';

const Docs = () => {
    return (
        <div>
            <div className="body">
                <div className="nav">
                    <a href="/" className="nav-element">Home</a>
                    <a href="/ai" className="nav-element">AI Tool</a>
                    <a href="/docs" className="nav-element">Docs</a>
                    <a href="https://github.com/orgs/prsntai/repositories" target="_blank" rel="noreferrer" className="nav-right">GitHub</a>
                </div>
                <h1>Documentation</h1>

                <h2>What is Prsnt AI?</h2>
                <p>A web application that uses AI to generate presentation slides live using the presenter's speech.</p>

                <h2>How does it work?</h2>
                <p>The web application transcribes the presenter's speech to text using <b>react-speech-recognition</b>. It then takes this text and passes it through a <b>fine tuned GPT-3.5</b> prompt to create content for a slideshow with image descriptions. These descriptions then get passed through <b>DALL-E</b> to generate images. All of these then get displayed using HTML and CSS styling. As of now, it is capable of displaying titles, text, bullet points, and images on each slide.</p>
                <p>More information can be found on the <a href="https://github.com/prsntai" target="_blank" rel="noreferrer">GitHub Repository</a>.</p>

                <h2>How do I use it?</h2>
                <p>To Begin:</p>
                <ol>
                    <li>Go to <a href="/ai">AI Tool</a>.</li>
                    <li>Provide a short summary of your presentation.</li>
                    <li>Enable your microphone and speak.</li>
                </ol>
                <p>Buttons:</p>
                <ul>
                    <li>Start: begin recording.</li>
                    <li>Stop: pause the presentation.</li>
                    <li>Reset: reset/switch the slide.</li>
                </ul>
            </div>
            <footer><p>&copy; 2023 Koral Kulacoglu</p></footer>    
        </div>
    );
};

export default Docs;
