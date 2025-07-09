import ClockIcon from "@/svg/clock-icon";
import LocationIconThree from "@/svg/location-icon-3";
import UserIcon from "@/svg/user-icon";
import Link from "next/link";
import React from "react";

const job_data = {
  sub_title: "Current Positions",
  title: (
    <>
      Join our Growing Team <br /> of Doers.
    </>
  ),
  carrer_title: "Open Positions",
  carrer_info: (
    <>
      Join our team and unlock endless opportunities to grow, innovate, and make
      an impact!
    </>
  ),
  job_info: [
    {
      id: 1,
      category: "Dot (.) Net Developer",
      job_time: "0-5 Years",
      job_location: "Kothrud, Pune",
    },
    {
      id: 2,
      category: "Business Development Manager",
      job_time:
        "Software products and Services sales – Min 5 years experience in same domain",
      job_location: "Kothrud, Pune",
    },
    
  ],
};
const { sub_title, carrer_info, title, carrer_title, job_info } = job_data;

const JobArea = ({ style_carrer }) => {
  return (
    <>
      <div className="job-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="job-section-box text-center mb-40">
                {style_carrer ? (
                  <>
                    <h3 className="tp-section-title">{carrer_title}</h3>
                    <p>{carrer_info}</p>
                  </>
                ) : (
                  <>
                    <h4 className="inner-section-subtitle">{sub_title}</h4>
                    <h3 className="tp-section-title">{title}</h3>
                  </>
                )}
              </div>
            </div>
          </div>
          {job_info.map((item, i) => (
            <div key={i} className="job-post-box">
              <div className="row align-items-center">
                <div className=" col-lg-5 col-md-4">
                  <div className="job-post-info d-flex justify-content-start align-items-center">
                    <div className="job-post-category">
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-5">
                  <div className="job-post-wrapper d-flex align-items-center">
                    <div className="job-post-time d-flex align-items-center">
                      <UserIcon />
                      <span>{item.job_time}</span>
                    </div>
                    <div className="job-post-location d-flex align-items-center">
                      <LocationIconThree />
                      <span>{item.job_location}</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3 col-md-3">
                  <div className="job-post-apply-btn text-start text-md-end">
                    <Link
                      className="tp-btn-inner tp-btn-hover alt-color-orange"
                      href="#career-form"
                    >
                      <span>Apply</span> <b></b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobArea;
