import React from "react";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";


import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import GeorefeRencingArea from "./georefe-rencing-area";



const GeorefeRencing= () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo title="Products" innertitle="Georeferencing Project" />
       <GeorefeRencingArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default GeorefeRencing;
