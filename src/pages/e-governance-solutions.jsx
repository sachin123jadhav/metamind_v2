import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import CyberSecurity from "@/components/cyber-security";
import EGovernanceSolutions from "@/components/e-governance-solutions";


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"E-Governance Solutions"} />
      <div className="page-bg">
        <EGovernanceSolutions />
      </div>
    </Wrapper>
  );
};

export default index;
