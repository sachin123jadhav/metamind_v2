import React from "react";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";

import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import KumbhArea from "./kumbh-area";


const Kumbh2025 = () => {
  return (
    <>
      <Header />
      <main>
        <BreadcrumbTwo
          title="Products"
          innertitle="Prayagraj Maha Kumbh Mela 2025"
        />
        <KumbhArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Kumbh2025;
