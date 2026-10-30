import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Wrapper from "../layout/wrapper";
import SoftwareAsAProduct from "@/components/software-as-a-product";


const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.softwareProduct} />
      <div className="page-bg">
      <SoftwareAsAProduct />
      </div>
    </Wrapper>
  );
};

export default index;
