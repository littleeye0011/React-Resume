import Footer from "../Footer";
import ParticleBackground from "./Background/ParticleBackground";

const MyPortfolio = () => {
  return (
    <div>
      <div className="particles-js">
        <ParticleBackground />
      </div>

      <div className="main-container">
        <article>
          <h1>Hi There !</h1>
          <h2>I AM CHITDANAI</h2>
          <h2>My friend called me 'X'</h2>
          <hr />
        </article>
        <p>
          I like Coding. I spend time to reading and watching tutorials on
          YouTube. <br />I want to develop myself better. I am seeking a
          position as a 'Front End Deverloper'.
          <br /> I hope to find this job.
        </p>
      </div>
      <div className="footer-port-contact">
        <Footer />
      </div>
    </div>
  );
};

export default MyPortfolio;
