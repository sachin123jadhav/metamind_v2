import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Wrapper from "../layout/wrapper";

import Kumbh2025 from "@/components/kumbh2025";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.kumbh2025} />
      <div className="page-bg">
        <Kumbh2025/>
      </div>
    </Wrapper>
  );
};

export default index;
