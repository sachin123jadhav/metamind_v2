import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Wrapper from "../layout/wrapper";
import GeorefeRencing from "@/components/geo-referencing";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.geoReferencing} />
      <div className="page-bg">
        <GeorefeRencing />
      </div>
    </Wrapper>
  );
};

export default index;
