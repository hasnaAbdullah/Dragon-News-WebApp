import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
function QZone() {
  return (
    <div className="p-5 rounded-lg bg-base-200">
      <h2 className="text-2xl font-semibold ">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
      </div>
    </div>
  );
}

export default QZone;
