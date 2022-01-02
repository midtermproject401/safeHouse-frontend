import React, { useState, useEffect } from "react";
import superagent from "superagent";
import base64 from "base-64";
import jwt from "jsonwebtoken";
import cookie from "react-cookies";
export const LoginContext = React.createContext();

export default function LoginProvider(props) {
  const API = "https://houses--safe.herokuapp.com";
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const [capabilities, setCapabilities] = useState(null);

  const loginFunction = async (username, password) => {
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set(
          "authorization",
          `Basic ${base64.encode(`${username}:${password}`)}`
        );

      const acl = response.body.user.capabilities;
      setCapabilities(acl);
      cookie.save("acl", acl);

      validateMyToken(response.body.token);
    } catch (err) {
      console.log(err);
    }
  };

  const signupFunction = async (username, password, role) => {
    try {
      const response = await superagent.post(`${API}/signup`, {
        username,
        password,
        role,
      });
      loginFunction(username, password);
    } catch (err) {
      console.log(err);
    }
  };

  const logoutFunction = () => {
    setLoggedIn(false);
    setUser({});
    cookie.remove("token");
    cookie.remove("acl");
  };

  const validateMyToken = (token) => {
    if (token) {
      const user = jwt.decode(token);
      console.log("user >>>", user);
      setLoggedIn(true);
      setUser(user);
      cookie.save("token", token);
    } else {
      setLoggedIn(false);
      setUser({});
    }
  };

  useEffect(() => {
    const myTokenCookie = cookie.load("token");
    const acl = cookie.load("acl");
    setCapabilities(acl);
    validateMyToken(myTokenCookie);
  }, []);

  const can = (capability) => {
    return capabilities?.includes(capability);
  };
  const state = {
    loggedIn: loggedIn,
    user: user, // user.username 
    loginFunction: loginFunction,
    logoutFunction: logoutFunction,
    can: can,
    signupFunction: signupFunction,
    capabilities: capabilities,
  };
  // console.log(11111,user);  //-----______-----
  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}
