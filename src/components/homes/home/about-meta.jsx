
import { AppContext } from "@/context/ContextProvider";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Navigation, Scrollbar} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "@/modals/video-popup";
import About from "../../../../public/assets/img/about/About.png"; 
import Image from "next/image";
import Link from "next/link";


const about_content = {
  title: "Why Choose Metamind?",
  sub_title: "Comprehensive Digital Solutions",
  des: (
    <>
      At Metamind Systems Pvt. Ltd., we offer a wide range of services tailored
      to meet the digital needs of your business.
    </>
  ),

  about_list: [
    <>Deep domain expertise</>,
    <>Governance</>,
    <> Proactiveness</>,
    <> Value addition</>,
  ],
  btn_text: "About Us",
};
const { title, sub_title, des, about_list, btn_text } = about_content;
function AboutMeta() {

     const [isLoop, setIsLoop] = useState(false);
     useEffect(() => {
       setIsLoop(true);
     }, []);
    
       const [isDragged, setIsDragged] = useState(false);
       const handleSlideChange = () => {
         setIsDragged(true);
    };
     const handleTransitionEnd = () => {
       setIsDragged(false);
     };
  const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoEl = useRef(null); 
      // const { handleMouseEnter, handleMouseLeave } = useContext(AppContext); 
    
  return (
    <>
      <section className="p-relative pt-50 pb-80 about-home xs-mb-0 xs-pb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <Image src={About}></Image>
            </div>
            <div
              className="col-xl-7 col-lg-7 wow tpfadeRight d-flex align-items-center"
              data-wow-duration=".9s"
              data-wow-delay=".6s"
            >
              <div className="tp-about__right">
                <div className="tp-about__section-box">
                  <h4 className="tp-section-subtitle">{title}</h4>
                  <h3 className="tp-section-title mb-15">{sub_title}</h3>
                  <p>{des}</p>
                </div>
                <div className="tp-about__list">
                  <ul>
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
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"LYimfo_9OZ4"}
      />
      {/* video modal end */}
    </>
  );
}

export default AboutMeta;
