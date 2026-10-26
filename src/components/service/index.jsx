import React from "react";
import Header from "@/layout/headers/header";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
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
