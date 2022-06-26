import Footer from "../Footer";
import ParticleBackground from "./Background/ParticleBackground";
import { ImLocation2 } from "react-icons/im";
import { RiPhoneFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="particles-js">
        <ParticleBackground />
      </div>
      <h3 className="page-title">Contact Me</h3>
      <div className="contact-container">
        <div className="contact-card">
          <div className="icon">
            <ImLocation2 />
          </div>
          <div className="main-list">
            <ul className="list">
              <li className="first-list">ที่อยู่</li>
              <li>77 หมู่ 3 ตำบล ทรายขาว อำเภอ พาน จังหวัดเชียงราย 57120</li>
            </ul>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">
            <RiPhoneFill />
          </div>
          <div className="main-list">
            <ul className="list">
              <li className="first-list">เบอร์โทรศัพท์</li>
              <li>082-4848537</li>
            </ul>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">
            <MdMail />
          </div>
          <div className="main-list">
            <ul className="list">
              <li className="first-list">E-MAIL</li>
              <li>Kh.Chitdanai@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-port-contact">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
