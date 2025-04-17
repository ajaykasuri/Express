import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import Careers from "../Careers/careers";
import Contact from "../Contact/contact";
import ServicesModule from "../ServicesModule/services";
import Services from "../Services/Screens/Services";
import ServicesPageN from "../Serviceslatest/Screens/ServicesPageN";
import ScrollToTop from "../ScrollToTop";





const Navigate = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<ServicesModule/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/servicepage:serviceId" element={<Services />}/>
        <Route path="/servicepage" element={<Services />}/>
        <Route path="/servicepagen" element={<ServicesPageN />}/>


      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;
