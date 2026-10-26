import ScrollToTop from "@/hooks/scroll-to-top";
import Header from "@/layout/headers/header";
import React from "react";
import AboutArea from "../../../common/about-area";
import HeroSlider from "./hero-slider";
import ServicesArea from "./services-area";
import AboutMeta from "./about-meta";
import FooterTwo from "@/layout/footers/footer-2";
import SecurityArea from "./security-area";


const HomeOne = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroSlider />
            <div className="home-bg">
              <AboutArea />
              <AboutMeta />
            </div>
            <ServicesArea />

            <SecurityArea />
          </main>
          <FooterTwo />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default HomeOne;
