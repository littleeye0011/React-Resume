import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
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
    <div className="main-card-container">
      <div className="particles-js">
        <ParticleBackground />
      </div>
      <h3 className="page-title">Portfolio</h3>
      <div className="card-container">
        {data.map((val, idx) => (
          <div key={idx}>
            <a className="card" href={val.url} rel="noreferrer" target="_blank">
              <div className="card-title">{val.name}</div>
              <img src={val.image} alt={val.name} />
              <small className="detail">{val.name}</small>
              <small className="detail">Tools : {val.tools}</small>
              <div className="light-bar"></div>
            </a>
            <div className="gitLink">
              <a href={val.sourceUrl} rel="noreferrer" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="footer-port-contact">
        <Footer />
      </div>
    </div>
  );
};

export default Project;
