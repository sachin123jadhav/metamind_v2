import useTitleAnimation from "@/hooks/useTitleAnimation";
import service_data from "@/data/service-data";
import RightArrow from "@/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

// Static image import for the dashboard section
import img from "../../../../public/assets/img/service/sv-dashbord.png";

// Section content
const service_content = {
  title: "Empowering Transformation, Innovation, and Connectivity",
  sub_title: <>Our Offerings</>,
  bg_img: "/assets/img/service/sv-bg.jpg",
  title_2: (
    <>
      Our Products <br /> HRMS and DMS
    </>
  ),
  des: <>Discover our smart enterprise solutions.</>,
  btn_text: "Know More",
  link: "/product", // ✅ Ensure this path exists in your routes
};

// Destructure content
const { title, sub_title, bg_img, title_2, des, btn_text, link } =
  service_content;

const ServicesArea = () => {
  const titleRef = useRef(null);

  useTitleAnimation(titleRef);

  return (
    <>
      <div className="tp-service__area p-relative fix pt-50">
        <div className="tp-service__grey-shape grey-bg"></div>
        <div className="container relative">
          <p className="service-title d-none d-xl-block">Services</p>

          {/* Section Heading */}
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                ref={titleRef}
                className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim"
              >
                <p className="tp-section-subtitle-4">{sub_title}</p>
                <h2 className="tp-section-title">{title}</h2>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="row">
            {service_data.slice(0, 5).map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={item.delay}
              >
                <div className="tp-service__item mb-30">
                  <div className="tp-service__icon">
                    <Image src={item.img} alt={item.title} />
                  </div>
                  <div className="tp-service__content">
                    <h3 className="tp-service__title-sm tp-yellow-color">
                      <Link href="/service-details">{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="tp-service__link">
                    <Link href={item.link}>
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Dashboard Section */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay="1s"
            >
              <div
                className="tp-service__dashboard"
                style={{ backgroundImage: `url(${bg_img})` }}
              >
                <div className="tp-service__top-content">
                  <h3 className="tp-service__title-white">{title_2}</h3>
                  <p>{des}</p>
                  <Link
                    className="tp-btn-orange tp-btn-hover alt-color-white"
                    href={link}
                  >
                    <span>{btn_text}</span>
                    <b></b>
                  </Link>
                </div>
                <div className="tp-service__dashdboard-sm-img">
                  <Image
                    className="wow tpfadeRight"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                    src={img}
                    alt="Dashboard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
