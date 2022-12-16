import React from 'react'
import Upwork from "../img/Upwork.png";
import Fiverr from "../img/fiverr.png";
import Amazon from "../img/amazon.png";
import Shopify from "../img/Shopify.png";
import Facebook from "../img/Facebook.png";
import {motion} from "framer-motion";
import "./Work.css";
const Work = () => {
  return (
    <div id="work">
    <div className="container">
    <div className="row">
    <div className="col-lg-6">
    <h1 className='fw-bold'>Work for All these</h1>
    <h2 className='servicesheading2 fw-bold'>Brands & Clients</h2>
    <p className='para mt-4'>I am in web development for many years, and i have completed many projects. I have worked for all these brands especially UpWork.....</p>
    <button className='button mt-5'>Hire Me</button>
    </div>

   <div className=" w-right col-lg-6">
   <motion.div 
   initial={{ rotate:45 }}
   whileInView={{ rotate: 0}}
   viewport={{margin: '-40px'}}
   transition={{duration:3.5, type: 'spring'}}

   
   className="maincircle">
   <div className="seccircle">
   <img src={Upwork} alt="" />
   </div>
   <div className="seccircle">
   <img src={Fiverr} alt="" />
   </div>
   <div className="seccircle">
   <img src={Amazon} alt="" />
   </div>
   <div className="seccircle">
   <img src={Shopify} alt="" />
   </div>
   <div className="seccircle">
   <img src={Facebook} alt="" />
   </div>
   </motion.div>
   
   <div className="backcircle blueCircle"></div>
   <div className="backcircle yellowCircle"></div>
   
   
   
   
   
   
   </div>

    </div>
    </div>
    </div>
  )
}

export default Work