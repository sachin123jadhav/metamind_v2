import React from "react";
import Image from "next/image";
import aboutImg1 from "../../../public/assets/img/about/team-1.jpg";
import aboutImg2 from "../../../public/assets/img/about/team-2.jpg";
import aboutImg3 from "../../../public/assets/img/about/team-3.jpg";
import getFreeSecurity from "../../../public/assets/img/about/Technology.svg";
import MetaIcon from "../../../public/assets/img/about/Meta-Icon.svg";

const service_details_content = {
  overview_title: "Expertise Across Diverse Technologies",
  overview_des: (
    <>
      Our team comprises experts in a wide range of technologies and programming
      languages, including but not limited to:
    </>
  ),
  overview_list1: [
    {
      title: "Frontend Development",
      points: [
        "Proficient in HTML, CSS, JavaScript, and modern frameworks like React, our developers create intuitive and engaging user interfaces that enhance user experience.",
      ],
    },
    {
      title: "Backend Development",
      points: [
        "With a strong command of languages such as Python, Java, and Node.js, our backend developers build robust and scalable server-side applications that power our solutions.",
      ],
    },
    {
      title: "Mobile Development",
      points: [
        "Our mobile app developers are skilled in both iOS and Android platforms, ensuring that we deliver seamless and high-performing applications to meet the needs of our users.",
      ],
    },
    {
      title: "Cloud Solutions",
      points: [
        "Our team is well-versed in cloud technologies, enabling us to design and implement scalable solutions that leverage the power of cloud computing.",
      ],
    },
  ],
};

const { overview_title, overview_des, overview_list1 } =
  service_details_content;
