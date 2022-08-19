import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React,  { useRef } from 'react'
import {  AiOutlineLeft ,AiOutlineRight } from "react-icons/ai";

const ImageSlider = ({images}) => {
    const customeSlider =useRef();
    const gotoNext = () => {
        customeSlider.current.slickNext()
      }
    
      const gotoPrev = () => {
        customeSlider.current.slickPrev()
      }
    

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay:false,
    autoplaySpeed:3000,

};
return (
	<>
	<div className="tag">
		<h1>Image Gallery</h1>
	</div>
	<div className="imgslider">
    <button className="btn btn-left" onClick={()=>gotoPrev()}><AiOutlineLeft/></button>
    <button className="btn btn-right" onClick={()=>gotoNext()}>< AiOutlineRight/></button>
    
		<Slider {...settings}  ref={customeSlider}>
		{images.map((item,index) => (
			<div key={item} index={item.id}>
			<img src={item.src} alt={item.alt} />
			</div>
		))}
		</Slider>
	</div>
		</>
)
}
export default ImageSlider;
