"use client";


import React, { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import CustomerSupport from "./components/CustomerSupport/CustomerSupport";
import Price from "./components/Price/Price";
import SupportTeam from "./components/SupportTeam/SupportTeam";
import Company from "./components/Company/Company";
import AOS from "aos";
import 'aos/dist/aos.css'


const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return(
    <div>
      <Hero/>
      <Features/>
      <CustomerSupport/>
      <Price/>
      <SupportTeam/>
      <Company/>
    </div>
  )
};

export default HomePage