const TeamArea = () => {
  return (
    <>
      <div className="tp-team-area tp-team-inner pt-50 pb-35">
        <div className="container">
          <div className="tp-team-section-wrapper tp-team-inner-section mb-70">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="tp-team-section-box">
                  <h3 className="tp-section-title mb-15 text-black">
                    Our Strength: A Skilled Team
                  </h3>
                  <p>
                    At Metamind Systems Pvt. Ltd. we believe that our greatest
                    asset is our talented and dedicated team of software
                    developers. Our skilled professionals are the backbone of
                    our success, driving innovation and delivering exceptional
                    results for our clients.
                  </p>
                </div>
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
                  <div className="meta-icon">
                    <Image src={MetaIcon} />
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

            <div className="row mt-25">
              <div className="col-md-4">
                <h5>Commitment to Continuous Learning</h5>
                <p className="text-justify">
                  In the fast-paced world of technology, staying ahead of the
                  curve is essential. Our team is committed to continuous
                  learning and professional development. We encourage our
                  developers to pursue certifications and skill improvement
                  programs. Training and knowledge sharing within the
                  Organization is highly encouraged and takes place frequently.
                  This dedication to growth ensures that we remain at the
                  forefront of technological advancements and best practices.
                </p>
              </div>
              <div className="col-md-4">
                <h5>Collaborative Culture</h5>
                <p className="text-justify">
                  Collaboration is key to our success. Our skilled team works
                  closely together, fostering an environment where ideas can
                  flourish. We believe that the best solutions come from diverse
                  perspectives, and our collaborative culture encourages open
                  communication and teamwork. This synergy not only enhances our
                  problem-solving capabilities but also leads to innovative
                  solutions that exceed our clients' expectations.
                </p>
              </div>
              <div className="col-md-4">
                <h5>Proven Track Record</h5>
                <p className="text-justify">
                  Our skilled team has a proven track record of delivering
                  high-quality software solutions on time and within budget. We
                  take pride in our ability to understand our clients' unique
                  needs and translate them into effective software applications.
                  Our commitment to excellence has earned us the trust of
                  numerous clients across various industries.
                </p>
              </div>
              <div className="col-md-12 ">
                <h5 className="mt-15">Join Us on Our Journey</h5>
                <p className="text-justify">
                  <b>At Metamind Systems Pvt. Ltd.</b>, we are proud of our
                  skilled team and the exceptional work they do. As we continue
                  to grow and evolve, we invite you to join us on our journey.
                  Whether you are a potential client looking for a reliable
                  software development partner or a talented individual seeking
                  to be part of our dynamic team, we welcome you to connect with
                  us.
                </p>
                <p>
                  Please check the ‘<a href="/career">Careers</a> ’ page for
                  latest opportunities.
                </p>
                <h4>Together, we can achieve great things!</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <h2 className="mt-25 mb-15">Our Skilled Expert Team</h2>
              </div>
            </div>
            <div className="team-member">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-name">
                    <h4>Vikram Dhruv</h4>
                    <h5>Chief Executive Officer - US Division</h5>
                    <h6>Experience: 20 Years</h6>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="team-desc">
                    <p>
                      With over 20 years of combined experience in IT systems
                      integration, Engineering training, and Industrial
                      services, Vikram leads our US operations with a focus on
                      delivering exceptional technological solutions. His
                      extensive network across North and Latin America bridges
                      key partnerships with enterprises, driving digital
                      transformation across multiple sectors. Specializing in:
                      Industrial automation integration • Cross-border
                      technology solutions • IT workforce development
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-name">
                    <h4>Amol Shah</h4>
                    <h5>AVP Operations & HR </h5>
                    <h6>Experience: 22+ Years</h6>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="team-desc">
                    <p>
                      MBA in International Business | Diploma in HR | 22+ Years
                      of Expertise
                      <br />
                      With an MBA in International Business and a Diploma in
                      Human Resources, Amol leads operations and HR with over
                      two decades of experience in strategic HR management,
                      process optimization, and ISO standardization. His focus
                      is on workforce efficiency, operational excellence, and
                      fostering scalable frameworks that align with
                      organizational goals. He is also the Point Of Contact for
                      the organisation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-name">
                    <h4>Sachin Jadhav</h4>
                    <h5>Senior Web & UI/UX Designer</h5>
                    <h6>Experience: 16+ Years</h6>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="team-desc">
                    <p>
                      With expertise in HTML, CSS, and modern design tools
                      including Figma and Photoshop, Sachin creates visually
                      stunning, user-centric digital experiences. His
                      comprehensive experience spans WordPress, OpenCart,
                      Shopify, and React JS development, ensuring seamless
                      technical execution of every design vision.
                      <br />
                      For 16 years, he has blended artistic creativity with
                      technical precision to deliver designs that captivate
                      users while driving business results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-name">
                    <h4>Tauseef Mallabadkar</h4>
                    <h5>Tech Lead</h5>
                    <h6>Experience: 14+ Years</h6>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="team-desc">
                    <p>
                      Experienced tech lead specializing in both backend and
                      frontend development. Proven track record of designing
                      scalable systems, leading cross-functional teams, and
                      delivering high-impact digital solutions across diverse
                      industries. <br />
                      Successfully contributed to e-Governance projects through
                      on-site visits, client coordination, and meetings with
                      senior government officials.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-md-4">
                <div className="team-intro">
                  <h4>Vikram Dhruv</h4>
                  <h5>Chief Executive Officer - US Division</h5>
                 
                  <p>
                    With over 20 years of combined experience in IT systems
                    integration, Engineering training, and Industrial services,
                    Vikram leads our US operations with a focus on delivering
                    exceptional technological solutions. His extensive network
                    across North and Latin America bridges key partnerships with
                    enterprises, driving digital transformation across multiple
                    sectors. Specializing in: Industrial automation integration
                    • Cross-border technology solutions • IT workforce
                    development
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-intro">
                  <h4>Amol Shah</h4>
                  <h5>AVP Operations & HR </h5>

                  <p>
                    MBA in International Business | Diploma in HR | 22+ Years of
                    Expertise
                  </p>
                  <p>
                    With an MBA in International Business and a Diploma in Human
                    Resources, Amol leads operations and HR with over two
                    decades of experience in strategic HR management, process
                    optimization, and ISO standardization. His focus is on
                    workforce efficiency, operational excellence, and fostering
                    scalable frameworks that align with organizational goals. He
                    is also the Point Of Contact for the organisation.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-intro">
                  <h4>Sachin Jadhav</h4>
                  <h5>Senior Web & UI/UX Designer</h5>
                  <p>16+ Years of Digital Design Excellence</p>
                  <p>
                    With expertise in HTML, CSS, and modern design tools
                    including Figma and Photoshop, Sachin creates visually
                    stunning, user-centric digital experiences. His
                    comprehensive experience spans WordPress, OpenCart, Shopify,
                    and React JS development, ensuring seamless technical
                    execution of every design vision.
                  </p>
                  <p>
                    For 16 years, he has blended artistic creativity with
                    technical precision to deliver designs that captivate users
                    while driving business results.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;
