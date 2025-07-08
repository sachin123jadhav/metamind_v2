import Link from "next/link";
import Image from "next/image";
import React from "react";

// images import
import about_img_1 from "../../public/assets/img/about/about-bg-shape.png";
import about_img_2 from "../../public/assets/img/about/about-2.jpg";
import about_img_3 from "../../public/assets/img/about/about-1.png";
import about_img_4 from "../../public/assets/img/about/about-3.jpg";


// about data
const about_data = [
  {
    id: 1,
    cls: "bg-shape",
    img: about_img_1,
  },
  {
    id: 2,
    cls: "main-img z-index",
    img: about_img_2,
  },
  {
    id: 3,
    cls: "sub-img-1 d-none d-sm-block z-index-3",
    img: about_img_3,
  },
  {
    id: 4,
    cls: "sub-img-2 d-none d-sm-block",
    img: about_img_4,
  },
 
];

// about content
const about_content = {
  title: "Why we Stand Out",
  sub_title: "Comprehensive Digital Solutions",
  des: (
    <>
      <p>
        {" "}
        At Metamind Systems Pvt. Ltd., we offer a wide range of services
        tailored to meet the digital needs of your business. From web
        development and e-commerce solutions to digital transformation services,
        our expertise ensures that your business stays ahead in the digital
        landscape.
      </p>
      <h4 className="mt-15">Innovation-Driven Approach</h4>
      <p>
        We pride ourselves on our innovative approach to software development.
        By leveraging the latest technologies and methodologies, Metamind
        Systems Pvt. Ltd. ensures that our solutions are not only cutting-edge
        but also scalable and sustainable, enabling your business to achieve
        long-term success.
      </p>
    </>
  ),

  about_list: [
    <>Comprehensive software development lifecycle management</>,
    <>Page Load (time, size, number of requests).</>,
    <>Results-driven approach with measurable outcomes</>,
    <>
      Growth: Our utmost priority is to generate value for our customers by
      helping in revenue growth and providing robust technological support.
    </>,
    <>Delivering excellence in every project.</>,
  ],
  btn_text: "About Us",
};
const { title, sub_title, des, about_list, btn_text } = about_content;

const AboutAreaNew = () => {
  return (
    <>
      <div className="tp-about__area tp-about__pt-pb pt-20 pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-5 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".2s"
            >
              <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                {about_data.map((item, i) => (
                  <div key={i} className={`tp-about__${item.cls}`}>
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".6s"
            >
              <div className="tp-about__right">
                <div className="tp-about__section-box">
                  <h4 className="tp-section-subtitle">{title}</h4>
                  <h3 className="tp-section-title mb-15">{sub_title}</h3>
                  <div>{des}</div>
                </div>
                <div className="tp-about__list list-flex">
                  <ul>
                    {about_list.map((item, i) => (
                      <li key={i}>
                        <i className="fal fa-check"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="tp-about__btn">
                              <Link className="tp-btn tp-btn-hover alt-color-black" href="/about">
                                 <span>{btn_text}</span>
                                 <b></b>
                              </Link>
                           </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAreaNew;
