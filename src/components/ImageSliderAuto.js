import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

const ImageSliderAuto = (props) => {
  const SliderProperty = {
    ImageSrc: '',
  };

  const [sliderProperty, setSliderProperty] = useState(SliderProperty);

  const { ImageSrc } = sliderProperty;

  const [count, setCount] = useState(0);

  const [animationCls, setAnimationCls] = useState('displayBlock fade');

  const NextClick = () => {
    setAnimationCls(() => 'displayNone fade');
    const myTimeout = setTimeout(() => {
      setAnimationCls('displayBlock fade');
    }, 5000);

    if (count <= props.ImageData.length - 1) {
      setCount(count + 1);
    }

    if (count === props.ImageData.length - 1) {
      setCount(0);
    }
  };

  useEffect(() => {
    setSliderProperty((previous) => ({
      ...previous,

      ImageSrc: props.ImageData[count].ImageSrc,
    }));
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      NextClick();
    }, props.SlideInterValTime);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <div className="slideshow-container ">
        <div className={animationCls}>
          <img src={ImageSrc} className="imageStyle" alt="Img" />
        </div>
      </div>
    </>
  );
};

export default ImageSliderAuto;
