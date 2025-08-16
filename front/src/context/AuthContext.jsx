

// import React, { createContext, useState } from 'react'

// export const AuthContext = createContext(); // forgot 

// export default function AuthProvider({children}) {

//   const [authUser , setAuthUser] = useState(null);
//   const [loading, setLoading] = useState(false);
  
//   return (
//       <AuthContext.Provider value={{authUser,loading}}>
//         {children}
//         </AuthContext.Provider>
//   )
// }




import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

  //  rember useEffect to handel dynamic changes 
export default function AuthProvider({ children }) {

  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);

  const [authUser, setAuthUser] = useState(() => {
    const user = localStorage.getItem("authUser");
     // if user exist parse it 
    return user ? JSON.parse(user) : null;   //  must parse data from localStorage 
  });


  // Save token,user to localStorage when change
  useEffect(() => { 
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
    if (authUser) localStorage.setItem("authUser", JSON.stringify(authUser));
    else localStorage.removeItem("authUser");
  }, [token, authUser]);


  // Login function
  const login = (user, token) => {
    setAuthUser(user);
    setToken(token);
  };


  // Logout function
  const logout = () => {
    setAuthUser(null);
    setToken(null);
  };



  return (
    <AuthContext.Provider value={{ authUser, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}










