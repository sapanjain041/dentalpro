import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleClinicInfo } from "../../redux/action";

const ClinicInfo = () => {
  const data = useSelector((state) => state.data.singleClinicInfoData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleClinicInfo(1));
  }, [dispatch]);

  return (
    <section
      id="ClinicInfo"
      className="divider parallax layer-overlay overlay-white-8"
      data-bg-img="assests/images/bg/bg5.jpg"
    >
      <div className="container pb-50">
        <div className="section-content">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 mb-50">
              <div className="funfact text-center">
                <i className="flaticon-medical-male100 text-theme-colored"></i>
                <h2
                  data-animation-duration="2000"
                  data-value="10"
                  className="animate-number font-38"
                >
                  {data.professional_dentists}
                </h2>
                <h5 className="text-uppercase mb-0">Professional Dentists</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mb-50">
              <div className="funfact text-center">
                <i className="flaticon-medical-family21 text-theme-colored"></i>
                <h2
                  data-animation-duration="2000"
                  data-value="2480"
                  className="animate-number font-38"
                >
                  {data.setisfied_patient}
                </h2>
                <h5 className="text-uppercase mb-0">Setisfied Patient</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mb-50">
              <div className="funfact text-center">
                <i className="flaticon-medical-hospital17 text-theme-colored"></i>
                <h2
                  data-animation-duration="2000"
                  data-value="40"
                  className="animate-number font-38"
                >
                  {data.hospital_rooms}
                </h2>
                <h5 className="text-uppercase mb-0">Hospital Rooms</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 mb-50">
              <div className="funfact text-center">
                <i className="flaticon-medical-hospital36 text-theme-colored"></i>
                <h2
                  data-animation-duration="2000"
                  data-value="20"
                  className="animate-number font-38"
                >
                  {data.our_machines}
                </h2>
                <h5 className="text-uppercase mb-0">Our Machines</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
