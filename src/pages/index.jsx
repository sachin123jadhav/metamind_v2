
import React from "react";
import SEO from "../common/seo";
import { PAGES } from "@/data/seo-data";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO {...PAGES.home} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
