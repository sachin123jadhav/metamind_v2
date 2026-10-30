import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";
import useTitleAnimation from "@/hooks/useTitleAnimation";
import Link from "next/link";
import React, { useRef } from "react";

 


const BreadcrumbTwo = ({ title, innertitle, team_details, career_details }) => {
  const { animeRef } = useBreadcrumbTitleAnime();
  let subtitleRef = useRef(null)

 useTitleAnimation(subtitleRef)
  return (
    <>
      <div className="breadcrumb__area breadcrumb-height p-relative green-bg-2">
      
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="breadcrumb__content text-end">
                {/* <h3
                  ref={animeRef}
                  className="breadcrumb__title tp-char-animation anime_text"
                >
                  {title}
                </h3> */}
                <div
                  ref={subtitleRef}
                  className="breadcrumb__list tp-title-anim tp__title_anime"
                >
                  <span className="child-one">
                    <Link href="/">Home</Link>
                  </span>
                  <span className="dvdr">
                    <i className="fal fa-angle-right"></i>
                  </span>
                  <h1
                    className={`breadcrumb__page-title ${
                      team_details || career_details ? "child-one" : ""
                    }`}
                  >
                    {innertitle}
                  </h1>
                  {team_details && (
                    <>
                      <span className="dvdr">
                        <i className="fal fa-angle-right"></i>
                      </span>
                      <span>Imdat Cimsit</span>
                    </>
                  )}
                  {career_details && (
                    <>
                      <span className="dvdr">
                        <i className="fal fa-angle-right"></i>
                      </span>
                      <span>Team Member</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbTwo;
