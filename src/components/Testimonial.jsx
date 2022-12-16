import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../img/profile1.jpg";
import profilePic2 from "../img/profile2.jpg";
import profilePic3 from "../img/profile3.jpg";
import profilePic4 from "../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import 'swiper/css';
const Testimonial = () => {
  const clients = [
    {
      img: profilePic2,
      review:
        "A brilliant React JS developer, having great experience in Web Development. The way of his working is very nice.",
    },
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet,  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
  ];
  return (
    <div id="Testimonials">
    <div className="t-wrapper">
      <div className="t-heading m-auto">
        <span>Clients always get</span>
        <span> Exceptional Work</span>

        <span>from Me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)"}}></div>
        <div className="blur t-blur2" style={{ background: "skyblue"}}></div>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
            <div className="testimonial">
            <img src={client.img} alt="" />
            <span>{client.review}</span>
            
            </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </div>
  );
};

export default Testimonial;
