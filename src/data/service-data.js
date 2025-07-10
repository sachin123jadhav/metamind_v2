import ServiceIconOne from "../svg/service/service-icon-1"
import ServiceIconTwo from "../svg/service/service-icon-2"
import ServiceIconThree from "../svg/service/service-icon-3"
import ServiceIconFoure from "../svg/service/service-icon-4"
import ServiceIconFive from "../svg/service/service-icon-5"
import ServiceIconsix from "../svg/service/service-icon-6"
import ServiceIconSeven from "../svg/service/service-icon-7"

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/sv-icon-2.png";
import img_3 from "../../public/assets/img/service/sv-icon-3.png";
import img_4 from "../../public/assets/img/service/sv-icon-4.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";

const service_data = [
  // for home 01
  {
    id: 1,
    icon: img_1,
    img: img_1,
    title: "Software Product Development",
    link: "/software-as-a-product",
    description: (
      <>
        Software Product Development involves the process of designing,
        creating, testing, and deploying software applications that meet
        specific business or user needs. From initial concept to launch, it
        includes stages like planning, coding, debugging, and refinement to
        ensure a high-quality, functional product. This process focuses on
        creating innovative, scalable, and reliable solutions that enhance user
        experience and drive business success.
      </>
    ),
    delay: ".4s",
  },
  {
    id: 2,
    icon: img_2,
    img: img_2,
    title: "Software as a Service (SaaS)",
    link: "/service",
    description: (
      <>
        Software as a Service (SaaS) is a cloud-based model that delivers
        software applications over the internet. It eliminates the need for
        installation or maintenance, with the provider managing updates,
        security, and infrastructure. SaaS offers flexibility, scalability, and
        cost-efficiency, making it ideal for various business functions like
        CRM, accounting, and project management.
      </>
    ),
    delay: ".6s",
  },
  {
    id: 3,
    icon: img_3,
    img: img_3,
    title: "Web Development",
    link: "/service#wd",
    description: (
      <>
        State-of-the-art web solutions that combine aesthetic design with
        powerful functionality to create engaging digital experiences. At
        Metamind Systems Pvt. Ltd., we specialize in creating dynamic and
        responsive websites.
      </>
    ),
    delay: ".7s",
  },
  {
    id: 4,
    icon: img_4,
    img: img_4,
    title: "E-Commerce Development",
    link: "/service#ecd",
    description: (
      <>
        Custom e-commerce platforms that drive sales, enhance customer
        experience, and streamline business operations. Transform your online
        business with our comprehensive e-commerce website development services.
      </>
    ),
    delay: ".8s",
  },
  {
    id: 5,
    icon: img_5,
    img: img_5,
    title: "Digital Transformation Services",
    link: "/service#dts",
    description: (
      <>
        Strategic digital solutions that modernize your business processes and
        create sustainable competitive advantages. Embrace the future of
        business operations with Metamind Systems Pvt. Ltd.'s digital
        transformation services.
      </>
    ),
    delay: ".9s",
  },
  {
    id: 6,
    icon: img_5,
    img: img_5,
    title: "E-Governance Solutions",
    link: "/e-governance-solutions",
    description: (
      <>
        In the rapidly evolving digital era, governments worldwide are embracing
        e-governance solutions to streamline operations, enhance citizen
        services, and foster transparency and efficiency. Our comprehensive
        range of e-governance solutions is designed to empower governments and
        public institutions in their digital transformation journey.
      </>
    ),
    delay: ".9s",
  },
];
export default service_data