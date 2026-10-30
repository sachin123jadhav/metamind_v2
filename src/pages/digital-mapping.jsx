import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import Wrapper from "../layout/wrapper";
import DigitalMapping from "@/components/digital-mapping";

const index = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.digitalMapping} />
      <div className="page-bg">
        <DigitalMapping />
      </div>
    </Wrapper>
  );
};

export default index;
