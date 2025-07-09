import React from "react";
import SEO from "../common/seo";
import Service from "../components/service";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle={
          "Metamind :- Web Development,E-Commerce Development, Digital Transformation Services, Software Product Development (SaaP), Software as a Service (SaaS)"
        }
      />
      <Service />
    </Wrapper>
  );
};

export default index;
