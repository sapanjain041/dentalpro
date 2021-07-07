import React from "react";
import AppoinmentForm from "./AppoinmentForm";
import DoctorInfo from "./DoctorInfo";

const Appoinment = () => {
  return (
    <section id="about">
      <div className="container pt-0">
        <div className="section-content">
          <div className="row">
            <DoctorInfo />
            <AppoinmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
