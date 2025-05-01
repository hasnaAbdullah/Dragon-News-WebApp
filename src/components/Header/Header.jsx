import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
function Header() {
  return (
    <header className="flex flex-col items-center py-5">
      <div className="space-y-2 text-center">
        <img className="w-[400px]" src={logo} alt="logo image" />
        <p className="text-lg opacity-80">Journalism Without Fear or Favour</p>

        <p className="font-semibold text-accent">
          <span className="text-gray-700"> {format(new Date(), "EEEE")}</span>
          {format(new Date(), ", MMMM dd, yyyy")}
        </p>
      </div>
    </header>
  );
}

export default Header;
