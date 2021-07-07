import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliderImages } from "../../redux/action";

import InfoSlider from "./InfoSlider";

const Slider = () => {
  const images = useSelector((state) => state.data.sliderImageData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSliderImages());
  }, []);

  return (
    <section
      id="home"
      className="divider parallax layer-overlay overlay-white-5"
    >
      <div className="maximage-slider">
        <div id="maximage" className="z-index--1">
          <img src="assests/images/bg/bg4.jpg" alt="" />
          <img src="assests/images/bg/bg2.jpg" alt="" />
          <img src="assests/images/bg/bg3.jpg" alt="" />
        </div>
        <div className="fullscreen-controls">
          <a className="img-prev">
            <i className="pe-7s-angle-left"></i>
          </a>
          <a className="img-next">
            <i className="pe-7s-angle-right"></i>
          </a>
        </div>
      </div>
      <div className="display-table">
        <InfoSlider />
      </div>
    </section>
  );
};

export default Slider;
