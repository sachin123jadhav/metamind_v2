import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/common/hero-banner";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react"; 
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import ServiceArea from "./service-area";
import Header from "@/layout/headers/header";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import Footer from "@/layout/footers/footer";
import FooterTwo from "@/layout/footers/footer-2";
import AllServices from "./AllServices";

const Service = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo innertitle={"Services"} />
            <AllServices />
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default Service;
