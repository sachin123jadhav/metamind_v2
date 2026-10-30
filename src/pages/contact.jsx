import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Contact from "../components/contact";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.contact} />
      <Contact />
    </Wrapper>
  );
};

export default index;
