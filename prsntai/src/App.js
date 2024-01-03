import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Docs from './pages/Docs';
import AI from './pages/AI';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/docs" element={<Docs/>} />
          <Route path="/ai" element={<AI/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </Router>
      <SpeedInsights />
    </>
    );
}

export default App;
