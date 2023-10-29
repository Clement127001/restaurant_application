import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import Newsletter from "./components/Footer/Newsletter";

import FooterOverlay from "./components/Footer/FooterOverlay";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Newsletter />
    <FooterOverlay />
  </div>
);

export default App;
