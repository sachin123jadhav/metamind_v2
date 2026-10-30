import React from "react";
import JobArea from "../about/job-area";
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
            <BreadcrumbTwo title="Careers" innertitle="Careers at Metamind" />
            <div className="page-bg">
              <Opportunity />
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
