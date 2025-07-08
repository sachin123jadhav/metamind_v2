import Image from "next/image";
import React from "react";
import shashank from "../../../public/assets/img/team/ShashakPatil.jpg";

import left_shape from "../../../public/assets/img/hero/hero-left-shape-3-1.png";
import TeamMember from "./TeamMember";
// import gradient_bg from "../../../../public/assets/img/hero/hero-gradient-3.jpg";

import TeamData from "@/data/TeamData";

function OurTeam() {
  return (
    <>
      <section className="team-bg">
        <div className="tp-hero-left-shape">
          <Image src={left_shape} alt="them-pure" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title text-center pb-25">Board Of Directors</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3"></div>
            {TeamData.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                image={member.image}
                designation={member.designation}
                colClass="col-md-3 col-sm-6" // Example: Different column classes
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurTeam;
