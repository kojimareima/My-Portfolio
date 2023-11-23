import React from "react";
import BasicInfo from "../components/Profile/BasicInfo";
import Skill from "../components/Profile/Skill";
import Career from "../components/Profile/Career";
import Internship from "../components/Profile/Internship";

const Profile = () => {
  return (
    <div>
      <BasicInfo />
      <Skill />
      <Career />
      <Internship />
    </div>
  );
};

export default Profile;
