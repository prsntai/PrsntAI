import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './styles/style.css';
import './styles/ai.css';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const max_length = 80;
let sendPrompt = false;
let summary = "";
const prompt = [{role: "system", content: "Convert a short part of a presentation script to presentation slide format seperated by newlines. You can only use titles (title), text (text), bullet points (bullet), and image descriptions (image)."}]
let prevPrompt = null;
let imageMode = false;
let slide = [
  <h3 key="1">Sample Presentation Slide About Cats</h3>,
  <p key="2">Cats are interesting animals. Here are some facts about cats:</p>,
  <ul key="3">
    <li>The oldest known pet cat existed 9,500 years ago.</li>
    <li>Cats spend 70% of their lives sleeping.</li>
    <li>In 1963 a cat went to space.</li>
  </ul>,
  <img key="4" className="aiImg" src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg" alt="A cat"></img>,
];

const gptPrompt = async (text) => {
  const gptResponse = await openai.chat.completions.create({
    model: 'ft:gpt-3.5-turbo-1106:personal::8aCG2zq6',
    messages: text,
    max_tokens: 500,
  });

  return gptResponse.choices[0].message.content;
}

const dallePrompt = (text) => {
  if (!imageMode) return "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
  
  const response = openai.images.generate({
    model: "dall-e-2",
    prompt: text,
    n: 1,
    size: "256x256",
  });

  return response.data[0].url;
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

const format_slide = (text) => {
  let idx = 0;
  let formatted = text.split("\n");
  formatted = formatted.map((line) => {
    idx++;
    if (line.slice(0, 7) === "title: ") {
      return <h3 key={idx}>{line.slice(7)}</h3>;
    }
    else if (line.slice(0, 6) === "text: ") {
      return <p key={idx}>{line.slice(6)}</p>;
    }
    else if (line.slice(0, 8) === "bullet: ") {
      return <ul key={idx}><li>{line.slice(8)}</li></ul>;
    }
    else if (line.slice(0, 7) === "image: ") {
      const description = line.slice(7);
      const image_url = dallePrompt(description);
      return <img key={idx} className="aiImg" src={image_url} alt={description}></img>;
    }
    else {
      return <p key={idx}>{line}</p>;
    }
  });
  return formatted;
}

const AI = () => {
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!sendPrompt) {
        console.log("Not sending prompt");
        return;
      }

      let curPrompt = prompt;
      if (summary !== "") {
        curPrompt[0].content += " Script summary: " + summary + (summary[summary.length-1] === '.' ? "" : ".");
      }
    
      curPrompt = prompt.concat([{ role: "user", content: transcript }]);

      if (JSON.stringify(curPrompt) === JSON.stringify(prevPrompt)) {
        console.log("Not sending prompt (same text as before)");
        return;
      }
  
      try {
        console.log("Sending prompt");
        const slide_raw = await gptPrompt(curPrompt);
        slide = format_slide(slide_raw);
        prevPrompt = curPrompt;
      }
      catch (err) {
        console.error(err);
      }
    }, 5000); // 1000 = 1 second
  
    return () => clearInterval(interval);
  }, [transcript]);

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
        <h1 className="regular-title">AI Tool</h1>
        <div className="split">
          <div className="settings">
            <p>Microphone: {listening ? 'On' : 'Off'}</p>
            <button id="startButton" onClick={() => {
              SpeechRecognition.startListening({continuous: true});
              sendPrompt = true;
            }}>Start</button>

            <button id="stopButton" onClick={() => {
              SpeechRecognition.stopListening();
              sendPrompt = false;
            }}>Stop</button>

            <button id="resetButton" onClick={() => {
              resetTranscript(); slide = [];
            }}>Reset</button>

            <input id = "summary" type="text" placeholder="1-2 sentence summary of presentation" maxLength="100" onChange={(e)=> summary = e.target.value}
            />
          </div>
          <div className="presentation">
            <div className="slide">{slide}</div>
            <p className="transcript">Transcript: {limit_size(transcript)}</p>
          </div>
        </div>
      </div>
      <footer><p>&copy; 2023 PrsntAI</p></footer>    
    </div>
  );
};

export default AI
