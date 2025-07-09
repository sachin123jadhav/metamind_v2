import React from "react";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import CyberSecurityArea from "./eGovernanceSolutionsArea";
import EGovernanceSolutionsArea from "./eGovernanceSolutionsArea";

const EGovernanceSolutions = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo
          title="E-Governance Solutions"
          innertitle="E-Governance Solutions"
        />
        <EGovernanceSolutionsArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default EGovernanceSolutions;
