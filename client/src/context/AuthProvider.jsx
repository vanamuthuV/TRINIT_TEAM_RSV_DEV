import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //   useEffect(() => {
  //     if (Object.keys(user).length === 0) {
  //       const ReloadUser = async () => {
  //         try {
  //           const response = await axios.post(RELOAD_USER, {
  //             headers: {
  //               "Content-Type": "application/json", // Adjust the content type as needed
  //               Authorization: Bearer ${localStorage.getItem("accessToken")},
  //             },
  //           });
  //           console.log(response?.data?.data);
  //           setUser(response?.data?.data);
  //           setAuth(response?.data?.data);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       };
  //       ReloadUser();
  //     }
  //   }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;