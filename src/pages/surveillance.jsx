import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Wrapper from "../layout/wrapper";
import Surveillance from "@/components/surveillance";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.surveillance} />
      <div className="page-bg">
        <Surveillance />
      </div>
    </Wrapper>
  );
};

export default index;
