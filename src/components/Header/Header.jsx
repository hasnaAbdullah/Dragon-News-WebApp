import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";
import Navbar from "../Navbar/Navbar";
function Header() {
  return (
    <header className="flex flex-col items-center py-5 ">
      <div className="space-y-2 text-center">
        <img className="w-[400px]" src={logo} alt="logo image" />
        <p className="text-lg opacity-80">Journalism Without Fear or Favour</p>

        <p className="font-semibold text-accent">
          <span className="text-gray-700"> {format(new Date(), "EEEE")}</span>
          {format(new Date(), ", MMMM dd, yyyy")}
        </p>
      </div>
      <div className="w-full my-8 py-3 flex gap-5 px-4 bg-base-300 ">
        <p className="bg-secondary px-4 py-2 font-semibold text-white">
          Latest
        </p>
        <Marquee
          className="flex gap-10"
          pauseOnHover={true}
          gradient={true}
          gradientWidth={50}
        >
          <p className="mr-5">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
