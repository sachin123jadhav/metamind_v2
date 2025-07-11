import RightArrowTwo from "@/svg/right-arrow-2";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import logo1 from "../../../../public/assets/img/project/bel_logo.png";
import logo2 from "../../../../public/assets/img/project/sfpf.png";
import logo3 from "../../../../public/assets/img/project/kumbh.png";
import logo4 from "../../../../public/assets/img/project/maharashtra.png";
import logo5 from "../../../../public/assets/img/project/Delhi-Government-.png";

const setting = {
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  focusOnSelect: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {},
    },
    {
      breakpoint: 992,
      settings: {},
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
// security data
const security_data = [
  {
    id: 1,
    link: "#",
    img: logo1,
    title: (
      <>
        Bharat Electronics <br /> Limited (BEL)
      </>
    ),
  },
  {
    id: 2,
    link: "#",
    img: logo2,
    title: (
      <>
        Samarthgad <br /> Foundation and Schools
      </>
    ),
  },
  {
    id: 3,
    link: "#",
    img: logo3,
    title: (
      <>
        Kumbh <br />
        Prayagraj 2025
      </>
    ),
  },
  {
    id: 4,
    link: "#",
    img: logo4,
    title: (
      <>
        Government <br />
        of Maharashtra
      </>
    ),
  },
  {
    id: 5,
    link: "#",
    img: logo5,
    title: (
      <>
        Government <br />
        of Delhi
      </>
    ),
  },
];

const SecurityArea = () => {
  return (
    <>
      <div className="projects customers-bg">
        <div className="tp-security-area fix z-index pt-40 pb-40 xs-pb-0">
          <div className="container-fluid g-0">
            <div className="container">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <h2 className="text-center mb-15">
                    Some of our Happy Customers and Associations
                  </h2>

                  <p className="text-center">
                    We proudly serve a diverse range of clients across various
                    industries, delivering tailored solutions that drive
                    success. Explore how we've helped businesses achieve their
                    goals.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tp-security-slider-wrapper wow tpfadeUp mt-20"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-security-slider-active">
                <Slider {...setting}>
                  {security_data.map((item, i) => (
                    <div key={i} className="tp-security-main">
                      <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                        <Link href={item.link}>
                          <div className="tp-security-item d-flex align-items-center">
                            <div className="tp-security-img">
                              <Image src={item.img} alt="theme-pure" />
                            </div>
                            <div className="tp-security-content">
                              <h4 className="tp-security-title-sm">
                                {item.title}
                              </h4>
                            </div>
                          </div>
                        </Link>
                        <div className="tp-security-link">
                          <Link href={item.link}>
                            <RightArrowTwo />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityArea;
