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
          <h1>HI There !</h1>
          <h2>I AM CHITDANAI</h2>
          <h2>My friend call me 'X'</h2>
          <hr />
        </article>
        <p>
          I like to Codeing, I spent time to reading and watching tutorials on
          youtube. <br />I want to develop myself,better. And I seeking a
          position 'Front end deverloper'.
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
