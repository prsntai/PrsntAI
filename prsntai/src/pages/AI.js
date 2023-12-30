import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './styles/style.css';
import './styles/ai.css';

const listen = () => {
  SpeechRecognition.startListening({continuous: true});
}

const AI = () => {
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  return (
    <div>
      <div className="nav">
          <a href="/" className="nav-element">Home</a>
          <a href="/ai" className="nav-element">AI Tool</a>
          <a href="/docs" className="nav-element">Docs</a>
          <a href="https://github.com/orgs/prsntai/repositories" target="_blank" rel="noreferrer" className="nav-right">GitHub</a>
      </div>
      <h1>AI Tool</h1>

      <p>Microphone: {listening ? 'On' : 'Off'}</p>

      <button id="startButton" onClick={listen}>Start</button>
      <button id="stopButton" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button id="newButton" onClick={resetTranscript}>Reset</button>

      <p>Transcript: {transcript}</p>

      <footer><p>&copy; 2023 Prsnt AI</p></footer>    
    </div>
  );
};

export default AI
