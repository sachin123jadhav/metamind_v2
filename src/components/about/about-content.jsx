import Link from "next/link";
import React, { useState } from "react";
import ServiceBox from "../service/ServiceBox";

function AboutContent() {
  const [expandedId, setExpandedId] = useState(null);

  const serviceData = [
    {
      id: 1,
      title: "Our Mission ",
      content:
        "To establish ourselves as trusted technology leaders by delivering innovative solutions that drive sustainable growth and digital excellence for our clients. Our team of dedicated professionals combines their expertise to achieve our ultimate mission of establishing ourselves as trusted technology leaders. By leveraging the best of their skills, we work towards building our identity as a credible force in the industry.",
    },
    {
      id: 2,
      title: "Our Vision",
      content:
        "To be recognized globally as a premier software (technology) solutions provider, known for our innovative approaches and commitment to delivering exceptional value.",
    },
    {
      id: 3,
      title: "Our Core Values",
      content: `
      <ul>
        <li><strong>Innovation:</strong> Embracing new technologies and creative solutions.</li>
        <li><strong>Transparency:</strong> Building lasting relationships through transparency.</li>
        <li><strong>Ownership:</strong> Ensuring client success through dedicated service and on-time delivery.</li>
        <li><strong>Customer Satisfaction:</strong> Always focused on ensuring customer satisfaction and long-term success.</li>
      </ul>
    `,
    },
  ];

  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hover-bx">
                <div className="box-inner">
                  <div className="box-wrap">
                    <div className="icon">
                      <i className="fa fa-paper-plane"></i>
                    </div>
                    <div className="text">
                      <h3>
                        “Adapting to the ever-changing technological landscape
                        requires us to continually navigate the waters,
                        embracing both traditional and innovative approaches. It
                        is essential to maintain a relentless pursuit of
                        progress without losing sight of our goal: to strive for
                        greater achievements.”{" "}
                      </h3>
                      <h6>Co-founder & Director </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-30">
            <div className="col-md-12">
              <p>
                At Metamind Systems, we go beyond being just another digital
                platform company. We are catalysts for change, empowering
                businesses to transform, innovate and connect with their
                audience in meaningful ways. Metamind Systems Pvt. Ltd. is a
                dynamic software development company committed to driving
                digital transformation for businesses worldwide. With a focus on
                sustainable solutions, we empower organizations to thrive in the
                digital age. Our expertise extends to crafting innovative
                Software as a Product (SaaP) and Software as a Service (SaaS)
                solutions, particularly in the Healthcare, Education, and
                Fintech sectors. We pride ourselves on delivering cutting-edge
                technologies that enhance operational efficiency and foster
                growth. At Metamind Systems, we believe in harnessing the power
                of technology to create meaningful impact and transformative
                experiences for our clients.
              </p>
            </div>
          </div>

          <div className="about-content mt-20">
            <div className="row offering-sec pb-30 justify-content-center">
              {serviceData.map((service, index) => (
                <div
                  key={service.id}
                  className={`col-md-4 col-lg-4 col-xl-4 col-xxl lg-mb-30 fade-in`} // Add a class for transition
                  style={{ animationDelay: `${index * 0.2}s` }} // Stagger the animation
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
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutContent;
