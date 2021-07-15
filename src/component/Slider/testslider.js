import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliderImages } from "../../redux/action";
import InfoSlider from "./InfoSlider";
import "./Slider.css";

const Slider = () => {
  const { sliderImageData } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = sliderImageData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [sliderImageData.length, index]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  useEffect(() => {
    dispatch(getSliderImages());
  }, [dispatch]);

  return (
    <section
      id="home"
      className="divider parallax layer-overlay overlay-white-5"
      style={{ backgroundPosition: "50% 59px" }}
    >
      <div>
        {sliderImageData.map((image, imgIndex) => {
          let position = "nextSlide";
          if (imgIndex === index) {
            position = "activeSlide";
          }
          if (
            imgIndex === index - 1 ||
            (index === 0 && imgIndex === sliderImageData.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={imgIndex}>
              <img
                src={image.slider_image}
                alt="banner-img"
                className="banner-img"
              />
            </article>
          );
        })}
        {/* <p className = "prev" onClick={()=>setIndex(index-1)}>
                      <ArrowBackIosIcon/>
              </p>
              <p className = "next" onClick={()=>setIndex(index+1)}>
                      <ArrowForwardIosIcon/>
              </p> */}
      </div>
      <div className="display-table">
        <InfoSlider />
      </div>
    </section>
  );
};

export default Slider;
