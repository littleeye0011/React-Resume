import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import ParticleBackground from "./Background/ParticleBackground";
import Footer from "../Footer";
import "./Portfolio.css";

const Project = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const loadData = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get("https://my-project-api.littleeye0011.repl.co/project")
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
        });
    }, 3000);
  };

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, []);

  return (
    <div className="main-card-container">
      <div className="particles-js">
        <ParticleBackground />
      </div>
      <h3 className="page-title">Portfolio</h3>
      <div className="card-container">
        {isLoading === false &&
          data.map((val, idx) => (
            <div key={idx}>
              <a
                className="card"
                href={val.url}
                rel="noreferrer"
                target="_blank"
              >
                <div className="card-title">{val.name}</div>
                <img src={val.image || <Skeleton />} alt={val.name} />
                <small className="detail">{val.name || <Skeleton />}</small>
                <small className="detail">
                  Tools : {val.tools || <Skeleton />}
                </small>
                <div className="light-bar"></div>
              </a>
              <div className="gitLink">
                <a href={val.sourceUrl} rel="noreferrer" target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        {isLoading === true && (
          <>
            <div className="card">
              <h1>
                <Skeleton />
              </h1>
              <h1 className="img-loading">
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
            </div>
            <div className="card">
              <h1>
                <Skeleton />
              </h1>
              <h1 className="img-loading">
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
            </div>
            <div className="card">
              <h1>
                <Skeleton />
              </h1>
              <h1 className="img-loading">
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
            </div>
            <div className="card">
              <h1>
                <Skeleton />
              </h1>
              <h1 className="img-loading">
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
            </div>
            <div className="card">
              <h1>
                <Skeleton />
              </h1>
              <h1 className="img-loading">
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
            </div>
            <div className="card">
              <h1>
                <Skeleton />
              </h1>
              <h1 className="img-loading">
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
              <h1>
                <Skeleton />
              </h1>
            </div>
          </>
        )}
      </div>
      <div className="footer-port-contact">
        <Footer />
      </div>
    </div>
  );
};

export default Project;
