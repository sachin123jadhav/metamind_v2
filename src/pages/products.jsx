import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import Products from "../components/products";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Products"} />
      <div className="page-bg">
        <Products />
      </div>
    </Wrapper>
  );
};

export default index;
