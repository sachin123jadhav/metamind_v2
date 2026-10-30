import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Service from "../components/service";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.service} />
      <Service />
    </Wrapper>
  );
};

export default index;
