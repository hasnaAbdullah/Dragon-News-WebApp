import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

function AuthLayout() {
  return (
    <div className="w-9/12 mx-auto">
      <div className=" py-5">
        <Navbar />
      </div>
      <div className="flex justify-center  min-h-[calc(100vh-100px)] items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
