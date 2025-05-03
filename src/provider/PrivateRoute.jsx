import React, { use } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

function PrivateRoute({ children }) {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  //   console.log(location);
  // const navigate = useNavigate() evabe use korle error ase kno
  if (loading) {
    return <Loading />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>; // return navigate("/auth/login")
}

export default PrivateRoute;
