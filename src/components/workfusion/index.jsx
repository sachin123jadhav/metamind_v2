import React from "react";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import WorkFusion from "./workfusion";

import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import ServiceArea from "./service-area";

const Project = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo title="Products" innertitle="Workfusion HRMS" />
        <WorkFusion />
        {/* <Portfolio /> */}
        {/* <CtaArea /> */}
        <ServiceArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Project;
