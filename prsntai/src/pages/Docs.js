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
                <p>The web application transcribes a presentation speech to text. It then takes this text and passes it through a fine tuned GPT-3.5 prompt create content for a slideshow which then gets displayed. It is capable of displaying a title, text, bullet points, and images on each slide.</p>
                <p>More information can be found on the <a href="https://github.com/orgs/prsntai/repositories" target="_blank" rel="noreferrer">GitHub Repository</a>.</p>

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
                    <li>Next: create a new slide.</li>
                    <li>Finish: end the presentation.</li>
                </ul>
            </div>
            <footer><p>&copy; 2023 Prsnt AI</p></footer>    
        </div>
    );
};

export default Docs;
