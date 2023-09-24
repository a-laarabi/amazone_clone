import React, { useState, useEffect } from "react";
import {heroSlide} from "../../../data";
import { SlideItem } from "./SlideItem";
import "./Slider.css";
import SliderBtn from "./SliderBtn";

const Slider = () => {
  const [slidIndex, setSlideIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goNext();
  //     // console.log(slidIndex)
  //   }, 2000);

  //   // return () => clearInterval(interval);
  // }, []);

  const goNext = () => {
    setSlideIndex(slidIndex + 1);

    if (slidIndex === heroSlide.length - 1) {
      setSlideIndex(1);
    }
  };

  const goPrevious = () => {
    setSlideIndex(slidIndex - 1);

    if (slidIndex === 0) {
      setSlideIndex(heroSlide.length - 1);
    }
  };

  const item = heroSlide[slidIndex];
  return (
    <div className="heroSlider">
      <SliderBtn direction={'prev'} moveSlide={goPrevious} />
      <div className="heroSliderItem" key={item.id}>
        <SlideItem item={item} />
      </div>
      <SliderBtn direction={'next'} moveSlide={goNext}/>
      {/* {heroSlide.map((item) => {
        return (
          <div className="heroSliderItem" key={item.id}>
            <SlideItem item={item} />
          </div>
        )
      })} */}
    </div>
  );
};

export default Slider;
