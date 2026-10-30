import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Wrapper from "../layout/wrapper";
import Dms from "@/components/dms";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.dms} />
      <div className="page-bg">
        <Dms />
      </div>
    </Wrapper>
  );
};

export default index;
