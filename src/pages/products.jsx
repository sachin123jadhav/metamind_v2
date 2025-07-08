import React from "react";
import SEO from "../common/seo";
import Project from "../components/project";
import Wrapper from "../layout/wrapper";
import Products from "../components/products"

const indx = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Products"} />
      <div className="page-bg">

      <Products />
      </div>
    </Wrapper>
  );
};

export default indx;
