import Link from "next/link";
import React from "react";
import Digitisation from "../../../public/assets/img/service/Digitisation-of-Land-Records.jpg";
import Image from "next/image";

function DigitalMappingArea() {
  return (
    <>
      <section className="pt-40 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="title pb-45 ">
                GIS - Digitisation of Land Records
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Image className="about-img" src={Digitisation} />
            </div>
            <div className="col-md-6">
              <p>
                Metamind Systems Pvt Ltd is excited to announce our
                collaboration with the Government of Maharashtra on the
                transformative Digitisation of Land Records project. This
                initiative aims to modernize and streamline land record
                management across the state, ensuring accuracy, transparency,
                and accessibility for all stakeholders.
              </p>
              <p>
                By digitizing land records, we are creating a comprehensive,
                user-friendly database that will significantly reduce paperwork
                and administrative delays. This project will empower citizens by
                providing them with easy access to their land information,
                thereby minimizing disputes and enhancing trust in the land
                administration system.
              </p>
              <p>
                Our advanced technology will integrate geographic information
                systems (GIS) to ensure precise mapping and data accuracy,
                facilitating better decision-making for both government
                officials and landowners. Additionally, this digitisation effort
                will support sustainable urban planning and development, paving
                the way for future growth in Maharashtra.
              </p>
              <p>
                Metamind Systems is committed to leveraging innovative solutions
                to enhance the efficiency of land management, ultimately
                contributing to a more transparent and accountable governance
                framework for the people of Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DigitalMappingArea;
