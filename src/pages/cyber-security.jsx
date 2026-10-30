import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Wrapper from "../layout/wrapper";
import CyberSecurity from "@/components/cyber-security";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.cyberSecurity} />
      <div className="page-bg">
        <CyberSecurity />
      </div>
    </Wrapper>
  );
};

export default index;
