import { ChakraProvider } from "@chakra-ui/react";

import React, { useContext } from "react";
// import Card from "react-bootstrap/Card";
import { LoginContext } from "../context/loginContext";
import SplitScreen from "../components/signin2";
import Profile from "../components/profile";
import ProductAddToCart from "../components/favProfileCard";
export default function profile() {
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

        <h2 className="favH2">My Favorites </h2>
        <ProductAddToCart />
      </ChakraProvider>
    </>
  );
}
