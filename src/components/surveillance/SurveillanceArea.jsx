import React from 'react'

import service_img from "../../../public/assets/img/service/SurveillanceSolutions.png"; 
import service_img2 from "../../../public/assets/img/service/relible-img-section-green.jpg"; 

import Image from 'next/image';

const service_details_content = {
  

  overview_title: "Vision-Based Forensic Tools",
  overview_des: (
    <>
      Our advanced computer vision solutions extract actionable intelligence
      from visual data.
    </>
  ),
  overview_list: [
    <>
      <span>
        Real-time object detection across video streams with military-grade
        accuracy
      </span>
    </>,
    <>
      <span>
        Facial recognition systems with identity matching across multiple
        databases
      </span>
    </>,
    <>
      <span>
        AI-powered scalable surveillance infrastructure for smart cities
      </span>
    </>,
    <>
      <span>
        Spatio-temporal crime pattern analysis for predictive policing
      </span>
    </>,
  ],

  Solutions: [
    <>
      <span>Object Detection in Video Streams</span>
    </>,
    <>
      <span>Face Recognition & Identity Matching</span>
    </>,
    <>
      <span>Spatio-Temporal Crime Analytics</span>
    </>,
  ],
  social_content: [
    <>
      <span>Comprehensive social media monitoring with sentiment analysis</span>
    </>,
    <>
      <span>Advanced network behavior analytics for anomaly detection</span>
    </>,
    <>
      <span>Terrorist and organized crime pattern recognition algorithms</span>
    </>,
    <>
      <span>
        Collaborative intelligence platforms for multi-agency coordination
      </span>
    </>,
  ],
  social_analysis: [
    <>
      <span> Social Media Monitoring & Sentiment Analysis</span>
    </>,
    <>
      <span>Network Behavior Analytics</span>
    </>,
    <>
      <span>Terrorist & Crime Pattern Recognition</span>
    </>,
    <>
      <span>Collaborative Intelligence Insights</span>
    </>,
  ],
};
const {
  overview_title,
  overview_des,
  overview_list,
  Solutions,
  social_analysis,
  social_content,
} = service_details_content;

function SurveillanceArea() {
  return (
    <div>
      <section className="pt-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-35">Surveillance Solutions</h2>
            </div>
          </div>
          <div className="row  align-items-center">
            <div className="col-md-5">
              <Image src={service_img}></Image>
            </div>
            <div className="col-md-7">
              <div className="sv-details-wrapper">
                <div className="sv-details-title-box mb-10">
                  <h5 className="sv-details-text-title">{overview_title}</h5>
                  <p>{overview_des}</p>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    We specialize in:
                  </h4>
                  <ul>
                    {overview_list.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <i className="fal fa-check"></i> <p> {item} </p>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">Solutions</h4>
                  <ul>
                    {Solutions.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <i className="fal fa-check"></i> <p> {item} </p>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-50 align-items-center">
            <div className="col-md-7">
              <div className="sv-details-wrapper">
                <div className="sv-details-text mb-35">
                  <h4 className="sv-details-text-title pb-10">
                    Social & Network Analytics
                  </h4>
                  <p>
                    Decipher complex digital interactions with our network
                    intelligence platform:
                  </p>
                  <ul>
                    {social_content.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <i className="fal fa-check"></i> <p> {item} </p>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sv-details-text mb-35">
                  {/* <h4 className="sv-details-text-title pb-10">Solutions</h4> */}
                  <ul>
                    {social_analysis.map((item, i) => (
                      <li key={i}>
                        {" "}
                        <i className="fal fa-check"></i> <p> {item} </p>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <Image src={service_img2}></Image>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h5>Transform Your Security Infrastructure</h5>
              <p>
                Metamind Systems integrates these technologies into seamless
                end-to-end solutions for law enforcement, intelligence agencies,
                and corporate security teams. Our platforms convert complex data
                streams into intuitive, actionable intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SurveillanceArea