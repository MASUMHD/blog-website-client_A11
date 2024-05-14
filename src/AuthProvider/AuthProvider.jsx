import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
// Google provider
const GoogleProvider = new GoogleAuthProvider();
// const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  // LogOut
  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  // wishlist
  const addWishlist = (data) => {
    // setLoading(true);
    return axios.post("https://blogs-news-pi.vercel.app/addWishlist", data);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const userEmail = createUser?.email || user.email;
      const loggedUser = { email: userEmail };
      if (user) {
        setUser(user);
        console.log("user:", user);
        // setLoading(false)

        // if user exists then get jwt token
        
        axios.post('https://blogs-news-pi.vercel.app/jwt',loggedUser, { withCredentials: true })
        .then((res) => {
          console.log('token response:',res.data);
        });
      }
      else{
        axios.post('https://blogs-news-pi.vercel.app/logout', loggedUser, { withCredentials: true })
        .then((res) => {
          console.log('token response:',res.data);
        })
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logOut,
    addWishlist,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
