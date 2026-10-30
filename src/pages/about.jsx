import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import About from "../components/about";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.about} />
      <About />
    </Wrapper>
  );
};

export default index;
