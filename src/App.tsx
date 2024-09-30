import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage"
import About from "./pages/about/About"
import Offices from "./pages/offices/Offices"
import IndividualOffice from "./pages/offices/individual-office/IndividualOffice"
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
        <Route path="porque" element={<About />} />
        <Route path="escritorios" element={<Offices />} />
        <Route path="escritorios/:id" element={<IndividualOffice />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="contactos" element={<ContactForm />} />
      </Route>
    </Routes>
  )
}

export default App
