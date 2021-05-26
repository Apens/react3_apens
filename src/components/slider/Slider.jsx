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
  }, [sliderIndex, slides]);

  useEffect(() => {
    let id = setInterval(() => {
      setSliderIndex(sliderIndex + 1);
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, [sliderIndex]);

  return (
    <Fragment>
      <div className="slides">
        {/* TODO : FINISH this thing tonight */}
        {slides.map((slide, index) => {
          let position = 'nextSlider';

          if (sliderIndex === index) {
            position = 'activeSlider';
          }

          if (
            sliderIndex === index - 1 ||
            (index === 0 && sliderIndex === slides.length - 1)
          ) {
            position = 'lastSlider';
          }

          return (
            <article key={index} className={`slide ${position}`}>
              <img src={slide.image} alt="image" />
              <p>{slide.description}</p>
            </article>
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
