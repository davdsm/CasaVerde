import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage"
import About from "./pages/about/About"
import Offices from "./pages/offices/Offices"
import IndividualOffice from "./pages/offices/IndividualOffice"
import Gallery from "./pages/gallery/Gallery"
import ContactForm from "./pages/contact-form/ContactForm"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

const App: React.FunctionComponent = () => {

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
        <Route path="spaces" element={<Offices />} />
        <Route path="spaces/:id" element={<IndividualOffice />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<ContactForm />} />
      </Route>
    </Routes>
  )
}

export default App
