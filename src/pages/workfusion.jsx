import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Wrapper from "../layout/wrapper";
import WorkFusion from "@/components/workfusion";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.workfusion} />
      <div className="page-bg">
        <WorkFusion />
      </div>
    </Wrapper>
  );
};

export default index;
