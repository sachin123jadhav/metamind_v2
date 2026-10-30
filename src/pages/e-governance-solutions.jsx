import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Wrapper from "../layout/wrapper";
import EGovernanceSolutions from "@/components/e-governance-solutions";


const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.eGovernance} />
      <div className="page-bg">
        <EGovernanceSolutions />
      </div>
    </Wrapper>
  );
};

export default index;
