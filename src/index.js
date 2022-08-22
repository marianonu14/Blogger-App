import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  Routes, Route } from "react-router-dom";

import App from './App';
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import NewNote from './routes/NewNote';
import AllNotes from './routes/AllNotes';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="newnote" element={<NewNote />} />
        <Route path="allnotes" element={<AllNotes />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

