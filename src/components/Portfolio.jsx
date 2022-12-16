import React from 'react'
import "./Portfolio.css";
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../img/sidebar.png";
import Ecommerce from "../img/ecommerce.png";
import HOC from "../img/hoc.png";
import MusicApp from "../img/musicapp.png";
import 'swiper/css'
const Portfolio = () => {
  return (
    <div id="Portfolio">
      <div className="portfolio mt-5">
      <span className='servicesheading1 fw-bold fs-2'>Recent Projects</span>
      <span className='servicesheading2 fw-bold fs-3'>Portfolio</span>
      <div className="container-lg">
<div className="row">
<div className="col-lg-12">
    <Swiper
    spaceBetween={30}
    slidesPerView={2}
    grabCursor={true}
    className='portfolio-slider'
    >
    <SwiperSlide>
    <img src={Sidebar} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={Ecommerce} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={HOC} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={MusicApp} alt="" />
    </SwiperSlide>

    </Swiper>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Portfolio