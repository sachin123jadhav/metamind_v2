
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
  sub_title: "Empowering Kumbh 2025 with Smart Digital Solutions",
  heading: "1. Digital Lost and Found System",
  des: (
    <>
      An intuitive platform to reunite people with their lost belongings and
      loved ones during the massive Kumbh gathering. Available as both a mobile
      app and website, the system allows users to:
    </>
  ),

  about_list: [
    <>Report and search for lost items or persons in real time</>,
    <>Upload photos and descriptions</>,
    <> Access centralized updates from help centers and authorities</>,
  ],
  heading2: "2. ICT-Based Sanitation and Tentage Monitoring System",
  des2: (
    <>
      A smart monitoring solution that ensures hygienic living conditions and
      efficient tent management for pilgrims:
    </>
  ),

  about_list2: [
    <>Real-time updates on sanitation status</>,
    <>Automated reporting of issues</>,
    <> Transparent monitoring of tent occupancy, cleanliness, and resources</>,
  ],
  btn_text: "Know More",
};
const {
  title,
  sub_title,
  des,
  about_list,
  btn_text,
  heading,
  heading2,
  des2,
  about_list2,
} = about_content;
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
              <div
                className="play_btn popup-video"
                onClick={() => setIsVideoOpen(true)}
              >
                <i class="fa fa-play"></i>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-7 wow tpfadeRight d-flex align-items-center"
              data-wow-duration=".9s"
              data-wow-delay=".6s"
            >
              <div className="tp-about__right pr-0 pl-30">
                <div className="tp-about__section-box">
                  {/* <h4 className="tp-section-subtitle">{title}</h4> */}
                  <h3 className="tp-section-title mb-15">{sub_title}</h3>

                  <h5>{heading}</h5>
                  <p className="mb-0">{des}</p>
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

                <h5 className="mt-15">{heading2}</h5>
                <p className="mb-0">{des2}</p>
                <div className="tp-about__list mt-15">
                  <ul>
                    {about_list2.map((item, i) => (
                      <li key={i}>
                        <i className="fal fa-check"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tp-about__btn mt-25">
                  <Link
                    className="tp-btn tp-btn-hover alt-color-black"
                    href="/kumbh2025"
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
