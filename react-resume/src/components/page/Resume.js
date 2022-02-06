import ParticleBackground from "./Background/ParticleBackground";
import Switch from "react-switch";
import ResumeTH from "./ResumeLanguage/ResumeTH";
import ResumeEN from "./ResumeLanguage/ResumeEN";
import "./Resume.css";
import { useState } from "react";

const Resume = () => {
  const [language, setLanguage] = useState(false);
  const [showLanguage, setShowLanguage] = useState(ResumeTH);

  const toggleSwich = (checked) => {
    setLanguage(checked);
    if (checked === true) {
      setShowLanguage(ResumeEN);
    } else {
      setShowLanguage(ResumeTH);
    }
  };

  return (
    <div>
      <div className="particles-js">
        <ParticleBackground />
      </div>
      <div className="header">
        <h1 className="resume-title">Resume</h1>
        <div className="btn-switch">
          <small>ไทย</small>
          <Switch
            className="switch"
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={"#374364"}
            offColor={"#374364"}
            boxShadow="0px 0px 12px rgba(0, 20, 150, 0.8)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 20, 150, 0.4)"
            onChange={toggleSwich}
            checked={language}
          />
          <small>ENG</small>
        </div>
      </div>

      <div className="resume-container">{showLanguage}</div>
    </div>
  );
};

export default Resume;
