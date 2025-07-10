import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import SoftwareAsAProduct from "@/components/software-as-a-product";


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Software as a Product"} />
      <div className="page-bg">
      <SoftwareAsAProduct />
      </div>
    </Wrapper>
  );
};

export default index;
