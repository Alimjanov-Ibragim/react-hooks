import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {}
});

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHander = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{
        login: loginHander,
        isAuth: isAuthenticated
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
