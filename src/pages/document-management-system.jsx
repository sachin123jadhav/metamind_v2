import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Products from "../components/products";
import WorkFusion from "@/components/workfusion";
import Dms from "@/components/dms";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Document Sanagement System"} />
      <div className="page-bg">
        <Dms />
      </div>
    </Wrapper>
  );
};

export default index;
