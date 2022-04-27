import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
function AuthContextProvider(props) {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
export { AuthContextProvider };
