import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";

import ContactFormArea from "./contact-form-area";

import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import Map from "./map";

const Contact = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title="Contact Us" innertitle="Contact Us" />

            <ContactFormArea />
            <Map />
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default Contact;
