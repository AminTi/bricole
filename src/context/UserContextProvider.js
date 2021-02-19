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
  const [ads, setUserAds] = useState([]);
  const [userCollection, setuserCollection] = useState([]);
  let tempDoc = [];
  let tempDocUsers = [];
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
    if (user) {
      const newdata = {
        Company: data.Company,
        Profession: data.Profession,
        email: data.email,
        adress: data.adress,
        city: data.city,
        firstname: data.firstname,
        lastname: data.lastname,
        id: user.uid,
      };
      fire.firestore().collection("users").doc(user.uid).set({ newdata });
    }
  };

  const getCollection = async (userId) => {
    await fire
      .firestore()
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        setprofilData(doc.data());
      });
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

  const getAd = async (data) => {
    const file = data.image[0];
    const storagRef = fire.storage().ref();
    const fileRef = storagRef.child(data.image[0].name);
    await fileRef.put(data.image[0]);
    const fileUrl = await fileRef.getDownloadURL();

    const payload = {
      titel: data.titel,
      Price: data.price,
      avatar: fileUrl,
      profession: data.Profession,
      description: data.description,
      id: user.uid,
    };

    await fire.firestore().collection("advertising").add({ payload });
    await getDataAds();
    await getAllUsers();
  };

  const getDataAds = async () => {
    await fire
      .firestore()
      .collection("advertising")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc, key) => {
          // doc.data() is never undefined for query doc snapshots => Notice
          let payload = {
            adsId: doc.id,
            Price: doc.data().payload.Price,
            avatar: doc.data().payload.avatar,
            description: doc.data().payload.description,
            profession: doc.data().payload.profession,
            id: doc.data().payload.id,
            titel: doc.data().payload.titel,
          };
          console.log(payload);
          tempDoc.push({ ...payload });
        });
        setUserAds(tempDoc);
      });
  };

  const getAllUsers = async () => {
    await fire
      .firestore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tempDocUsers.push({ ...doc.data().newdata });
        });
        setuserCollection(tempDocUsers);
      });
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

  const deleteData = (data) => {
    if (data) {
      fire.firestore().collection("advertising").doc(data).delete();
    }
  };
  return (
    <UserContext.Provider
      value={{
        tempDoc,
        user,
        ads,
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
        getAd,
        getAllUsers,
        getDataAds,
        tempDocUsers,
        userCollection,
        deleteData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
