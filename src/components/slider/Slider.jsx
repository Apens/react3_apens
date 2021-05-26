import React, { Fragment, useEffect, useState } from 'react';
import data from './data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Slider = () => {
  const [slides, setSlides] = useState(data);
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
              <img src={slide.image} alt="image" />
              <p>{slide.description}</p>
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
