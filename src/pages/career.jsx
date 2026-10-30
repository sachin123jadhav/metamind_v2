import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Career from "../components/career";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.career} />
      <Career />
    </Wrapper>
  );
};

export default index;
