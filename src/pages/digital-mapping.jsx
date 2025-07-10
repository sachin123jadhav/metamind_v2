import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Products from "../components/products";
import WorkFusion from "@/components/workfusion";
import DigitalMapping from "@/components/digital-mapping";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Work Fusion HRMS"} />
      <div className="page-bg">
        <DigitalMapping />
      </div>
    </Wrapper>
  );
};

export default index;
