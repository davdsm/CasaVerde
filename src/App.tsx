import React, { useEffect, useState } from "react"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, ScrollRestoration } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage"
import About from "./pages/about/About"
import IndividualOffice from "./pages/spaces/individual-space/IndividualOffice"
import Gallery from "./pages/gallery/Gallery"
import ContactForm from "./pages/contacts/Contacts"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Aos from "aos"
import { IntlProvider } from "react-intl"
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy"
import TermsAndConditions from "./pages/terms-and-conditions/TermsAndConditions"
import Spaces, { SpacesType } from "./pages/spaces/Spaces";

import LocaleEN from "./locales/en.json";
import LocalePT from "./locales/pt.json";

import "aos/src/sass/aos.scss";

export enum Locale {
  EN = "en",
  PT = "pt"
}

const App: React.FunctionComponent = () => {

  Aos.init();

  const [locale, setLocale] = useState<Locale>(Locale.EN);
  const [messages, setMessages] = useState<typeof LocaleEN>(LocaleEN);

  useEffect(() => {

    const loadLocaleData = (locale: Locale) => {
      switch (locale) {
        case Locale.EN:
          return setMessages(() => LocaleEN);
        default:
          return setMessages(() => LocalePT);
      }
    }

    const localStorageLocale = localStorage.getItem("locale") === "EN" ? Locale.EN : Locale.PT;
    setLocale(() => localStorageLocale);
    loadLocaleData(localStorageLocale);

  }, []);

  const Layout = () => (
    <React.Fragment>
      <ScrollRestoration />
      <Header locale={locale} />
      <Outlet />
      <Footer />
    </React.Fragment>
  );

  const router = 
    createBrowserRouter(
      createRoutesFromElements(
        <Route element={<Layout />} >
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="spaces" element={<Spaces spacesType={SpacesType.ALL} />} />
          <Route path="/spaces/offices" element={<Spaces spacesType={SpacesType.OFFICES} />} />
          <Route path="/spaces/offices/:id" element={<IndividualOffice />} />
          <Route path="/spaces/common-spaces" element={<Spaces spacesType={SpacesType.COMMON_SPACES} />} />
          <Route path="/spaces/common-spaces/:id" element={<IndividualOffice />} />
          <Route path="/spaces/commercial-space" element={<Spaces spacesType={SpacesType.COMMERCIAL_SPACE} />} />
          <Route path="/spaces/commercial-space/:id" element={<IndividualOffice />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contacts" element={<ContactForm />} />
          <Route path="privacy-policy" element={<PrivacyPolicy locale={locale} />} />
          <Route path="terms-conditions" element={<TermsAndConditions locale={locale} />} />
        </Route>
      )
    );

  return (
    <IntlProvider messages={messages} locale={locale}>
      <RouterProvider router={router} />
    </IntlProvider>
  )
}

export default App
