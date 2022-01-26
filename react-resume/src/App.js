import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
import Member from "./components/page/Member";
import Product from "./components/page/Product";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Member" element={<Member />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
