import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appoinment from "./component/Appointment/Appoinment";
import ClinicInfo from "./component/ClinicInfo/ClinicInfo";
import Gallary from "./component/Gallary/Gallary";
import Header from "./component/Header/Header";
import OurService from "./component/OurService/OurService";
import Slider from "./component/Slider/Slider";
import AboutInfo from "./component/Slider/AboutInfo";
import Blog from "./component/Blog/Blog";
import Footer from "./component/Footer/Footer";
import LoadingOverlay from "react-loading-overlay";
import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const data = useSelector((state) => state.data.isloading);

  return (
    <div className="App">
      <div className="main-content">
        <LoadingOverlay
          active={data}
          spinner={<BeatLoader color="#FC9509" size="50" margin="15" />}
        >
          <Header />
          <Slider />

          <AboutInfo />
        </LoadingOverlay>

        <Appoinment />
        <OurService />
        <ClinicInfo />
        <Gallary />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
