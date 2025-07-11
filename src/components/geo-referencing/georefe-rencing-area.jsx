import Link from "next/link";
import React from "react";
import Digitisation from "../../../public/assets/img/service/Georeferencing.jpg";
import Image from "next/image";

function GeorefeRencingArea() {
  return (
    <>
      <section className="pt-40 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="title pb-45 ">Georeferencing Initiative</h5>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <Image className="about-img" src={Digitisation} />
            </div>
            <div className="col-md-6">
              <h5>In Partnership with Government of Maharashtra</h5>
              <p>
                Metamind Systems Pvt Ltd is excited to announce our
                collaboration with the Government of Maharashtra on a
                groundbreaking georeferencing project. This initiative aims to
                transform land record management across the state by integrating
                advanced geospatial technology with accurate geographic
                coordinates.
              </p>
              <p>
                Our innovative platform will provide real-time mapping
                solutions, enhancing transparency and efficiency in land
                administration. By digitizing millions of land parcels, we are
                paving the way for a more streamlined system that reduces
                disputes and facilitates better governance for citizens and
                government agencies alike.
              </p>
              <p>
                This project not only establishes a solid digital foundation for
                future smart infrastructure development but also supports urban
                planning efforts throughout Maharashtra. With our team's
                expertise in geospatial technology and artificial intelligence,
                we are committed to delivering a landmark transformation in the
                management of land records, ensuring a brighter and more
                efficient future for the state.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GeorefeRencingArea;
