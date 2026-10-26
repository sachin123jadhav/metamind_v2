import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import React from "react";
import TeamArea from "./team-area";
import Header from "@/layout/headers/header";
import FooterTwo from "@/layout/footers/footer-2";

const Team = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Team Member"} innertitle={"Team Member"} />
            <TeamArea />
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default Team;
