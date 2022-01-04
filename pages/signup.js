import { ChakraProvider } from "@chakra-ui/react";

import React, { useContext } from "react";
// import Card from "react-bootstrap/Card";
import { LoginContext } from "../context/loginContext";
import Signup from "../components/signup";

export default function profile() {
  const { user } = useContext(LoginContext);
  const userName = user.username;

  return (
    <>
      <ChakraProvider>
        {/* <SplitScreen /> */}
        <Signup />
      </ChakraProvider>
    </>
  );
}
