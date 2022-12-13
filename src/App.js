import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Repaire from './pages/Repaire/Repaire'
import RepairSingle from './pages/RepairSingle/RepairSingle'
import Contacts from './pages/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import AnchorButton from "./components/AnchorButton/AnchorButton";
import Nav from './components/Nav/Nav'
import ServiceSingle from "./pages/ServiceSingle/ServiceSingle";

function App() {
  const location = useLocation();
 useEffect(() => {
 window.scrollTo(0,0);
  }, [location]);
  
  Nav();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services/:id" element={<ServiceSingle/>} />
        <Route path="/repair" element={<Repaire/>} />
        <Route path="/repair/:id" element={<RepairSingle/>} />
         <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    <AnchorButton/>
      <Footer />
    </>
  );
}
export default App;
