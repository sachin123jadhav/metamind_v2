// Single source of truth for page metadata. Used by src/common/seo.jsx and scripts/generate-sitemap.mjs.
// Keep titles under ~60 characters and descriptions under ~160 so search engines show them in full.

export const SITE = {
  name: "Metamind Systems",
  legalName: "Metamind Systems Pvt. Ltd.",
  url: "https://metamindsystem.com",
  logo: "/icon.png",
  defaultImage: "/assets/img/hero/powered-hero-bg.jpg",
  email: "info@metamindsystem.com",
  phone: "+91-20-26059659",
  locale: "en_IN",
  sameAs: [
    "https://www.linkedin.com/company/metamind-systems-pvt-ltd/",
    "https://www.instagram.com/metamind_systems_/",
  ],
  addresses: [
    {
      streetAddress:
        "Govind, Plot no 7C, Sr No 91/1, Lane no 13 D, Shree Ganesh Krupa Society, Kothrud",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411038",
      addressCountry: "IN",
    },
    {
      addressRegion: "TX",
      addressCountry: "US",
    },
  ],
};

export const PAGES = {
  home: {
    path: "/",
    title: "Metamind Systems | Software Development & E-Governance Solutions",
    description:
      "Metamind Systems builds e-governance, AI surveillance, cyber security, GIS mapping, HRMS and document management software for government and enterprise.",
    priority: 1.0,
  },
  about: {
    path: "/about",
    title: "About Metamind Systems | IT & Software Company in Pune",
    description:
      "Metamind Systems Pvt. Ltd. is a technology company in Pune, India and Texas, USA delivering client-centric software and e-governance solutions.",
    breadcrumb: "About Metamind Systems",
    priority: 0.8,
  },
  service: {
    path: "/service",
    title: "IT Services: Web, E-Commerce, SaaS & Software Development",
    description:
      "Custom software product development, SaaS, web development, e-commerce development and digital transformation services from Metamind Systems.",
    breadcrumb: "IT Services",
    serviceType: [
      "Software Product Development",
      "Software as a Service (SaaS)",
      "Web Development",
      "E-Commerce Development",
      "Digital Transformation Services",
    ],
    priority: 0.9,
  },
  eGovernance: {
    path: "/e-governance-solutions",
    title: "E-Governance Solutions for Government Departments",
    description:
      "E-governance solutions: digital identity, online citizen services, government portals, e-procurement, workflow automation and secure document management.",
    breadcrumb: "E-Governance Solutions",
    serviceType: ["E-Governance Solutions"],
    priority: 0.9,
  },
  surveillance: {
    path: "/surveillance",
    title: "AI Surveillance & Social Media Monitoring Solutions",
    description:
      "AI video surveillance with object detection, face recognition and crime analytics, plus social media monitoring and network behaviour analytics for agencies.",
    breadcrumb: "Surveillance Solutions",
    serviceType: ["Surveillance Solutions", "Social Media Analytics"],
    priority: 0.9,
  },
  cyberSecurity: {
    path: "/cyber-security",
    title: "Cyber Security Solutions & Threat Mitigation Services",
    description:
      "Cyber security solutions: real-time threat detection, SIEM, incident response, encryption, network and cloud security, and GDPR, HIPAA and PCI-DSS compliance.",
    breadcrumb: "Cyber Security Solutions",
    serviceType: ["Cyber Security Services"],
    priority: 0.9,
  },
  softwareProduct: {
    path: "/software-as-a-product",
    title: "Software Product Development | Metamind Products",
    description:
      "End-to-end software product development, from idea to launch, plus ready-to-use Metamind products: WorkFusion HRMS and Document Management System.",
    breadcrumb: "Software as a Product",
    serviceType: ["Software Product Development"],
    priority: 0.8,
  },
  workfusion: {
    path: "/workfusion",
    title: "WorkFusion HRMS | HR, Attendance & Leave Management Software",
    description:
      "WorkFusion HRMS by Metamind Systems: attendance, leave, timelog and employee file management in one easy, error-free HR software.",
    breadcrumb: "WorkFusion HRMS",
    priority: 0.9,
  },
  dms: {
    path: "/document-management-system",
    title: "Document Management System (DMS) Software",
    description:
      "Document management system with multi-level categorisation, meta tagging and fast retrieval for government agencies, universities and corporate organisations.",
    breadcrumb: "Document Management System",
    image: "/assets/img/product/DMS.jpg",
    priority: 0.9,
  },
  digitalMapping: {
    path: "/digital-mapping",
    title: "GIS Digital Mapping & Digitisation of Land Records",
    description:
      "GIS based digitisation of land records with the Government of Maharashtra: accurate digital mapping, easy citizen access and transparent land administration.",
    breadcrumb: "GIS - Digitisation of Land Records",
    serviceType: ["GIS Mapping", "Land Records Digitisation"],
    priority: 0.8,
  },
  geoReferencing: {
    path: "/geo-referencing",
    title: "Georeferencing Services for Maps & Land Records",
    description:
      "Georeferencing of land records with the Government of Maharashtra: mapping land parcels to accurate geographic coordinates for transparent land administration.",
    breadcrumb: "Georeferencing Project",
    serviceType: ["Georeferencing Services"],
    priority: 0.8,
  },
  kumbh2025: {
    path: "/kumbh2025",
    title: "Maha Kumbh 2025 Smart Solutions | Metamind Systems",
    description:
      "Metamind smart solutions for Prayagraj Maha Kumbh Mela 2025: cyber threat mitigation, ICT sanitation and tentage monitoring, and digital lost and found.",
    breadcrumb: "Prayagraj Maha Kumbh Mela 2025",
    image: "/assets/img/Kumbh/Magh-Mela-1.jpg",
    priority: 0.7,
  },
  team: {
    path: "/team",
    title: "Our Team | Metamind Systems Experts",
    description:
      "Meet the skilled team behind Metamind Systems: leaders, engineers and designers with decades of combined experience in software and e-governance.",
    breadcrumb: "Our Team",
    priority: 0.6,
  },
  career: {
    path: "/career",
    title: "Careers at Metamind Systems | IT Jobs in Pune",
    description:
      "Join Metamind Systems in Pune. See current openings for .NET developers and business development managers, and apply online.",
    breadcrumb: "Careers at Metamind",
    priority: 0.6,
  },
  contact: {
    path: "/contact",
    title: "Contact Metamind Systems | Pune, India & Texas, USA",
    description:
      "Contact Metamind Systems for software development, e-governance and IT services. Offices in Kothrud, Pune and Texas, USA. Call +91 20 26059659.",
    breadcrumb: "Contact Us",
    priority: 0.7,
  },
  notFound: {
    path: "/404",
    title: "Page Not Found | Metamind Systems",
    description: "The page you are looking for does not exist.",
    noindex: true,
  },
};

// Absolute URL with the trailing slash the static export uses (see trailingSlash in next.config.mjs)
export const absoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path === "/" ? "/" : `${path.replace(/\/+$/, "")}${/\.[a-z0-9]+$/i.test(path) ? "" : "/"}`;
  return `${SITE.url}${clean}`;
};
