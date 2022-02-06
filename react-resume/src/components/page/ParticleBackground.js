import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particle-config";

const ParticleBackground = () => {
  return <Particles params={particlesConfig}></Particles>;
};

export default ParticleBackground;
