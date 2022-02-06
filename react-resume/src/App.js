import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./components/page/Resume";
import Contact from "./components/page/Contact";
import Project from "./components/page/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Resume />} exact />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
