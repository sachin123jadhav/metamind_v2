import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

import WorkFusion from "@/components/workfusion";
import Kumbh2025 from "@/components/kumbh2025";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Work Fusion HRMS"} />
      <div className="page-bg">
        <Kumbh2025/>
      </div>
    </Wrapper>
  );
};

export default index;
