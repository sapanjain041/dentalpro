import React from "react";

const Header = () => {
  return (
    <div>
      <header id="header" className="header">
        <div className="header-nav">
          <div className="header-nav-wrapper navbar-scrolltofixed bg-white">
            <div className="container">
              <nav id="menuzord-right" className="menuzord blue no-bg">
                <a className="menuzord-brand pull-left flip mb-15" href="">
                  <img src="assests/images/logo-wide.png" alt="" />
                </a>
                <ul className="menuzord-menu">
                  <li className="active">
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#AppoinmentForm">Appointment</a>
                  </li>
                  <li>
                    <a href="#Ourservices"> Our services</a>
                  </li>
                  <li>
                    <a href="#ClinicInfo">Clinic Info</a>
                  </li>
                  <li>
                    <a href="#Gallary">Gallery</a>
                  </li>
                  <li>
                    <a href="#Blogs"> Blogs</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
