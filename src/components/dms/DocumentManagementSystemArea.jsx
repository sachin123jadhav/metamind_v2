import React from "react";
import aboutImg1 from "../../../public/assets/img/product/DMS-App.png";
import aboutImg2 from "../../../public/assets/img/product/DMS-Branch.jpg";
import aboutImg3 from "../../../public/assets/img/product/DMS.jpg";
import getFreeSecurity from "../../../public/assets/img/service/get-free-security-circle.svg";
import Image from "next/image";

const service_details_content = {
  features_list: [
    <>
      Multi-Level Categorization: <br />{" "}
      <span>
        Allows users to categorize documents at various levels for structured
        management.
      </span>
    </>,
    <>
      Document Classification and Saving: <br />{" "}
      <span>
        Enables efficient classification and saving of important files.
      </span>
    </>,
    <>
      Meta Tagging:
      <br />
      <span>
        Users can attach meta tags to documents, enhancing searchability and
        retrieval.
      </span>
    </>,
    <>
      Multi-Faceted Retrieval:
      <br />
      <span>
        Facilitates document retrieval based on specific criteria or categories,
        reducing search time.
      </span>
    </>,
  ],
  benifits_list: [
    <>
      User -Friendly Interface: <br />{" "}
      <span>
        Simplifies the document management process for users with varying
        technical expertise.
      </span>
    </>,
    <>
      Compliance and Security: <br />{" "}
      <span>
        Ensures adherence to regulatory requirements and maintains a secure
        repository of critical information.
      </span>
    </>,
    <>
      Increased Productivity:
      <br />
      <span>
        Streamlines document management, allowing for improved collaboration and
        efficiency within teams.
      </span>
    </>,
  ],
};

const { features_list, benifits_list } = service_details_content;
const dmsApplications = [
  {
    title: "Universities and Educational Institutions",
    points: [
      "Organizing student records, research papers, and administrative documents.",
      "Facilitating easy access to course materials and academic resources.",
    ],
  },
  {
    title: "Corporate Organizations",
    points: [
      "Managing employee records, contracts, and project documentation.",
      "Streamlining collaboration on shared documents and reports.",
    ],
  },
  {
    title: "Government Agencies",
    points: [
      "Storing and retrieving public records, legal documents, and compliance files.",
      "Enhancing transparency and accountability through organized document management.",
    ],
  },
  {
    title: "Healthcare Sector",
    points: [
      "Managing patient records, medical histories, and billing information.",
      "Ensuring compliance with healthcare regulations and data privacy laws.",
    ],
  },
  {
    title: "Legal Firms",
    points: [
      "Organizing case files, legal documents, and client information.",
      "Facilitating quick access to important legal resources and precedents.",
    ],
  },
  {
    title: "Financial Institutions",
    points: [
      "Managing loan applications, customer records, and financial reports.",
      "Ensuring secure storage and easy retrieval of sensitive financial documents.",
    ],
  },
  {
    title: "Non-Profit Organizations",
    points: [
      "Organizing grant applications, donor records, and project documentation.",
      "Streamlining reporting and compliance processes.",
    ],
  },
  {
    title: "Manufacturing and Supply Chain",
    points: [
      "Managing product specifications, quality control documents, and supplier contracts.",
      "Enhancing collaboration across departments and with external partners.",
    ],
  },
  {
    title: "Real Estate",
    points: [
      "Organizing property listings, contracts, and client information.",
      "Facilitating easy access to important documents for transactions.",
    ],
  },
  {
    title: "Research and Development",
    points: [
      "Managing research data, project documentation, and intellectual property.",
      "Ensuring collaboration among researchers and easy access to findings.",
    ],
  },
];

function DocumentManagementSystemArea() {
  return (
    <>
      <section className="pt-40 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="title pb-45 ">Document Management System (DMS)</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="about-us-image">
                {/* About Image Box 1 */}
                <div className="about-image-box about-img-1">
                  <figure
                    className="image-anime reveal about-img"
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
                {/* <div className="get-free-security-circle">
                           <a href="/contact">
                             <Image src={getFreeSecurity} alt="Get Free Security" />
                           </a>
                         </div> */}
              </div>
            </div>
            <div className="col-md-7">
              <div className="sv-details-text mb-35">
                <h4 className="mb-15">Key Features</h4>
                <ul>
                  {features_list.map((item, i) => (
                    <li key={i}>
                      {" "}
                      <i className="fal fa-check"></i> <p> {item} </p>{" "}
                    </li>
                  ))}
                </ul>

                <h4 className="mb-15 mt-25">Benefits</h4>
                <ul>
                  {benifits_list.map((item, i) => (
                    <li key={i}>
                      {" "}
                      <i className="fal fa-check"></i> <p> {item} </p>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row sv-details-text pt-40">
            <div className="col-md-12 mb-4">
              <h4>Applications of Document Management System (DMS)</h4>
            </div>
            {dmsApplications.map((app, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="application-box">
                  <h5>{app.title}</h5>
                  <ul>
                    {app.points.map((point, idx) => (
                      <li key={idx}>
                        <i
                          className="fal fa-check"
                          style={{ marginRight: 8 }}
                        ></i>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DocumentManagementSystemArea;
