import React from "react";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import CyberSecurityArea from "./cyber-security-area";

const CyberSecurity = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo
          title="Cyber Security Solutions"
          innertitle="Cyber Security Solutions"
        />
        <CyberSecurityArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default CyberSecurity;
