import React, { createContext, useState, useEffect } from "react";
import fire from "../components/config/fire";
import { useHistory } from "react-router";

export const UserContext = createContext({});

function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [eml, setEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [profil, setprofil] = useState({});
  const [profilData, setprofilData] = useState("");

  const history = useHistory();

  const handelSingUp = () =>
    fire
      .auth()
      .createUserWithEmailAndPassword(eml, myPassword)
      .catch((err) => {
        switch (err.code) {
          case "auth/email.already-in-use":
          case "auth-invalid.email":
            alert(err.message);
            break;
          case "auth/weak-password":
            alert(err.message);
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
            return alert(err.message);

            break;
          case "auth/wrong-password":
          case "auth/wrong-password":
            return alert(err.message);
            break;
        }
      });

  const handelLogOut = () => {
    fire.auth().signOut();
  };

  const CreateCollection = (data) => {
    if (data) {
      fire
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set(data && { data });
    }
  };

  const getCollection = async () => {
    if (user) {
      await fire
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          return setprofilData(doc.data());
        });
    }
  };

  const Changes = () => {
    if (user) {
      let documentRef = fire.firestore().collection("users").doc(user.uid);
      documentRef.get().then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          history.push("/UserPage");
        }
      });
    }
  };

  const authListnner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(user);
      }
    });
    Changes();
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
        authListnner,
        CreateCollection,
        profil,
        setprofil,
        getCollection,
        profilData,
        Changes,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
