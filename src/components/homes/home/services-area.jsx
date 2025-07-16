import useTitleAnimation from "@/hooks/useTitleAnimation";
import service_data from "@/data/service-data";
import RightArrow from "@/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

// Static image import for the dashboard section
import bgImg from "../../../../public/assets/img/service/service_card_bg.png";
import ServicesHome from "./services";
import MetamindProducts from "@/components/software-as-a-product/MetamindProducts";

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
      <div className="tp-service__area p-relative fix pt-50 pb-50">
        <div className="tp-service__grey-shape grey-bg"></div>
        <div className="container relative">
          <p className="service-title d-none d-xl-block">Services</p>

          {/* Section Heading */}
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                ref={titleRef}
                className="tp-service__section-box tp__title_anime mb-0 text-center tp-title-anim"
              >
                <p className="tp-section-subtitle-4">{sub_title}</p>
                <h2 className="tp-section-title">{title}</h2>
              </div>
            </div>
          </div>
          <MetamindProducts />
          <ServicesHome />
          {/* Service Cards */}

          <div className="row">
            {service_data.slice(0, 6).map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={item.delay}
              >
                <div className="service-card elementor-box">
                  <div className="service-card_number">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="shape-icon">
                    <Image
                      src={item.icon} // Ensure `icon` exists in your data
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                    <span className="dots"></span>
                  </div>

                  <h3 className="box-title">
                    <Link href={item.link || "/service-details"}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="service-card_text">{item.description}</p>
                  <div className="tp-about__btn">
                    <Link
                      href={item.link || "/service-details"}
                      className="tp-btn tp-btn-hover alt-color-black"
                    >
                      Read More <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                  </div>

                  <div className="bg-shape">
                    <Image src={bgImg} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tp-about__btn mt-25 text-center">
            <Link
              className="tp-btn tp-btn-hover alt-color-black"
              href="/service"
            >
              <span>View All Services</span>
              <b></b>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
