import React, { useState } from "react";
import Image from "next/image";

import SoftwareProductDevelopment from "../../../public/assets/img/service/Steps-of-Software-Development-Process.jpg";
import SAS from "../../../public/assets/img/service/Software as a Service.webp";
import WebDevelopment from "../../../public/assets/img/service/Web-Development.webp";
import ECommerceDevelopment from "../../../public/assets/img/service/ECommerceDevelopment.webp";
import DigitalTransformationServices from "../../../public/assets/img/service/DigitalTransformationServices.jpg";

function AllServices() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <>
      <section className="page-bg pt-50 pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h5 className="title text-center mb-25">
                Driving Innovation and Growth Across Industries
              </h5>
              <h5 className="text-center fw-normal mt-10">
                From Software Product Development to Digital Transformation, we
                provide a full spectrum of services that empower businesses to
                thrive in the digital age. Whether it's SaaS, Web Development,
                E-Commerce, or Digital Transformation, our solutions are
                designed to scale, innovate, and deliver results.
              </h5>
            </div>
          </div>

          <div className="row mt-50 align-items-center" id="spd">
            <div className="col-md-6">
              <Image src={SoftwareProductDevelopment} />
            </div>
            <div className="col-md-6">
              <h4 className="mb-25 sm-mt-20 sm-mb-10">
                Software Product Development
              </h4>
              <p>
                Software Product Development involves the process of designing,
                creating, testing, and deploying software applications that meet
                specific business or user needs. From initial concept to launch,
                it includes stages like planning, coding, debugging, and
                refinement to ensure a high-quality, functional product. This
                process focuses on creating innovative, scalable, and reliable
                solutions that enhance user experience and drive business
                success.
              </p>
            </div>
          </div>

          <div
            className="row mt-50 align-items-center flex-md-row-reverse"
            id="saas"
          >
            <div className="col-md-6">
              <Image className="about-img" src={SAS} />
            </div>
            <div className="col-md-6">
              <h4 className="mb-25 sm-mt-20 sm-mb-10">
                Software as a Service (SaaS)
              </h4>
              <p>
                Software as a Service (SaaS) is a cloud-based model that
                delivers software applications over the internet. It eliminates
                the need for installation or maintenance, with the provider
                managing updates, security, and infrastructure. SaaS offers
                flexibility, scalability, and cost-efficiency, making it ideal
                for various business functions like CRM, accounting, and project
                management.
              </p>
            </div>
          </div>

          <div className="row mt-50 align-items-center" id="wd">
            <div className="col-md-6">
              <Image className="about-img" src={WebDevelopment} />
            </div>
            <div className="col-md-6">
              <h4 className="mb-25 sm-mt-20 sm-mb-10">Web Development</h4>
              <p>
                State-of-the-art web solutions that combine aesthetic design
                with powerful functionality to create engaging digital
                experiences. At Metamind Systems Pvt. Ltd., we specialize in
                creating dynamic and responsive websites.
              </p>
            </div>
          </div>

          <div
            className="row mt-50 align-items-center flex-md-row-reverse"
            id="ecd"
          >
            <div className="col-md-6">
              <Image className="about-img" src={ECommerceDevelopment} />
            </div>
            <div className="col-md-6">
              <h4 className="mb-25 sm-mt-20 sm-mb-10">
                E-Commerce Development
              </h4>
              <p>
                Custom e-commerce platforms that drive sales, enhance customer
                experience, and streamline business operations. Transform your
                online business with our comprehensive e-commerce website
                development services.
              </p>
            </div>
          </div>
          <div className="row mt-50 align-items-center" id="dts">
            <div className="col-md-6">
              <Image
                className="about-img"
                src={DigitalTransformationServices}
              />
            </div>
            <div className="col-md-6">
              <h4 className="mb-25 sm-mt-20 sm-mb-10">
                Digital Transformation Services
              </h4>
              <p>
                Strategic digital solutions that modernize your business
                processes and create sustainable competitive advantages. Embrace
                the future of business operations with Metamind Systems Pvt.
                Ltd.'s digital transformation services.
              </p>
            </div>
          </div>

          {/* <div className="about-content">
            <div className="row offering-sec pb-30 justify-content-center mt-30">
              {ServicesData.map((service, index) => (
                <div
                  key={service.id}
                  className={`col-md-4 col-lg-4 col-xl-4 lg-mb-30 fade-in mb-25`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <ServiceBox
                    id={service.id}
                    title={service.title}
                    content={service.content}
                    icon={service.icon}
                    expandedId={expandedId}
                    setExpandedId={setExpandedId}
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default AllServices;
