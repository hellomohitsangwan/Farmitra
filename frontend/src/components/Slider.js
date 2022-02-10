import React, { useState, useEffect } from "react";
import data from "../assets/SliderData";
import "../assets/Slider.css";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

const Slider = () => {
  const [slide, setSlide] = useState(data);
  const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = slide.length-1;
        if(index<0){
            setIndex(lastIndex)
        }
        if(index>lastIndex){
            setIndex(0)
        }
    }, [index,slide])

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index+1)
        },3000)
        return ()=> clearInterval(slider)
    },[index])
  
  return (
    <section className="slider-section">
      <div className="title"></div>
      <div className="section-centerSlider">
        {slide.map((images, imagesIndex) => {
          const { id, image } = images;
          let position = "nextSlide";
          if (imagesIndex === index) {
            position = "activeSlide";
          }
          if (
            imagesIndex === index - 1 ||
            (index === 0 && imagesIndex === images.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div className={`silde ${position}`} key={id}>
              <img src={image} alt={id} className="food-img" />
            </div>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <img src={left} alt="" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <img src={right} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
