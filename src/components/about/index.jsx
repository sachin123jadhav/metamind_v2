import React from "react";
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
      <div className="">
        <BreadcrumbTwo title="About Company" innertitle="About Company" />{" "}
      </div>
      <AboutBanner />
      <AboutContent />
      <OurTeam />

      {/* <AboutAreaNew /> */}
      <FooterTwo />
    </>
  );
};

export default About;
