import React from "react";
import "./Intro.css";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import my2 from "../img/my 2.png";
import thumbup from "../img/thumbup.png";
import Crown from "../img/crown.png";
import glassesimoji from "../img/glassesimoji.png";
import {motion} from "framer-motion"
const Intro = () => {

const transition = {duration : 2, type: 'spring'}







  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="introfirstheadig mt-5 fw-bold">Hy! I Am</h2>
          <h1 className="introsecondheading fw-bold">Mobeen Wattoo</h1>
          <p>
            Front end developer with high level of experience in web development
            and designing, producing the quality work.
          </p>
          <button className="button">Hire Me</button>
          <div className="i-icons mt-3 ms-5">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
<div className="i-right col-lg-6">

  <img src={Vector1} alt="" />
  <img src={Vector2} alt="" />
  < img
 
  src={my2} alt="" />
  <img
  
  src={glassesimoji} alt="" />
  <img src={Crown} alt="" />
  <p className="text1">Web Developer</p>
  <img 
  
  src={thumbup} alt="" />
  <p className="text2">Best Design Award</p>

  
  






</div>
       
      </div>
    </div>
  );
};

export default Intro;
