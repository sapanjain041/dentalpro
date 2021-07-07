import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOurServices } from "../../redux/action";

const OurService = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.ourServiceData);
  useEffect(() => {
    dispatch(getOurServices());
  }, []);
  return (
    <section
      id="services"
      className="divider parallax layer-overlay overlay-theme-colored-9"
      data-bg-img="images/bg/bg3.jpg"
    >
      <div className="container pb-50">
        <div className="section-title text-center">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="text-uppercase text-white mt-0 line-height-1">
                Our Services
              </h2>
              <div className="title-icon">
                <img
                  className="mb-10"
                  src="images/title-icon-white.png"
                  alt=""
                />
              </div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                autem
                <br /> voluptatem obcaecati!
              </p>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-sm-6 col-md-4" key={index}>
                <div className="icon-box text-center p-30 bg-white mb-30 border-3px">
                  <a href="#">
                    <i className={item.service_icon}></i>
                  </a>
                  <div className="features-details">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <a
                    href="#"
                    className="btn btn-flat btn-sm btn-theme-colored mt-15  text-theme-color-2"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
