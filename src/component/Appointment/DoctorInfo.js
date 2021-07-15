import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleDoctorInfo, getSpeciality } from "../../redux/action";

const DoctorInfo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.singleDoctorInfo);
  const specialityData = useSelector((state) => state.data.specialityData);
  useEffect(() => {
    dispatch(getSingleDoctorInfo(1));
    dispatch(getSpeciality());
  }, []);
  console.log("======Doctor info data====", data);
  return (
    <div>
      <div className="col-md-8" key={data.id}>
        <h2 className="text-theme-colored2 mb-0">{data.name}</h2>
        <p className="text-gray-aaa">{data.expectisem}</p>
        <h2 className="mt-0">{data.about_title}</h2>
        <p className="lead">{data.about_description}</p>

        <div className="row mb-sm-30">
          {data.speciality.map((result, ind) =>
            specialityData.map((dvalue, did) => {
              if (result == dvalue.id) {
                return (
                  <div className="col-sm-6 col-md-6" key={ind}>
                    <div className="icon-box icon-left">
                      <a
                        className="icon bg-theme-colored icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none"
                        href="#"
                      >
                        <i className={dvalue.icon}></i>
                      </a>
                      <h4 className="icon-box-title mt-10">{dvalue.name}</h4>
                      <p>{dvalue.description}</p>
                    </div>
                  </div>
                );
              }
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
