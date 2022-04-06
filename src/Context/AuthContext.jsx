import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const encoded_Token = localStorage.getItem("authData");
  const [userState, setUserState] = useState({});
  const [effectTrigger, setEffectTrigger] = useState(false);

  // const login = async (userDetails) => {
  //   try {
  //     const { data } = await axios.post(`/api/auth/login`, {
  //       email: userDetails.email,
  //       password: userDetails.password,
  //     });
  //     // saving the encodedToken in the localStorage
  //     localStorage.setItem("StormPlayToken", data.encodedToken);
  //     localStorage.setItem("StormPlayUser", data.foundUser.firstName);
  //     SuccessToast("Login Successful");
  //     setEffectTrigger(!effectTrigger);
  //   } catch (error) {
  //     AlertToast(`${error.response.data.errors}`);
  //   }
  // };

  useEffect(() => {
    (async function () {
      if (encoded_Token) {
        try {
          const response = await axios.post("/api/auth/verify", {
            encodedToken: encoded_Token,
          });
          if (response && response.data) {
            setUserState(response.data.user);
          }
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [effectTrigger]);

  return (
    <AuthContext.Provider
      value={{  effectTrigger, setEffectTrigger, userState, encoded_Token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };