import { Routes, Route } from "react-router-dom";

import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import NewNote from './routes/NewNote';
import AllNotes from './routes/AllNotes';
import Note from './routes/Note';
import NotFounded from "./routes/NotFounded";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full min-h-screen flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allnotes" element={<AllNotes />} />
        <Route path="allnotes/:noteid" element={<Note />} />
        <Route path="newnote" element={<NewNote />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFounded />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
