import React from "react";
import { Link, NavLink } from "react-router";
import user from "../../assets/user.png";
function Navbar() {
  return (
    <nav className="flex gap-5 justify-between w-full items-center">
      <div className=""></div>
      <ul className="flex gap-5 items-center text-accent  font-semibold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/career">Career</NavLink>
        </li>
      </ul>
      <div className="flex gap-5 items-center">
        <img src={user} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-10 text-lg">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
