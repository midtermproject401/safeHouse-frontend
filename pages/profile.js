import { ChakraProvider } from "@chakra-ui/react";

import React, { useContext } from "react";
// import Card from "react-bootstrap/Card";
import { LoginContext } from "../context/loginContext";
import SplitScreen from "../components/signin2";
import Profile from "../components/Profile";
import ProductAddToCart from "../components/favProfileCard";
import Favaroite from "../components/actualFav";
export default function Profile2() {
  const { user } = useContext(LoginContext);
  const userName = user.username;

  return (
    <>
      <ChakraProvider>
        {/* <SplitScreen /> */}
        <Profile />
        <hr className="hr" />
        <hr className="hr" />
        <hr className="hr" />

        <h2 className="favH2">My Favorites List </h2>
        <Favaroite />
      </ChakraProvider>
    </>
  );
}
