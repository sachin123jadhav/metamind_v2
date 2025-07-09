import ContactUsForm from '@/forms/contact-us-form';
import SendIcon from '@/svg/send-icon';
import Link from 'next/link';
import React from 'react';

import img from "../../../public/assets/img/contact/contact-icon-sm-4.png";
import Image from 'next/image';
import LocationIcon from "@/svg/location-icon";
import LocationIconThree from "@/svg/location-icon-3";
import LocationMap from "@/svg/location-map";
import EmailIcon from "@/svg/email";
import Call from "@/svg/call";
import MailIcon from "@/svg/e-Mail";


const contact_content  = {
    sub_title: "CONTACT US",
    tilte: <>We'd love to <br /> hear From  {" "}<span> <SendIcon /> </span> {" "}you.</>,
    info: <>While we're good with smoke signals, there <br /> are easier ways to get in touch.</> ,
     
}
const {sub_title, tilte, info}  =  contact_content


const ContactFormArea = () => {
    return (
      <>
        <div className="contact-form-area pb-40 page-bg pt-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="">
                  <div className="postbox__comment-form contact-wrap iq-service-box card">
                    <ContactUsForm />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="card shadow contact-details ">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h2 className="title">Contact Us</h2>
                    <p className="pb-40">
                      Feel free to contact us from below details information
                    </p>

                    <div className="rc__post mb-20 d-flex">
                      <div className="rc__post-thumb icon-wrap mr-20">
                        <LocationMap />
                      </div>
                      <div className="rc__post-content">
                        <h2 className="contact-head">Visit our office</h2>
                        <div className="rc__meta">
                          <p>
                            <b>Metamind Systems Pvt. Ltd.</b> <br></br>"Govind",
                            Plot no 7C, Sr No 91/1, Lane no 13 D, Shree Ganesh
                            krupa Society, Kothrud, Pune - 411038
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rc__post mb-20 d-flex">
                      <div className="rc__post-thumb icon-wrap mr-20">
                        <Call />
                      </div>
                      <div className="rc__post-content">
                        <h2 className="contact-head">Call Us</h2>
                        <div className="rc__meta">
                          <p>
                            Office :{" "}
                            <a href="tel:+912026059659"> +91 20 26059659</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rc__post mb-20 d-flex">
                      <div className="rc__post-thumb icon-wrap mr-20">
                        <MailIcon />
                      </div>
                      <div className="rc__post-content">
                        <h2 className="contact-head">Request a quote</h2>
                        <div className="rc__meta">
                          <p>
                            Office :{" "}
                            <a href="mailto:info@metamindsystem.com">
                              {" "}
                              info@metamindsystem.com
                            </a>
                          </p>
                        </div>
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

export default ContactFormArea;