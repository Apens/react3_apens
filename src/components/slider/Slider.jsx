import React, { Fragment, useEffect, useState } from 'react';
import image1 from './images/slider1.jpg';
import image2 from './images/slider2.jpg';
import image3 from './images/slider3.jpg';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Slider = () => {
  const [slides, setSlides] = useState([image1, image2, image3]);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const lastSlide = slides.length - 1;

    if (sliderIndex > lastSlide) {
      setSliderIndex(0);
    }
    if (sliderIndex < 0) {
      setSliderIndex(lastSlide);
    }
  }, [sliderIndex]);

  return (
    <Fragment>
      <div className="slides">
        {slides.map((slide, index) => {
          return (
            <div key={index} className="slide">
              <img src={slide} alt="image" />
              <p>{index}</p>
            </div>
          );
        })}
        <div className="buttons">
          <button
            className="prevImg"
            onClick={() => setSliderIndex(sliderIndex - 1)}
          >
            <FiChevronLeft />
          </button>
          <button
            className="nextImg"
            onClick={() => setSliderIndex(sliderIndex + 1)}
          >
            <FiChevronRight />
          </button>
        </div>
        ;
      </div>
    </Fragment>
  );
};

export default Slider;
