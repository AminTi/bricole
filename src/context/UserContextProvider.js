import React, { createContext, useState, useEffect } from "react";
import fire from "../components/config/fire";

export const UserContext = createContext({});

function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [eml, setEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [emailError, setEmailErr] = useState("");
  const [passwordError, setpasswordErr] = useState("");

  const handelSingUp = () =>
    fire
      .auth()
      .createUserWithEmailAndPassword(eml, myPassword)
      .catch((err) => {
        switch (err.code) {
          case "auth/email.already-in-use":
          case "auth-invalid.email":
            setEmailErr(err.message);
            console.log(err.message);
            break;
          case "auth/weak-password":
            setpasswordErr(err.message);
            console.log(err.message);
            break;
        }
      });

  const handelSingIn = () =>
    fire
      .auth()
      .signInWithEmailAndPassword(eml, myPassword)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailErr(err.message);
            console.log(err.message);
            break;
          case "auth/wrong-password":
          case "auth/wrong-password":
            setpasswordErr(err.message);
            console.log(err.message);
            break;
        }
      });

  const handelLogOut = () => {
    fire.auth().signOut();
  };

  const authListnner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(user);
      }
    });
  };

  useEffect(() => {
    authListnner();
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        eml,
        setEmail,
        myPassword,
        setMyPassword,
        handelSingUp,
        handelSingIn,
        handelLogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
