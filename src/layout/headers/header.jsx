import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/common/offcanvus';
import SearchPopup from '@/modals/search-popup';
import SearchIconTwo from '@/svg/search-icon-2';
import UserIcon from '@/svg/user-icon';
import {gsap} from 'gsap';
import Link from 'next/link';
import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import NavMenu from './nav-menu';
import Image from 'next/image';

import logo from "../../../public/assets/img/logo/MetaMind.svg";
import SocialLinks from '@/common/social-links';

const Header = () => {

      const {sticky}  =  useSticky()
      const [searchOpen, setSearchOpen] = useState(false)
      const [sidebarOpen, setSidebarOpen] = useState(false)

      // gsa use
      let g_timline = new gsap.timeline();
      let header_top_animation = useRef(null)

      useEffect(() => {
         gsap.from(header_top_animation,  {
            opacity: 0,
		      y: '20px',
            delay: 1.05
         });
         gsap.to(header_top_animation, {
            opacity:1,
            y: '0px',
            delay: 1.05
        })
      },[])
 

    return (
      <>
        <header className="header-bottom__transparent z-index-6 tp-header-height">
          <div
            className="header-top__area  header-top__bg z-index-3 d-none d-md-block tp-header-top-animation "
            ref={(el) => (header_top_animation = el)}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-4">
                  <div className="header-top__link header-top__space">
                    <span className="text-white fs-6">
                      <i className="fas fa-phone-volume text-white "></i> +91 20
                      26059659
                    </span>
                  </div>
                </div>
                <div className="col-8">
                  <div className="header-top__support text-end">
                    <span>
                      {" "}
                      <i className="fas fa-envelope "> </i>{" "}
                      info@metamindsystem.com
                    </span>
                    <span>
                      Visit Us: <SocialLinks /> 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="header-sticky"
            className={`header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5 ${
              sticky && "header-sticky"
            }`}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                  <div className="header-bottom__logo">
                    <Link href="/">
                      <Image src={logo} alt="theme-pure" />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
                  <div className="header-bottom__main-menu">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                  <div className="header-bottom__right d-flex align-items-center justify-content-end">
                    <div className="header-bottom__action">
                      <a
                        className="d-none d-md-inline-block search-open-btn"
                        onClick={() => setSearchOpen(true)}
                      >
                        <SearchIconTwo />
                      </a>
                      <Link
                        className="d-none d-lg-inline-block last-child"
                        href="/register"
                      >
                        <UserIcon />
                        <span>Log In</span>
                      </Link>
                    </div>
                    <div className="header-bottom__btn d-flex align-items-center">
                      <Link
                        className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block"
                        href="/service-details"
                      >
                        <span className="white-text">Get Started</span>
                        <b></b>
                      </Link>
                      <a
                        className="header-bottom__bar d-lg-none tp-menu-bar"
                        onClick={() => setSidebarOpen(true)}
                      >
                        <i className="fal fa-bars"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </>
    );
};

export default Header;