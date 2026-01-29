import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// images import 
import about_img_1 from "../../public/assets/img/about/Metamind.jpg";
import about_img_2 from "../../public/assets/img/about/about-2.jpg"
import about_img_3 from "../../public/assets/img/about/about-1.jpg"
import about_img_4 from "../../public/assets/img/about/about-3.jpg"
import about_img_5 from "../../public/assets/img/about/about-5.png"
import Mou from "../../public/assets/img/about/MoU.jpg";

// about data
const about_data =[
    {
        id: 1, 
        cls: "bg-shape",
        img: about_img_1
    },
    {
        id: 2, 
        cls: "main-img z-index",
        img: about_img_2
    },
    {
        id: 3, 
        cls: "sub-img-1 d-none d-sm-block z-index-3",
        img: about_img_3
    },
    {
        id: 4, 
        cls: "sub-img-2 d-none d-sm-block",
        img: about_img_4
    },
    {
        id: 5, 
        cls: "sub-img-3 d-none d-sm-block z-index-3",
        img: about_img_5
    },
]

// about content
const about_content = {
  title: "About Us",
  sub_title: "Empowering Innovation Through AI and Analytics",
  des: (
    <>
      <p>
        Bharat Electronics Limited (BEL - PSU), and Persistent Systems Ltd have
        signed a tripartite MoU with Metamind Systems Pvt. Ltd. to jointly
        develop and deliver innovative software products, solutions and service
        offerings in the domains of Data Analytics, Artificial Intelligence
        (AI), Machine Learning (ML) and Cyber Security across sectors such as
        Aerospace & Defence, Healthcare, Telecommunications, Energy, Smart
        Cities and other technology-driven industries.
      </p>
      <p>The partnership will focus on collaborating and exploring business
      opportunities in India, the United States (US) and Latin America (LATAM).</p>  
      <p> The tripartite MoU was signed by Smt Durga G K, Executive Director
      (Software), BEL; Sri Hrishikesh Kinikar, Director, Metamind Systems
      Private Limited; and Sri Rajesh Gharpure, Chief Delivery Officer,
      Persistent Systems Limited in the presence of Sri Manoj Jain, Chairman &
      Managing Director and Sri Rajnish Sharma, Director (Bengaluru Complex),
      BEL.</p>  
    </>
  ),

  about_list: [
    <>Machine Learning.</>,
    <>Artificial Intelligence</>,
    <> Data Analytics</>,
    <> Cyber Security</>,
  ],
  btn_text: "About Us",
};
const {title, sub_title, des, about_list, btn_text}  = about_content


const AboutArea = () => {
    return (
      <>
        <div className="tp-about__area tp-about__pt-pb pt-50 pb-50 sm-pb-20 sm-pt-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12">
                {" "}
                <h4 className="tp-section-subtitle">{title}</h4>
                <h3 className="tp-section-title mb-15">{sub_title}</h3>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".6s"
              >
                <div className="tp-about__right">
                  <div className="tp-about__section-box">{des}</div>
                  <div className="tp-about__list">
                    <ul className="inline-list">
                      {about_list.map((item, i) => (
                        <li key={i}>
                          <i className="fal fa-check"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tp-about__btn">
                    <Link
                      className="tp-btn tp-btn-hover alt-color-black"
                      href="/about"
                    >
                      <span>{btn_text}</span>
                      <b></b>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".2s"
              >
                <Image className="mou" src={Mou}></Image>
                <Image className="about-img" src={about_img_1}></Image>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default AboutArea;