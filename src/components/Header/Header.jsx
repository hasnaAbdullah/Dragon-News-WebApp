import React from "react";

import Marquee from "react-fast-marquee";
import Navbar from "../Navbar/Navbar";
import HeaderTop from "./HeaderTop";
function Header() {
  return (
    <header className="flex flex-col items-center py-5 ">
      <HeaderTop />
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
