import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAboutInfo } from "../../redux/action";
import { Slide } from "@material-ui/core";
const AboutInfo = () => {
  const distpatch = useDispatch();
  const data = useSelector((state) => state.data.aboutInfoData);
  const isloading = useSelector((state) => state.data.isloading);
  useEffect(() => {
    distpatch(getAboutInfo());
  }, [distpatch]);

  console.log("======data =====", data);

  return (
    <section id="AboutInfo">
      <div className="container">
        <div className="section-content">
          <div
            className="row equal-height-inner"
            data-margin-top="-150px"
            style={{ marginTop: "-150px" }}
          >
            {data &&
              data.map((item, index) => (
                <Slide
                  key={index}
                  in={true}
                  direction="right"
                  timeout={{ enter: 1000 }}
                >
                  <div className="col-sm-12 col-md-3 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay1">
                    <div className="sm-height-auto bg-theme-colored">
                      <div className="text-center pt-30 pb-sm-30">
                        <div className="icon-box text-center">
                          <a
                            className="icon bg-silver-light icon-circled"
                            href="#"
                          >
                            {" "}
                            <i className={item.icon}></i>{" "}
                          </a>
                          <h3 className="text-white">{item.title}</h3>
                          <p className="text-white">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
