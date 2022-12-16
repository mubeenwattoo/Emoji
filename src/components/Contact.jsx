import React from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5p1x39a', 'template_4d4sf0m', form.current, 'rWailSwqCPD2BVyy_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
    <div id="contact mt-5">
    <div className="container mt-5">
    <div className="row">
    <div className="col-sm-6">
    
    <h3 className="gett fw-bold mt-5">Get In Touch</h3>
    <h2 className="get fw-bold mt-3">Contact Me</h2>
    
    </div>






    
   
    <div className="col-sm-6 mt-5">

<form ref={form} onSubmit={sendEmail} id='formid'>

<input type="text" name="user_name" className='user' placeholder='Name' />
<input type="email" name="user_email" className='user' placeholder='Email' />
<textarea name="message"  className='user' placeholder='Message'></textarea>
<input id="sendii" type="submit" value="send" className="button mb-5 ms-5" />









</form>





    
    
    
    
    
    
    </div>
    
    
    </div>
    
    
    
    
    
    
    
    </div>
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Contact
