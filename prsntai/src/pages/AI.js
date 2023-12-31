import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './styles/style.css';
import './styles/ai.css';

const api_key = process.env.REACT_APP_OPENAI_API_KEY;
const max_length = 80;

const limit_size = (text) => {
  if (text.length > max_length) {
    let i = text.length - max_length;
    while (i>=0 && text[i] !== ' ') {
      i--;
    }
    return text.slice(i+1);
  }
  return text;
}

const listen = () => {
  SpeechRecognition.startListening({continuous: true});
}

const AI = () => {
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  const slide = [
    <h2 key="1">Title</h2>,
    <p key="2">Paragraph 1</p>,
  ];

  return (
    <div>
      <div className="nav">
          <a href="/" className="nav-element">Home</a>
          <a href="/ai" className="nav-element">AI Tool</a>
          <a href="/docs" className="nav-element">Docs</a>
          <a href="https://github.com/orgs/prsntai/repositories" target="_blank" rel="noreferrer" className="nav-right">GitHub</a>
      </div>
      <h1>AI Tool</h1>
      <div className="split">
        <div className="settings">
          <p>Microphone: {listening ? 'On' : 'Off'}</p>
          <button id="startButton" onClick={listen}>Start</button>
          <button id="stopButton" onClick={SpeechRecognition.stopListening}>Stop</button>
          <button id="newButton" onClick={resetTranscript}>Reset</button>
        </div>
        <div className="presentation">
          <div className="slide">{slide}</div>
          <p className="transcript">Transcript: {limit_size(transcript)}</p>
        </div>
      </div>

      <footer><p>&copy; 2023 Prsnt AI</p></footer>    
    </div>
  );
};

export default AI
