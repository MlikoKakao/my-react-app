import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="Welcome">
            <h1>Hello, my name is Mliko Kakao!</h1>
          </div>
          <div className="LowerWelcome">
            <p>Welcome to my interactive CV.</p>
          </div>
          <nav>
            <Link to="/">Home</Link> |<Link to="/about">About</Link> |
            <Link to="/skills">Skills</Link> |
            <Link to="/projects">Projects</Link> |
            <Link to="/contact">Contact</Link>
          </nav>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
