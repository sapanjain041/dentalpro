import "./App.css";
import Appoinment from "./component/Appointment/Appoinment";
import ClinicInfo from "./component/ClinicInfo/ClinicInfo";
import Gallary from "./component/Gallary/Gallary";
import Header from "./component/Header/Header";
import OurService from "./component/OurService/OurService";
import Slider from "./component/Slider/Slider";
import AboutInfo from "./component/Slider/AboutInfo";
import Blog from "./component/Blog/Blog";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Slider />
        <AboutInfo />
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
