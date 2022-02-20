import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./components/page/Resume";
import Contact from "./components/page/Contact";
import Portfolio from "./components/page/Portfolio";
import MyPortfolio from "./components/page/MyPortfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MyPortfolio />} exact />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
