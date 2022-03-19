import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Monday from './components/Monday'
import Tuesday from './components/Tuesday'
import Wednesday from './components/Wednesday'
import Thursday from './components/Thursday'
import Friday from './components/Friday'
import Saturday from './components/Saturday'
import Sunday from './components/Sunday'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Monday" element={<Monday />} />
        <Route path="/Tuesday" element={<Tuesday />} />
        <Route path="/Wednesday" element={<Wednesday />} />
        <Route path="/Thursday" element={<Thursday />} />
        <Route path="/Friday" element={<Friday />} />
        <Route path="/Saturday" element={<Saturday />} />
        <Route path="/Sunday" element={<Sunday />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


