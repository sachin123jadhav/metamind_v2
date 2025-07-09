import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Products from "../components/products";
import CyberSecurity from "@/components/cyber-security";
import CyberSecurityArea from "@/components/cyber-security/cyber-security-area";

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
