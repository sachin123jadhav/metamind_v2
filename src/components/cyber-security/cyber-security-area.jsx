import React from "react";
import Image from "next/image";
import aboutImg1 from "../../../public/assets/img/service/about-image-1.jpg";
import aboutImg2 from "../../../public/assets/img/service/about-image-2.jpg";
import aboutImg3 from "../../../public/assets/img/service/about-image-3.jpg";
import cyberSecurity1 from "../../../public/assets/img/service/cyber-security-1.jpg";
import cyberSecurity2 from "../../../public/assets/img/service/cyber-security-2.jpg";
import cyberSecurity3 from "../../../public/assets/img/service/cyber-security-3.jpg";

import getFreeSecurity from "../../../public/assets/img/service/get-free-security-circle.svg";

const service_details_content = {
  overview_title: "Key Cyber Security Solutions for Organizations",
  overview_des: (
    <>
      Our cybersecurity solutions empower organizations with proactive
      protection, real-time threat detection, and compliance assurance.
    </>
  ),
  overview_list1: [
    {
      title: "Threat Detection and Monitoring",
      points: [
        "Implement advanced threat detection systems to identify and respond to potential cyber threats in real-time.",
        "Utilize Security Information and Event Management (SIEM) tools to aggregate and analyze security data from across the organization.",
      ],
    },
    {
      title: "Incident Response Planning",
      points: [
        "Develop a comprehensive incident response plan that outlines procedures for addressing security breaches.",
        "Conduct regular drills and simulations to ensure that all team members are familiar with their roles during a cyber incident.",
      ],
    },
    {
      title: "Data Protection and Encryption",
      points: [
        "Employ encryption technologies to protect sensitive data both at rest and in transit.",
        "Implement data loss prevention (DLP) solutions to monitor and control data transfers within and outside the organization.",
      ],
    },
    {
      title: "Employee Training and Awareness",
      points: [
        "Provide ongoing training programs to educate employees about cyber threats and safe online practices.",
        "Foster a culture of security awareness where employees are encouraged to report suspicious activities.",
      ],
    },
   
    
  ],
  overview_list2: [
    
    {
      title: "Network Security Measures",
      points: [
        " Utilize firewalls, intrusion detection systems (IDS), and intrusion prevention systems (IPS) to safeguard the network perimeter.",
        "Regularly update and patch systems to protect against known vulnerabilities.",
      ],
    },
    {
      title: "Compliance and Regulatory Adherence",
      points: [
        "Ensure that your organization complies with relevant regulations such as GDPR, HIPAA, or PCI-DSS. ",
        "Conduct regular audits to assess compliance and identify areas for improvement.",
      ],
    },
    {
      title: "Cloud Security Solutions",
      points: [
        "  Implement security measures specifically designed for cloud environments, including identity and access management (IAM) and secure configurations.",
        "Regularly review cloud service provider security practices to ensure they meet your organization’s standards.",
      ],
    },
    {
      title: "Third-Party Risk Management",
      points: [
        "Assess the security posture of third-party vendors and partners to mitigate risks associated with supply chain vulnerabilities. ",
        "Establish clear security requirements and conduct regular assessments of third-party compliance.",
      ],
    },
  ],
};

const { overview_title, overview_des, overview_list1 } = service_details_content;

function CyberSecurityArea() {
  return (
    <section className="pt-30">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-35 mt-15">Cyber Security Solutions</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="about-us-image">
              {/* About Image Box 1 */}
              <div className="about-image-box about-img-1">
                <figure
                  className="image-anime reveal"
                  style={{
                    transform: "translate(0px)",
                    opacity: 1,
                    visibility: "inherit",
                  }}
                >
                  <Image src={aboutImg1} alt="About Image 1" />
                </figure>
              </div>

              {/* About Image Box 2 and 3 */}
              <div className="about-image-box">
                <div className="about-img-2">
                  <figure
                    className="image-anime reveal"
                    style={{
                      transform: "translate(0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <Image src={aboutImg2} alt="About Image 2" />
                  </figure>
                </div>

                <div className="about-img-3">
                  <figure
                    className="image-anime reveal"
                    style={{
                      transform: "translate(0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <Image src={aboutImg3} alt="About Image 3" />
                  </figure>
                </div>
              </div>

              {/* Get Free Security Circle */}
              <div className="get-free-security-circle">
                <a href="/contact">
                  <Image src={getFreeSecurity} alt="Get Free Security" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="sv-details-wrapper pl-0">
              <div className="sv-details-title-box mb-10">
                <h5 className="sv-details-text-title">{overview_title}</h5>
              </div>
              <div className="sv-details-text mb-35">
                <p>{overview_des}</p>
                <ul>
                  {overview_list1.map((item, i) => (
                    <li key={i} className="xs-pl-0">
                      <strong>{item.title}</strong>
                      <ul>
                        {item.points.map((point, j) => (
                          <li key={j}>
                            <i class="fal fa-check"></i>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="sv-details-wrapper pl-0">
              <div className="sv-details-text mb-35">
                <ul>
                  {overview_list1.map((item, i) => (
                    <li key={i}  className="xs-pl-0">
                      <strong>{item.title}</strong>
                      <ul>
                        {item.points.map((point, j) => (
                          <>
                            <li key={j}>
                              <i class="fal fa-check"></i>
                              {point}
                            </li>
                          </>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="about-us-image">
              {/* About Image Box 1 */}
              <div className="about-image-box about-img-1">
                <figure
                  className="image-anime reveal"
                  style={{
                    transform: "translate(0px)",
                    opacity: 1,
                    visibility: "inherit",
                  }}
                >
                  <Image src={cyberSecurity1} alt="About Image 1" />
                </figure>
              </div>

              {/* About Image Box 2 and 3 */}
              <div className="about-image-box">
                <div className="about-img-2">
                  <figure
                    className="image-anime reveal"
                    style={{
                      transform: "translate(0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <Image src={cyberSecurity2} alt="About Image 2" />
                  </figure>
                </div>

                <div className="about-img-3">
                  <figure
                    className="image-anime reveal"
                    style={{
                      transform: "translate(0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <Image src={cyberSecurity3} alt="About Image 3" />
                  </figure>
                </div>
              </div>

              {/* Get Free Security Circle */}
              <div className="get-free-security-circle">
                <a href="/contact">
                  <Image src={getFreeSecurity} alt="Get Free Security" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CyberSecurityArea;
