import AboutArea from "@/common/about-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import TeamArea from "../homes/home-4/team-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JobArea from "./job-area";
import JourneyArea from "./journey-area";
import Header from "@/layout/headers/header";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import AboutBanner from "./about-banner";
import AboutContent from "./about-content";
import FooterTwo from "@/layout/footers/footer-2";
import OurTeam from "./team";
import AboutAreaNew from "@/common/about-area-new";
 
const About = () => {
  return (
    <>
      <Header />
      <BreadcrumbTwo title="About Company" innertitle="About Company" />{" "}
      <AboutBanner />
      <AboutContent />
      <OurTeam />
   
      <AboutAreaNew />
      <FooterTwo />
    </>
  );
};

export default About;
