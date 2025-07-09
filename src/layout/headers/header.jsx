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

    
 

    return (
      <>
        <header className="header-bottom z-index-6 tp-header-height bg-white">
          <div
            className="header-top__area  header-top__bg z-index-3 d-none d-md-block  "
            ref={(el) => (header_top_animation = el)}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-4">
                  <div className="header-top__link header-top__space">
                    <span className="text-white fs-6">
                      <i className="fas fa-phone-volume text-white"></i> +91 20
                      26059659
                    </span>
                  </div>
                </div>
                <div className="col-8">
                  <div className="header-top__support text-end">
                    <span>
                      {" "}
                      <i className="fas fa-envelope mr-3"> </i>{" "}
                      info@metamindsystem.com
                    </span>
                    {/* <span className="pl-15">
                      Visit Us: <SocialLinks />
                    </span> */}
                    <Link className="pl-15" href="/career">
                      <u>Career</u>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="header-sticky"
            className={`header-bottom__area header-mob-space header-bottom__area-2 header-bottom z-index-5 ${
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

                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-8 col-6">
                  <div className="d-flex  justify-content-end">
                    <div className="header-bottom__main-menu d-none d-lg-flex">
                      <nav id="mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                    <div className="header-bottom__right d-flex align-items-center justify-content-end">
                      <div className="header-bottom__action"></div>
                      <div className="header-bottom__btn d-flex align-items-center">
                        <Link
                          className="tp-btn-orange tp-btn-hover alt-color-green d-none d-md-inline-block"
                          href="/contact"
                        >
                          <span className="white-text">Contact</span>
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
          </div>
        </header>
        <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </>
    );
};

export default Header;