import React from "react";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";


import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import DocumentManagementSystemArea from "./DocumentManagementSystemArea";


const Dms = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo
          title="Products"
          innertitle="Document Management System"
        />
        <DocumentManagementSystemArea />
       
        {/* <Portfolio /> */}
        {/* <CtaArea /> */}
     
      </main>
      <FooterTwo />
    </>
  );
};

export default Dms;
