import React, { useEffect, useRef } from "react";  
//use gsap
import { gsap } from "gsap";
import useCharAnimation from "@/hooks/useCharAnimation";
import Image from "next/image";

// images import
import hero_frame from "../../../../public/assets/img/hero/powered-hero-bg.jpg";
import hero_frame_mobile from "../../../../public/assets/img/hero/powered-hero-bg-mobile.jpg";
import shape_1 from "../../../../public/assets/img/hero/hero-line-shape.png";
import shape_2 from "../../../../public/assets/img/hero/hero-line-shape-2.png";
import shape_img_1 from "../../../../public/assets/img/hero/hero-shape-1.png";
import shape_img_2 from "../../../../public/assets/img/hero/hero-shape-2.png";
import hero_thumb_1 from "../../../../public/assets/img/hero/hero-sm-1.jpg";
import thumb_1 from "../../../../public/assets/img/hero/hero-sm-3.png";
import thumb_2 from "../../../../public/assets/img/hero/hero-sm-4.jpg";
import hero_thumb_2 from "../../../../public/assets/img/hero/hero-sm-2.jpg";
import HeroForm from "@/forms/hero-form";
import LineShape from "@/svg/line-shape";
import Link from "next/link";
import globeImg from "../../../../public/assets/img/hero/powered-hero-shape.png";

// hero content data
const hero_content = {
  hero_shape: [
    {
      id: 1,
      cls: "tp-hero-shape-1",
      img: shape_1,
    },
    {
      id: 2,
      cls: "tp-hero-shape-2",
      img: shape_2,
    },
  ],
  hero_title: (
    <>
      <div className="tp_title">
        <span className="child">Welcome to</span>
      </div>

      <span className="mb-10 d-block">
        <span className="child">Metamind Systems Private Limited.</span>
      </span>
    </>
  ),
  sub_title: (
    <>
      
        Your trusted partner in digital transformation, innovative software
        solutions and creating sustainable technology solutions that drive
        business growth by enhancing user experiences.
    
    </>
  ),
  hero_shape_img: [
    {
      id: 1,
      cls: "1",
      img: shape_img_1,
    },
    {
      id: 2,
      cls: "2",
      img: shape_img_2,
    },
  ],

  hero_thumbs: [
    {
      id: 1,
      col: "4",
      cls: "tp-hero__sm-img",
      img: thumb_1,
    },
    {
      id: 2,
      col: "8",
      cls: "",
      img: thumb_2,
    },
  ],
};
const { hero_shape, hero_title, sub_title, hero_shape_img, hero_thumbs } =
	hero_content;

const HeroSlider = () => {
	let hero_bg = useRef(null);

	useEffect(() => {
		gsap.from(hero_bg.current, {
			opacity: 0,
			scale: 1.2,
			duration: 1.5,
		});
		gsap.to(hero_bg.current, {
			opacity: 1,
			scale: 1,
			duration: 1.5,
		});
	}, []);

	useCharAnimation(".tp-hero__hero-title span.child");

	return (
    <>
      <div className="tp-hero__area tp-hero__pl">
        <div className="tp-hero__bg p-relative">
          <div className="tp-hero-bg tp-hero-bg-single" ref={hero_bg}>
            <Image
              className="d-none d-md-inline-block"
              // style={{width: "auto", height: "auto"}}
              src={hero_frame}
              alt="Metamind"
            />
            <Image
              className="d-block d-md-none mobile-img"
              // style={{width: "auto", height: "auto"}}
              src={hero_frame_mobile}
              alt="Metamind"
            />
          </div>
          <div className="tp-hero-shape">
            {hero_shape.map((item, i) => (
              <Image
                // style={{width: "auto", height: "auto"}}
                key={i}
                className={item.cls}
                src={item.img}
                alt="Metamind "
              />
            ))}
          </div>
          <div className="container">
            <div className="row ">
              <div className="col-xl-6">
                <div className="tp-hero__content-box z-index-3">
                  <div className="tp-hero__title-box p-relative">
                    <h2 className="tp-hero__hero-title tp-title-anim">
                      {hero_title}
                    </h2>
                  </div>

                  <p
                    className="wow tpfadeUp  mb-3 "
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                  >
                    {sub_title}
                  </p>
                  <Link
                    className="tp-btn tp-btn-hover alt-color-black  wow tpfadeUp"
                    href="/service"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                  >
                    <span className="white-text">Know More</span>
                    <b></b>
                  </Link>
                </div>
              </div>
              <div
                className="col-xl-6 relative  wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <Image className="globe" src={globeImg}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
