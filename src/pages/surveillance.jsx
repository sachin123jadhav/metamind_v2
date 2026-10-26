import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Surveillance from "@/components/surveillance";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Surveillance Solutions"} />
      <div className="page-bg">
        <Surveillance />
      </div>
    </Wrapper>
  );
};

export default index;
