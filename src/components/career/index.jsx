import BreadcrumbThree from "@/common/breadcrumbs/breadcrumb-3";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import PlatformArea from "../../common/platform-area";
import JobArea from "../about/job-area";
import CtaArea from "../contact/cta-area";
import CarrerBanner from "./carrer-banner";
import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import Opportunity from "./opportunity";

const Career = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title="Career" innertitle="Career" />
            <div className="page-bg">
              <Opportunity />
              {/* <PlatformArea style_carrer={true} /> */}
              <JobArea style_carrer={true} />
            </div>
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default Career;
