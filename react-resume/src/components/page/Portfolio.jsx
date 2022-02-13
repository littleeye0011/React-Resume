import { useState, useEffect } from "react";
import axios from "axios";

import ParticleBackground from "./Background/ParticleBackground";
import Footer from "../Footer";
import "./Portfolio.css";

const Project = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-project-api.littleeye0011.repl.co/project")
      .then((response) => {
        setData(response.data);
      });
  }, []);
  return (
    <div>
      <div className="particles-js">
        <ParticleBackground />
      </div>
      <h3 className="page-title">Portfolio</h3>
      <div className="card-container">
        {data.map((val, idx) => (
          <a
            key={idx}
            className="card"
            href={val.url}
            rel="noreferrer"
            target="_blank"
          >
            <div className="card-title">{val.name}</div>
            <img src={val.image} alt={val.name} />
            <small className="url">{val.url}</small>
            <div className="light-bar"></div>
          </a>
        ))}
      </div>
      <div className="footer-port-contact">
        <Footer />
      </div>
    </div>
  );
};

export default Project;
