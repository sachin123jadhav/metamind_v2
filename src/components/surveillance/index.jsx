import React from "react";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import SurveillanceArea from "./SurveillanceArea";

const Surveillance = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo
          title="Surveillance Soutions"
          innertitle="Surveillance Soutions"
        />
        <SurveillanceArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Surveillance;
