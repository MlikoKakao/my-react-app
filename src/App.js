import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AnimatedBackground } from "animated-backgrounds";
import { useLocation } from "react-router-dom";

import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function AppContent() {
  const location = useLocation(); // ✅ safe here!
  const currentPath = location.pathname;

  return (
    <div className="App">
      <AnimatedBackground
        animationName="snowFall"
        theme="portfolio"
        interactive={true}
        interactionConfig={{
          effect: "gravity",
          strength: 0.8,
          radius: 150,
          continuous: true,
        }}
      />
      <header className="App-header">
        <div className="Welcome">
          <h1>Hello, my name is Mliko Kakao!</h1>
        </div>
        <div className="LowerWelcome">
          <p>Welcome to my interactive CV.</p>
        </div>

        {/* Navigation with conditional classes */}
        <nav>
          <Link
            to="/"
            className={currentPath === "/" ? "nav-visible" : "nav-faded"}
          >
            Home
          </Link>
          |
          <Link
            to="/about"
            className={
              ["/", "/about"].includes(currentPath)
                ? "nav-visible"
                : "nav-faded"
            }
          >
            About
          </Link>
          |
          <Link
            to="/skills"
            className={
              ["/", "/skills"].includes(currentPath)
                ? "nav-visible"
                : "nav-faded"
            }
          >
            Skills
          </Link>
          |
          <Link
            to="/projects"
            className={
              ["/", "/projects"].includes(currentPath)
                ? "nav-visible"
                : "nav-faded"
            }
          >
            Projects
          </Link>
          |
          <Link
            to="/contact"
            className={
              ["/", "/contact"].includes(currentPath)
                ? "nav-visible"
                : "nav-faded"
            }
          >
            Contact
          </Link>
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
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
