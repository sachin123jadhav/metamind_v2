import Image from "next/image";
import React from "react";

const TeamMember = ({ name, image, designation, colClass }) => {
  return (
    <div className={colClass || "col-md-3"}>
      {" "}
      {/* Use colClass prop, defaulting to "col-md-3" */}
      <div className="team-wrap shadow">
        <div className="team-inner">
          <div className="team-photo">
            <Image src={image} alt={name} />
          </div>
          <div className="team-details">
            <h2>{name}</h2>
            <p className="designation">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
