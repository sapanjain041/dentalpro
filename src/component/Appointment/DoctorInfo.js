import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorInfo } from "../../redux/action";

const DoctorInfo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.doctorInfoData);

  useEffect(() => {
    dispatch(getDoctorInfo());
  }, []);
  console.log("======Doctor info data====", data);
  return (
    <div>
      {data.map((item, index) => (
        <div className="col-md-8" key={index}>
          <h2 className="text-theme-colored2 mb-0">{item.name}</h2>
          <p className="text-gray-aaa">{item.expectisem}</p>
          <h2 className="mt-0">{item.about_title}</h2>
          <p className="lead">{item.about_description}</p>

          <div className="row mb-sm-30">
            {item.speciality.map((result) => (
              <div className="col-sm-6 col-md-6" key={result.id}>
                <div className="icon-box icon-left">
                  <a
                    className="icon bg-theme-colored icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none"
                    href="#"
                  >
                    <i className={result.icon}></i>
                  </a>
                  <h4 className="icon-box-title mt-10">{result.name}</h4>
                  <p>{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorInfo;
