import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Products from "../components/products";
import WorkFusion from "@/components/workfusion";
import DigitalMapping from "@/components/digital-mapping";
import GeorefeRencing from "@/components/geo-referencing";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Georeferencing "} />
      <div className="page-bg">
        <GeorefeRencing />
      </div>
    </Wrapper>
  );
};

export default index;
