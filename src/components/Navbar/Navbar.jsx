import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import AuthContext from "../../contexts/AuthContext";
function Navbar() {
  const { user, signoutUser } = use(AuthContext);

  const handleLogOut = () => {
    console.log("user is trying to log out");
    signoutUser();
  };
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
        <img
          className="w-12 h-12 object-cover rounded-full"
          src={user ? user.photoURL : userIcon}
          alt=""
        />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary px-10 text-lg"
          >
            Log out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 text-lg">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
