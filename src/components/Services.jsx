import React from 'react'
import "./Services.css"
import HeartEmoji from "../img/heartemoji.png";
import Glasses from "../img/glasses.png";
import Humble from "../img/humble.png";




const Services = () => {
  return (
    <div id="Services">
    <div className="container mt-5">
    <div className="row mt-5">
    <div className="col-lg-6">
    <h1 className='servicesheading1 fw-bold mt-5'>My Awesome</h1>
    <h2 className='servicesheading2 fw-bold'>Services</h2>
    <p className='servicespara'>I am expert in making and designing the Modern and also, fully mobile responsive designs using the modern technologies.</p>
    <button className='button mt-5'>Download Cv</button>
 </div>
     <div className="containaro col-lg-6">
    <div className="cardside">
    <div className="card ms-auto">
    <div className="card-img text-center">
    <img src={Glasses} alt="" />
    <div className="card-body">
    <h4 className="card-title fw-bold">Developer</h4>
    <div className="card-text mb-3">Figma, Sketch, Photoshop, Adobe Phoyoshop, Adobe Xd!</div>
    <a Forhref="#" class="link text-decoration-none fw-bold">Read More</a>
    </div>
    </div>
    </div>
    </div>  
    </div>
  
    </div>
    </div>


<div className="containery">
<div className="row">
<div className="col-12">

<div className="cardside2">
    
    <div className="card m-auto">
    <div className="card-img text-center">
    <img src={HeartEmoji} alt="" />
    <div className="card-body">
    <h4 className="card-title fw-bold">Designs</h4>
    <div className="card-text mb-3">Html, Css, JavaScript, React Js, Node Js, Express!</div>
    <a Forhref="#" class="link text-decoration-none fw-bold">Read More</a>
    </div>
    </div>
    </div>  
    </div>
</div>
</div>
</div>



<div className="container">
<div className="row">
<div className="col-12">
<div className="cardside3">
    
<div className="card">
<div className="card-img text-center">
<img src={Humble} alt="" />
<div className="card-body">
<h4 className="card-title fw-bold">UI/UX</h4>
<div className="card-text mb-3">Modern and fully mobile responsive UI and UX designs</div>
<a Forhref="#" class="link text-decoration-none fw-bold">Read More</a>
</div>
</div>
</div>  
</div>




</div>
</div>
</div>



















    </div>
  )
}

export default Services