import React from "react";
import SEO from "../common/seo";
import BlogList from "../components/blog-list";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Metamind - Data analytics"} />
      <BlogList />
    </Wrapper>
  );
};

export default index;
