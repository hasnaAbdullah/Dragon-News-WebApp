import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";

function RightSide() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-5">Login With</h2>
      <SocialLogin />
    </div>
  );
}

export default RightSide;
