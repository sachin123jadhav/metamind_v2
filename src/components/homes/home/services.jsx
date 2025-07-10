import React from 'react'
import workfusion from "../../../../public/assets/img/product/Workfusion.jpg";
import DMS from "../../../../public/assets/img/product/DMS.jpg";
import service_img_1 from "../../../../public/assets/img/service/surveillance.jpg";
import service_img_2 from "../../../../public/assets/img/service/CyberSecurity.jpg";
import Image from "next/image";

function ServicesHome() {
  return (
    <>
      <section className="home-services  pb-30">
        <div className="container z-index-5">
          {/* <div className="row">
            <div className="col-md-6">
              <div
                className="tp-payment__bg-color-3 pt-30 pb-30 pl-30 pr-30 mb-25 wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".2s"
              >
                <div className="row">
                  <div className="col-md-12"></div>
                  <div className="col-md-6">
                    <Image src={workfusion}></Image>
                  </div>
                  <div className="col-md-6">
                    <h4 className=" mb-15">WorkFusion HRMS</h4>
                    <div className="service-content">
                      <p>
                        Seamless HR, Streamlined Success: Efficient, Error Free,
                        Easy! Presenting WorkFusion HRMS India's First ever
                        fully customizable HR Management Software that
                        seamlessly integrates with all existing ERP systems. Why
                        settle for complicated HR Systems?
                      </p>
                    </div>
                    <div class="tp-feature-five-link">
                      <span>
                        <a href="/workfusion">Read More</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="tp-payment__bg-color-2 pt-30 pb-30 pl-30 pr-30 mb-25 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".2s"
              >
                <div className="row">
                  <div className="col-md-12"></div>
                  <div className="col-md-6">
                    <Image src={DMS}></Image>
                  </div>
                  <div className="col-md-6">
                    <h4 className=" mb-15">Document Management System</h4>
                    <div className="service-content">
                      <p>
                        Our Cyber Security Solutions provide comprehensive
                        protection through real-time threat detection, data
                        encryption, and incident response planning. We help
                        organizations build resilient defenses, ensure
                        regulatory compliance, and manage evolving risks across
                        networks, cloud environments, and third-party
                        ecosystems.
                      </p>
                    </div>
                    <div class="tp-feature-five-link">
                      <span>
                        <a href="/document-management-system">Read More</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-6">
              <div
                className="tp-payment__bg-color-2 pt-30 pb-30 pl-30 pr-30 mb-25 wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".2s"
              >
                <div className="row">
                  <div className="col-md-12"></div>
                  <div className="col-md-6">
                    <Image src={service_img_1}></Image>
                  </div>
                  <div className="col-md-6">
                    <h4 className=" mb-15">Surveillance Solutions</h4>
                    <div className="service-content">
                      <p>
                        Metamind Systems delivers AI-driven surveillance and
                        network analytics solutions, transforming visual and
                        digital data into real-time, actionable intelligence.
                        Our platforms empower law enforcement, intelligence, and
                        security teams with cutting-edge tools for detection,
                        prediction, and coordination.
                      </p>
                    </div>
                    <div class="tp-feature-five-link">
                      <span>
                        <a href="/surveillance">Read More</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="tp-payment__bg-color-3 pt-30 pb-30 pl-30 pr-30 mb-25 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".2s"
              >
                <div className="row">
                  <div className="col-md-12"></div>
                  <div className="col-md-6">
                    <Image src={service_img_2}></Image>
                  </div>
                  <div className="col-md-6">
                    <h4 className=" mb-15">Cyber Security</h4>
                    <div className="service-content">
                      <p>
                        Our Cyber Security Solutions provide comprehensive
                        protection through real-time threat detection, data
                        encryption, and incident response planning. We help
                        organizations build resilient defenses, ensure
                        regulatory compliance, and manage evolving risks across
                        networks, cloud environments, and third-party
                        ecosystems.
                      </p>
                    </div>
                    <div class="tp-feature-five-link">
                      <span>
                        <a href="/cyber-security">Read More</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesHome