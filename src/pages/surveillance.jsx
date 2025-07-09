import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Products from "../components/products";
import Surveillance from "@/components/surveillance";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Surveillance Soutions"} />
      <div className="page-bg">
        <Surveillance />
      </div>
    </Wrapper>
  );
};

export default index;
