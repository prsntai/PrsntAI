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
                    <a href="https://github.com/orgs/prsntai/repositories" target="_blank" rel="noreferrer" className="nav-right">GitHub</a>
                </div>
                <h1>Prsnt AI</h1>
                <p className="description">Transforming speech into presentation slides live using AI.</p>
            </div>
            <footer><p>&copy; 2023 Prsnt AI</p></footer>    
        </div>
    );
};

export default Home;
