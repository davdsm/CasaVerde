import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage"
import About from "./pages/about/About"
import Offices from "./pages/offices/Offices"
import IndividualOffice from "./pages/offices/individual-office/IndividualOffice"
import Gallery from "./pages/gallery/Gallery"
import ContactForm from "./pages/contacts/Contacts"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import PrivacyPolicy from "./components/footer/PrivacyPolicy"
import TermsAndConditions from "./components/footer/TermsAndConditions"
import Aos from "aos"

import "aos/src/sass/aos.scss";

const App: React.FunctionComponent = () => {

  Aos.init();

  const Layout = () => (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );

  return (
    <Routes>
      <Route element={<Layout />} >
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="offices" element={<Offices />} />
        <Route path="offices/:id" element={<IndividualOffice />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contacts" element={<ContactForm />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsAndConditions />} />
      </Route>
    </Routes>
  )
}

export default App
