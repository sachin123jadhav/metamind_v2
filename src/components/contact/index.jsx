import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";

import ContactFormArea from "./contact-form-area";

import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import Map from "./map";
import MapUSA from "./map-usa";

const Contact = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title="Contact Us" innertitle="Contact Us" />

            <ContactFormArea />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Map />
                </div>
                <div className="col-md-6">
                  <MapUSA />
                </div>
              </div>
            </div>
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default Contact;
