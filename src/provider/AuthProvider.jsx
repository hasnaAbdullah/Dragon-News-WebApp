import React, { useState } from "react";
import AuthContext from "../contexts/AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const userInfo = {
    user,
    setUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
