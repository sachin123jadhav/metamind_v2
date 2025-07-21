import Image from "next/image";
import React from "react";

// service img import
import service_img_1 from "../../../public/assets/img/Kumbh/Magh-Mela-3.jpg";
import service_img_2 from "../../../public/assets/img/Kumbh/Magh-Mela-1.jpg";


const KumbhArea = () => {
  return (
    <>
      <section className="kumbh-area pt-80 pb-80  tp-about__list">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="section-title">
                Meytamind Smart Solutions for Prayagraj Maha Kumbh Mela 2025
              </h2>
              <p className="section-subtitle">
                Harnessing technology to empower tradition, safety, and
                efficiency at Kumbh 2025.
              </p>
            </div>
          </div>

          <div className="row align-items-center mb-15">
            <div className="col-md-6  tp-about__list">
              <h3>Cyber Threat Mitigation</h3>
              <p>
                Mahakumbh 2025, scheduled to be held in Prayagraj from January
                13, 2025 to February 26, 2025, is expected to attract millions
                of pilgrims and visitors from across the globe. With such a
                large-scale event, the digital and cyber landscape becomes a
                potential target for malicious actors seeking to exploit
                vulnerabilities through fraud, impersonation, and cyberattacks.
              </p>
              <p>
                As a result, Mahakumbh 2025 needed a comprehensive,
                multi-layered approach to cybersecurity, encompassing not only
                advanced technological tools for real-time threat detection but
                also a coordinated effort between various stakeholders.
              </p>
              <p>Cyber Threat Mitigation Strategies:</p>
              <ul>
                <li>
                  <i class="fal fa-check"></i>Threat Identification & reporting
                  using Open-Source Intelligence
                </li>
                <li>
                  <i class="fal fa-check"></i>
                  Keyword-Based Scans
                </li>
                <li>
                  <i class="fal fa-check"></i>Real-Time Monitoring of digital
                  platforms, including event websites, social media accounts,
                  etc.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <Image
                src={service_img_2}
                alt="Sanitation Monitoring"
                className="about-img"
              />
            </div>
          </div>

          <div className="row tp-about__list">
            <div className="col-md-12">
              <h2>Objectives:</h2>
            </div>
            <div className="col-md-6">
              <h5 className="mt-15">1.Proactive Fraud Detection:</h5>
              <ul>
                <li>
                  <i class="fal fa-check"></i>Identify and analyze potential
                  online fraud targeting Maha Kumbh 2025 attendees, vendors, and
                  donors.
                </li>
                <li>
                  <i class="fal fa-check"></i>Detect fake websites, phishing
                  attempts, and fraudulent financial transactions.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="mt-15">2.Cyber Threat Mitigation:</h5>
              <ul>
                <li>
                  <i class="fal fa-check"></i>Provide actionable intelligence to
                  law enforcement and cyber cells to curb cybercrime during the
                  event.
                </li>
                <li>
                  <i class="fal fa-check"></i>Ensure public safety by addressing
                  digital vulnerabilities that can be exploited by malicious
                  actors.
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5 className="mt-15">3.Preservation of Trust:</h5>
              <ul>
                <li>
                  <i class="fal fa-check"></i>Safeguard the reputation of the
                  Maha Kumbh event by eliminating fraudulent activities that may
                  harm attendees.
                </li>
                <li>
                  <i class="fal fa-check"></i>Support transparency by
                  identifying authentic vendors and donation channels.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="mt-15">4.Comprehensive Monitoring:</h5>
              <ul>
                <li>
                  <i class="fal fa-check"></i>Leverage OSINT techniques to
                  monitor websites, social media platforms, and communication
                  channels for suspicious activities.
                </li>
                <li>
                  <i class="fal fa-check"></i>Analyze digital footprints to
                  trace fraud origins and patterns.
                </li>
              </ul>
            </div>
          </div>

          {/* ICT-Based Sanitation and Tentage Monitoring System */}
          <div className="row align-items-center mb-5 mt-35">
            <div className="col-md-6">
              <Image
                src={service_img_1}
                alt="Sanitation Monitoring"
                className="about-img"
              />
            </div>
            <div className="col-md-6 tp-about__list">
              <h3>ICT-Based Sanitation and Tentage Monitoring System</h3>
              <p>
                An integrated ICT platform designed to streamline the real-time
                tracking, supervision, and management of sanitation services and
                tentage infrastructure during Kumbh 2025.
              </p>
              <ul>
                <li>
                  <i class="fal fa-check"></i>
                  <i class="fal fa-check"></i>
                  Mobile app for field teams and centralized web portal for
                  administrators
                </li>
                <li>
                  <i class="fal fa-check"></i>Sector-wise live monitoring and
                  dashboards
                </li>
                <li>
                  <i class="fal fa-check"></i>Quick asset registration and issue
                  reporting
                </li>
                <li>
                  <i class="fal fa-check"></i>
                  Instant alerts to vendors for on-ground problem resolution
                </li>
                <li>
                  <i class="fal fa-check"></i>
                  Enhanced inter-departmental coordination and resource
                  optimization
                </li>
                <li>
                  <i class="fal fa-check"></i>Real-time reports to support
                  data-driven decisions
                </li>
              </ul>
              <p className="mt-15 mb-0">
                This system ensures operational transparency, improves public
                hygiene, and enhances the overall living experience for
                pilgrims.
              </p>
            </div>
          </div>

          {/* Digital Lost and Found System */}
          <div className="row align-items-center mt-25">
            <div className="col-md-6  tp-about__list">
              <h3>Digital Lost and Found System</h3>
              <p>
                An official initiative to support pilgrims in reporting and
                recovering lost persons or items during the massive gathering at
                the Maha Kumbh Mela 2025.
              </p>
              <ul>
                <li>
                  <i class="fal fa-check"></i>AI-based facial recognition for
                  identity verification
                </li>
                <li>
                  <i class="fal fa-check"></i>
                  Bhashini-enabled multilingual support for ease of access
                </li>
                <li>
                  <i class="fal fa-check"></i>Mobile app, web portal, and help
                  center integration
                </li>
                <li>
                  <i class="fal fa-check"></i>Real-time dashboards and case
                  tracking for authorities
                </li>
                <li>
                  <i class="fal fa-check"></i>
                  Location-wise trends, team performance, and recovery insights
                </li>
              </ul>
              <p className="mt-15">
                This digital system enhances safety, privacy, and
                efficiency—providing peace of mind to millions of pilgrims.
              </p>
            </div>
            <div className="col-md-6">
              <Image
                src={service_img_2}
                alt="Sanitation Monitoring"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KumbhArea;
