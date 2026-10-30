import Link from "next/link";
import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Wrapper from "../layout/wrapper";
import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";

const popular_pages = [
  { title: "IT Services", des: "Web, e-commerce, SaaS and software development", link: "/service" },
  { title: "E-Governance Solutions", des: "Digital platforms for government departments", link: "/e-governance-solutions" },
  { title: "Surveillance Solutions", des: "AI video analytics and social media monitoring", link: "/surveillance" },
  { title: "Cyber Security Solutions", des: "Threat detection, incident response and compliance", link: "/cyber-security" },
  { title: "WorkFusion HRMS", des: "Attendance, leave and timelog management", link: "/workfusion" },
  { title: "Document Management System", des: "Organise, tag and retrieve documents fast", link: "/document-management-system" },
];

const NotFound = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.notFound} />
      <Header />
      <main>
        <BreadcrumbTwo title="Page Not Found" innertitle="Page Not Found" />
        <div className="page-bg">
          <section className="error-page-area pt-40">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                  <div className="error-page-box text-center">
                    <p className="error-page-code" aria-hidden="true">
                      4<span>0</span>4
                    </p>
                    <h2 className="mb-15">Oops! Page not found</h2>
                    <p className="mb-30">
                      The page you are looking for may have been moved, renamed
                      or no longer exists. Try one of the links below, or get in
                      touch and we will help you find it.
                    </p>
                    <div className="error-page-actions">
                      <Link className="tp-btn tp-btn-hover alt-color-black" href="/">
                        <span className="white-text">Back To Home</span>
                        <b></b>
                      </Link>
                      <Link className="tp-btn error-page-btn-outline" href="/contact">
                        <span>Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-50">
                <div className="col-12">
                  <h3 className="error-page-subtitle text-center mb-25">Popular pages</h3>
                </div>
                {popular_pages.map((item) => (
                  <div key={item.link} className="col-lg-4 col-md-6 mb-25">
                    <Link className="error-page-link" href={item.link}>
                      <h4>{item.title}</h4>
                      <p className="mb-0">{item.des}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <FooterTwo />
    </Wrapper>
  );
};

export default NotFound;
