import React from "react";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import WorkFusion from "./workfusion";
import ServiceArea from "../homes/home-2/service-area";
import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";

const Project = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo title="Products" innertitle="Products" />
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
