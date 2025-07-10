import React from "react";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";


import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import SoftwareAsAProductArea from "./SoftwareAsAProductArea";
import MetamindProducts from "./MetamindProducts";



const SoftwareAsAProduct = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo
          title="Products"
          innertitle="Software as a Product"
        />
        <SoftwareAsAProductArea />
        <MetamindProducts />
     
      </main>
      <FooterTwo />
    </>
  );
};

export default SoftwareAsAProduct;
