import React from "react";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";


import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import DigitalMappingArea from "./digital-mapping-area";


const DigitalMapping = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo
          title="Products"
          innertitle="GIS - Digitisation of Land Records"
        />
        <DigitalMappingArea />

      </main>
      <FooterTwo />
    </>
  );
};

export default DigitalMapping;
