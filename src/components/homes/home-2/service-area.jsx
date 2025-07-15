import LinearGradientLine from "@/svg/linear-gradient-line";
import Link from "next/link";
import Image from "next/image";
import React from "react";

// service img import
import service_img_1 from "../../../../public/assets/img/service/sv-icon-2-1.png";
import service_img_2 from "../../../../public/assets/img/service/sv-icon-2-2.png";
import service_img_3 from "../../../../public/assets/img/service/sv-icon-2-3.png";
import service_img_4 from "../../../../public/assets/img/service/sv-icon-2-4.png";
import bg_img from "../../../../public/assets/img/service/sv-bg-2-1.jpg";

const service_content = {
  title: <>Explore Our Innovative Product Solutions</>,
  des: (
    <>
      Discover Cutting-Edge Products Designed to Meet Your Needs and Drive
      Success
    </>
  ),

  users_data: [
    {
      id: 1,
      users_count: (
        <>
          08<i>+</i>
        </>
      ),
      users_status: <>Solutions</>,
    },
    {
      id: 2,
      users_count: (
        <>
          03<i>+</i>
        </>
      ),
      users_status: <>Trusted Companies</>,
    },
    {
      id: 3,
      users_count: (
        <>
          50<i>+</i>
        </>
      ),
      users_status: <>Active Users</>,
    },
  ],
  service_data: [
    {
      id: 1,
      color: "",
      title: "File Management",
      img: service_img_1,
    },
    {
      id: 2,
      color: "2",
      title: "Attendance Management",
      img: service_img_2,
    },
    {
      id: 3,
      color: "3",
      title: "Leave Management",
      img: service_img_3,
    },
    {
      id: 4,
      color: "4",
      title: "Workfusion Timelog",
      img: service_img_4,
    },
  ],

  free_tools_title: "More tools than you can handle",
  free_tools: [
    <>Mobile App</>,
    <>Face Module</>,
    <>Location with Restriction</>,
    <>Multiple In / out</>,
    <>Attendance Regulrization</>,
    <>Manual Attendance</>,
    <>Leave Apply/Approve</>,
    <>Timelog</>,
    <>Holiday</>,
    <>Visitors Tracking</>,
    <>Outstation management</>,
    <>Employee management</>,
    <>and many more...</>,
  ],
};
const { title, des, users_data, service_data, free_tools_title, free_tools } =
  service_content;

const ServiceArea = () => {
  return (
    <>
      <div className="tp-service-2__area p-relative pt-30 pb-30 mt-60">
        <div className="tp-service-2__shape">
          <Image src={bg_img} alt="Metamind" />
        </div>
        <div className="container z-index-5">
          <div className="row align-items-center mb-50">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-service-2__section-box">
                <h3 className="tp-section-title-md pb-20">{title}</h3>
                <p>{des}</p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="tp-service-2__user-box p-relative d-flex justify-content-lg-start justify-content-lg-end align-items-center">
                <div className="tp-service-2__user-shape">
                  <LinearGradientLine />
                </div>
                {users_data.map((item, i) => (
                  <div key={i} className="tp-service-2__user">
                    <span>{item.users_count}</span>
                    <p>{item.users_status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row gx-60">
            {service_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-3 col-md-6 mb-40 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".8s"
              >
                <div className="tp-service-2__item-wrapper p-relative">
                  <div className="tp-service-2__item d-flex justify-content-between flex-column">
                    <div className="tp-service-2__icon">
                      <Image src={item.img} alt="Metamind" />
                    </div>
                    <div className="tp-service-2__text">
                      <h4 className="tp-service-2__title-sm">
                        <Link href="#">{item.title}</Link>
                      </h4>
                      <Link className="tp-service-2__link" href="#">
                        Explore
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`tp-service-2__bg-shape tp-service-2__color-${item.color}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center">
            <div
              className="col-xl-10 wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="tp-service-2__bottom-wrapper p-relative mt-50">
                <div className="tp-service-2__feature-item">
                  <h4 className="tp-service-2__feature-title">
                    {free_tools_title}
                  </h4>
                  <div className="tp-service-2__feature-box d-flex justify-content-between">
                    <div className="tp-service-2__feature-list">
                      <ul>
                        {free_tools.map((list, i) => (
                          <li key={i}>{list}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
