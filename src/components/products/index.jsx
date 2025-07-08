import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import CtaArea from "../contact/cta-area";

import HeaderFive from "@/layout/headers/header-5";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import WorkFusion from "./workfusion";
import Service from "../service";
import ServiceArea from "../homes/home-2/service-area";


const Project = () => {
  return (
    <>
      <HeaderFive style_2={true} />
      <main>
        <BreadcrumbTwo title="Products" innertitle="Products" />
        <WorkFusion />
        {/* <Portfolio /> */}
        {/* <CtaArea /> */}
        <ServiceArea />
      </main>
      <FooterFive bg_style={false} />
    </>
  );
};

export default Project;
