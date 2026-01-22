import React from "react";
import career from "../../../public/assets/img/career/career.png";
import Image from "next/image";
import CareerForm from "@/forms/career-form";



function Opportunity() {
  return (
    <>
      <section className="mt-25">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="tp-section-title mb-15 text-black">
                Opportunities
              </h2>
              {/* <p className="text-center" id="career-form">
                Join our team of innovative software engineers and developers
                who are passionate about creating cutting-edge solutions for our
                clients. We’re looking for talented individuals who thrive in a
                fast-paced, collaborative environment and are committed to
                delivering high-quality results. Our company values creativity,
                diversity and continuous learning and we offer competitive
                compensation packages, flexible work arrangements and
                opportunities for professional growth. If you’re ready to take
                your career to the next level and make a real impact, apply to
                join our team today
              </p> */}
              <p class="text-justify">
                <b>At Metamind Systems Pvt. Ltd.</b>, we are proud of our
                skilled team and the exceptional work they do. As we continue to
                grow and evolve, we invite you to join us on our journey.
                Whether you are a potential client looking for a reliable
                software development partner or a talented individual seeking to
                be part of our dynamic team, we welcome you to connect with us.
              </p>
            </div>
          </div>

          <div className="row mt-15" id ="career-form">
            <div className="col-md-6">
              <Image src={career} />
            </div>
            <div className="col-md-6">
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Opportunity;
