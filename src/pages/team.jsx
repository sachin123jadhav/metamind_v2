import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Team from "../components/team";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.team} />
      <Team />
    </Wrapper>
  );
};

export default index;
