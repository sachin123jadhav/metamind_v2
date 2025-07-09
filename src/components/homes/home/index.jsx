import ScrollToTop from "@/hooks/scroll-to-top";
// import Footer from "@/layout/footers/footer";
import Header from "@/layout/headers/header";
import React from "react";
import AboutArea from "../../../common/about-area";
import FeatureArea from "./feature-area";
import HeroSlider from "./hero-slider";
import PriceArea from "./price-area";
import ProjectArea from "./project-area";
import RankArea from "./rank-area";
import ServicesArea from "./services-area";
import TestimonialArea from "./testimonial-area";
import Footer from "@/layout/footers/footer";
import AboutMeta from "./about-meta";
import TeamDetailsArea from "@/components/team-details/team-details-area";
import FooterTwo from "@/layout/footers/footer-2";
import SecurityArea from "./security-area";
import ServicesHome from "./services";

const HomeOne = () => {
	return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroSlider />
            <AboutArea />
            <ServicesArea />
            <ServicesHome />
            <AboutMeta />
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
