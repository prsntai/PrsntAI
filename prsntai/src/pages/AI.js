import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './styles/style.css';
import './styles/ai.css';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
const max_length = 80;
let summary = "";
let slide = [
  <h2>Sample Presentation Slide About Cats</h2>,
  <p>Cats are interesting animals. Here are some facts about cats:</p>,
  <ul>
    <li>The oldest known pet cat existed 9,500 years ago.</li>
    <li>Cats spend 70% of their lives sleeping.</li>
    <li>In 1963 a cat went to space.</li>
  </ul>,
  <img src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg"></img>,
];

const gptPrompt = async (text) => {
  const prompt = [{ role: "user", content: "Say this is a test" }]
  
  const gptResponse = await openai.complete({
    model: 'ft:gpt-3.5-turbo-1106:personal::8aCG2zq6',
    prompt: text,
    maxTokens: 100,
  });
  return gptResponse.data.choices[0].text;
}

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

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will be called every 2 seconds');
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);

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
          <button id="resetButton" onClick={() => { resetTranscript(); slide = []; }}>Reset</button>

          <input id = "summary" type="text" placeholder="1-2 sentence summary of presentation" onChange={(e)=> summary = e.target.value}
          />

        </div>
        <div className="presentation">
          <div className="slide">{slide.map((element, index) => (<div key={index}>{element}</div>))}</div>
          <p className="transcript">Transcript: {limit_size(transcript)}</p>
        </div>
      </div>

      <footer><p>&copy; 2023 Prsnt AI</p></footer>    
    </div>
  );
};

export default AI
