import React from "react";
import { Navigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

function Home() {
  return <Navigate to="/category/1" />;
}

export default Home;
