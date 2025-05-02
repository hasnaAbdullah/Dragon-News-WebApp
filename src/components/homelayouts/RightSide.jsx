import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import FindUS from "../FindUs/FindUS";
import QZone from "../QZone/QZone";

function RightSide() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-5">Login With</h2>
      <div className="space-y-8">
        <SocialLogin />
        <FindUS />
        <QZone />
      </div>
    </div>
  );
}

export default RightSide;
