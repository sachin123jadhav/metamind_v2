import Link from "next/link";
import React from "react";
import VideoBg from "../../../public/assets/img/Login.png";

function WorkFusion() {
  return (
    <>
      <section className="pt-40 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="title pb-45 text-center ">
                Work Fusion HRMS Product Demo
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <video
                className="play-video"
                id="myVideo"
                autoPlay
                loop
                playsInline
                muted
                controls // Add video controls
                style={{ width: "100%" }} // Set video width to 100%
                poster={VideoBg.src} // Set the default image for the video
                src="https://metamindsystem.com/workfusion_demo_video/WorkFusionHRMSbyMetamindSystemsPL-Demo.mp4" // Directly reference public folder path
              ></video>
            </div>
            <div className="col-md-5">
              <p>
                WorkFusion HRMS: Seamless HR, Streamlined Success: Efficient,
                Error Free, Easy! Presenting WorkFusion HRMS India's First ever
                fully customizable HR Management Software that seamlessly
                integrates with all existing ERP systems. Why settle for
                complicated HR Systems? WorkFusion HRMS offers an unparalleled
                user-friendly experience, tailored to meet the needs of any
                industry. From Attendance & Leave tracking to instant Payslip
                generation, WorkFusion streamlines your HR tasks effortlessly.
              </p>

              <Link
                className="tp-btn-blue-border mt-15"
                href="/assets/img/WorkFusionBrochure.pdf"
                target="_blank"
              >
                Download Brochure
                <i className="fa fa-download pl-4"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkFusion;
