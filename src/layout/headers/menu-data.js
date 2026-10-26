const menu_data = [
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "About Us +",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "About Us" },
      { link: "/team", title: "Team" },
      // { link: "/#", title: "Career" },
      // { link: "/#", title: "Testimonials" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Surveillance Solutions",
    link: "/surveillance",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Cyber Security Solutions",
    link: "/cyber-security",
    active: "",
  },
  // {
  //   id: 2,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Surveillance",
  //   link: "/#",
  //   active: "",
  // },
  {
    id: 2,
    mega_menu: true,
    has_dropdown: true,
    title: "Products +",
    link: "/software-as-a-product",
    active: "",
    sub_menus: [
      { link: "/workfusion", title: "Workfusion" },
      {
        link: "/document-management-system",
        title: "Document Management System",
      },
      // { link: "/service", title: "Development" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Services",
    link: "/service",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "e-Governance Solutions +",
    link: "/e-governance-solutions",
    active: "",
    sub_menus: [
      { link: "/digital-mapping", title: "Digital Mapping" },
      // { link: "/geo-referencing", title: "Geo-referencing" },
      { link: "/kumbh2025", title: "Kumbh 2025" },
    ],
  },


  // {
  //   id: 5,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Contact",
  //   link: "/contact",
  //   active: "",
  // },
];
export default menu_data;
