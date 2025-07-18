import { CopyRight } from '@/common/social-links';
import EmailTwo from '@/svg/email-2';
import PhoneTwo from '@/svg/phone-2';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
// img import 
import footer_logo from "../../../public/assets/img/logo/MetaMind.svg";
const footer_content = {
  compInfo: (
    <>
      {" "}
      Metamind Systems Pvt. Ltd., we offer a wide range of services tailored to
      meet the digital needs of your business.
    </>
  ),
  address: (
    <>
      <b>Metamind Systems Pvt. Ltd.,</b> <br /> Govind, Plot no 7C, Sr No 91/1,
      Lane no 13 D, Shree Ganesh krupa Society, Kothrud, Pune - 411038
    </>
  ),
  address2: (
    <>
      <b>Metamind Systems Pvt. Ltd.,</b> <br />
      6850 Fitzgerald Ct, sugar land, TX 77479, USA
    </>
  ),
  phone: "+91 20 26059659",
  email: "info@metamindsystem.com",
  download: "Contact Info",
  footer_lisks: [
    {
      id: 1,
      cls: "footer-col-2-2",
      title: "Quick Links",
      delay: ".5s",
      links: [
        { name: "About Us", link: "/about" },
        // { name: "Testimonials", link: "#" },
        { name: "Contact Us", link: "/contact" },
        { name: "Team", link: "/team" },
        { name: "Careers", link: "/career" },
      ],
    },
    {
      id: 2,
      cls: "footer-col-2-3",
      title: "Our Service",
      delay: ".7s",
      links: [
        { name: "Cyber Security", link: "/cyber-security" },
        { name: "E-Commerce Development", link: "/service#ecd" },
        {
          name: "Digital Transformation Services",
          link: "/digital-mapping",
        },
        {
          name: "Software Product Development",
          link: "/software-as-a-product",
        },
        { name: "Software as a Service (SaaS)", link: "/service" },
      ],
    },
  ],
  social_links: [
    {
      link: "https://www.linkedin.com/company/metamind-systems-pvt-ltd/",
      target: "_blank",
      icon: "fab fa-linkedin",
    },
    {
      link: "https://www.instagram.com/metamind_systems_/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
      target: "_blank",
      icon: "fab fa-instagram",
    },
  ],
};
const {
  address,
  address2,
  phone,
  email,
  footer_lisks,
  download,
  social_links,
  compInfo,
} = footer_content;

const FooterTwo = () => {
    const [isOppen , setIsOppen]  = useState(false)
    const oppenLan = () => {
        setIsOppen(!isOppen)
    }
    return (
      <>
        <footer className="mt-25">
          <div className="tp-footer__pl-pr footer-bg">
            <div className="tp-footer__area pt-40 tp-footer__tp-border-bottom">
              <div className="container">
                <div className="row">
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 pb-30 "
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    <div className="tp-footer__widget footer-widget-2 footer-col-2-1">
                      <div className="tp-footer__logo mb-25">
                        <Link href="/">
                          <Image src={footer_logo} alt="Metamind" />
                        </Link>
                        <p className="mt-15">{compInfo}</p>
                      </div>
                      <div className="tp-footer__contact-info">
                        <ul>
                          <li>
                            <span>
                              <PhoneTwo />
                            </span>
                            <Link href={`tel:${phone}`}>{phone}</Link>
                          </li>
                          <li>
                            <span>
                              <EmailTwo />
                            </span>
                            <Link
                              className="first-child"
                              href={`mailto:${email}`}
                            >
                              {email}
                            </Link>
                          </li>
                        </ul>
                        <div className="tp-copyright__social">
                          <h6 className="mt-5">Follow Us:</h6>
                          {social_links.map((l, i) => (
                            <Link
                              key={i}
                              href={l.link}
                              target={l.target ? l.target : ""}
                            >
                              <i className={l.icon}></i>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {footer_lisks.map((item, i) => (
                    <div
                      key={i}
                      className="col-xl-3 col-lg-3 col-md-6 pb-30 "
                      data-wow-duration=".9s"
                      data-wow-delay={item.delay}
                    >
                      <div
                        className={`tp-footer__widget footer-widget-2 ${item.cls}`}
                      >
                        <h4 className="tp-footer__widget-title">
                          {item.title}
                        </h4>
                        <div className="tp-footer__content">
                          <ul>
                            {item.links.map((link, i) => (
                              <li key={i}>
                                <Link href={link.link}>{link.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div
                    className="col-xl-3 col-lg-3 col-md-6 pb-30"
                    data-wow-duration=".9s"
                    data-wow-delay=".9s"
                  >
                    <div className="tp-footer__widget footer-widget-2 footer-col-2-4">
                      <h4 className="tp-footer__widget-title">{download}</h4>
                      <h5 className="mt-15">India Office</h5>
                      <div className="tp-footer__download-box ">{address}</div>
                      <h5 className="mt-15">USA Office</h5>
                      <div className="tp-footer__download-box ">{address2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tp-copyright__area pt-20 pb-20">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-12 col-lg-12 col-md-12  d-none d-md-block">
                    <div className="tp-copyright__text tp-copyright__text-2 text-center">
                      <span>
                        <CopyRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
};

export default FooterTwo;