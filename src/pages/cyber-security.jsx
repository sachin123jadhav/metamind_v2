import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import CyberSecurity from "@/components/cyber-security";
 

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Cyber Security Solutions"} />
      <div className="page-bg">
        <CyberSecurity />
      </div>
    </Wrapper>
  );
};

export default index;
