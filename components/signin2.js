import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { LoginContext } from "../context/loginContext";
import styles from "../styles/Signin.module.css";
import Social from "./social";
import { ChakraProvider } from "@chakra-ui/react";

export default function SplitScreen() {
  const { loggedIn, loginFunction, signupFunction } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState([]);
  const [switcher, setSwitcher] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    loginFunction(username, password);
  }
  function handleSubmitSignup(e) {
    e.preventDefault();
    signupFunction(username, password, role);
  }
  function switchBtn(e) {
    const switcherChange = e ? true : false;
    setSwitcher(switcherChange);
  }

  return (
    <ChakraProvider>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <>
          {!loggedIn && (
            <>
              {switcher && (
                <Flex p={8} flex={1} align={"center"} justify={"center"}>
                  <Stack spacing={4} w={"full"} maxW={"md"}>
                    <Heading fontSize={"2xl"}>Create a new account</Heading>
                    <form onSubmit={handleSubmitSignup}>
                      <FormControl id="email">
                        <FormLabel>Username</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setUsername(e.target.value)}
                          name="username"
                          placeholder="username"
                        />
                      </FormControl>
                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          name="password"
                          placeholder="password"
                        />
                      </FormControl>
                      <label htmlFor="role">Choose a role:</label>
                      <select
                        onClick={(e) => setRole(e.target.value)}
                        // style={{ width: "10rem", marginBottom: "14px" }}
                        name="role"
                        id="role"
                      >
                        {/* <option value="admin">Admin</option> */}
                        <option value=""></option>
                        <option value="owner">Owner</option>
                        <option value="client">Client</option>
                      </select>

                      <Stack spacing={6}>
                        <Stack
                          direction={{ base: "column", sm: "row" }}
                          align={"start"}
                          justify={"space-between"}
                        >
                          <Checkbox>Remember me</Checkbox>
                          <Link color={"blue.500"}>Forgot password?</Link>
                        </Stack>
                        <Button
                          type="submit"
                          colorScheme={"blue"}
                          variant={"solid"}
                        >
                          Sign up
                        </Button>
                      </Stack>
                      <p className={styles.message}>
                        Already registered?{" "}
                        <Link color={"blue.500"}>
                          <a onClick={() => switchBtn(false)} href="#">
                            Sign in
                          </a>
                        </Link>
                      </p>
                      <Social />
                    </form>
                  </Stack>
                </Flex>
              )}
              {!switcher && (
                <Flex p={8} flex={1} align={"center"} justify={"center"}>
                  <Stack spacing={4} w={"full"} maxW={"md"}>
                    <Heading fontSize={"2xl"}>Sign in to your account</Heading>
                    <form onSubmit={handleSubmit}>
                      <FormControl id="email">
                        <FormLabel>Username</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setUsername(e.target.value)}
                          name="username"
                          placeholder="username"
                        />
                      </FormControl>
                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          name="password"
                          placeholder="password"
                        />
                      </FormControl>

                      <Stack spacing={6}>
                        <Stack
                          direction={{ base: "column", sm: "row" }}
                          align={"start"}
                          justify={"space-between"}
                        >
                          <Checkbox>Remember me</Checkbox>
                          <Link color={"blue.500"}>Forgot password?</Link>
                        </Stack>
                        <Button
                          type="submit"
                          colorScheme={"blue"}
                          variant={"solid"}
                        >
                          Sign in
                        </Button>
                      </Stack>
                      <p className={styles.message}>
                        Not registered?{" "}
                        <Link color={"blue.500"}>
                          <a onClick={() => switchBtn(true)} href="#">
                            Create an account
                          </a>
                        </Link>
                      </p>
                      <Social />
                    </form>
                  </Stack>
                </Flex>
              )}
            </>
          )}
        </>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>
      </Stack>
    </ChakraProvider>
  );
}

// function ssss() {
//   return (
//     <>
//       {!loggedIn && (
//         <div className={styles.loginPage}>
//           <div className={styles.form}>
//             {switcher && (
//               <Flex p={8} flex={1} align={"center"} justify={"center"}>
//                 <Stack spacing={4} w={"full"} maxW={"md"}>
//                   <Heading fontSize={"2xl"}>Sign in to your account</Heading>
//                   <form onSubmit={handleSubmit} className="login-form">
//                     <FormControl id="email">
//                       <FormLabel>Username</FormLabel>
//                       <Input
//                         type="text"
//                         onChange={(e) => setUsername(e.target.value)}
//                         name="username"
//                         placeholder="username"
//                       />
//                     </FormControl>
//                     <FormControl id="password">
//                       <FormLabel>Password</FormLabel>
//                       <Input
//                         type="password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         name="password"
//                         placeholder="password"
//                       />
//                     </FormControl>
//                     <label for="role">Choose a role:</label>
//                     <select
//                       onClick={(e) => setRole(e.target.value)}
//                       // style={{ width: "10rem", marginBottom: "14px" }}
//                       name="role"
//                       id="role"
//                     >
//                       {/* <option value="admin">Admin</option> */}
//                       <option value=""></option>
//                       <option value="owner">Owner</option>
//                       <option value="client">Client</option>
//                     </select>

//                     <Stack spacing={6}>
//                       <Stack
//                         direction={{ base: "column", sm: "row" }}
//                         align={"start"}
//                         justify={"space-between"}
//                       >
//                         <Checkbox>Remember me</Checkbox>
//                         <Link color={"blue.500"}>Forgot password?</Link>
//                       </Stack>
//                       <Button colorScheme={"blue"} variant={"solid"}>
//                         Sign in
//                       </Button>
//                     </Stack>
//                     <p className={styles.message}>
//                       Not registered?{" "}
//                       <Link color={"blue.500"}>
//                         <a onClick={() => switchBtn(false)} href="#">
//                           Sign In
//                         </a>
//                       </Link>
//                     </p>
//                   </form>
//                 </Stack>
//               </Flex>
//             )}
//             {!switcher && (
//               <Flex p={8} flex={1} align={"center"} justify={"center"}>
//                 <Stack spacing={4} w={"full"} maxW={"md"}>
//                   <Heading fontSize={"2xl"}>Sign in to your account</Heading>
//                   <form onSubmit={handleSubmitSignup} className="login-form">
//                     <FormControl id="email">
//                       <FormLabel>Username</FormLabel>
//                       <Input
//                         type="text"
//                         onChange={(e) => setUsername(e.target.value)}
//                         name="username"
//                         placeholder="username"
//                       />
//                     </FormControl>
//                     <FormControl id="password">
//                       <FormLabel>Password</FormLabel>
//                       <Input
//                         type="password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         name="password"
//                         placeholder="password"
//                       />
//                     </FormControl>

//                     <Stack spacing={6}>
//                       <Stack
//                         direction={{ base: "column", sm: "row" }}
//                         align={"start"}
//                         justify={"space-between"}
//                       >
//                         <Checkbox>Remember me</Checkbox>
//                         <Link color={"blue.500"}>Forgot password?</Link>
//                       </Stack>
//                       <Button colorScheme={"blue"} variant={"solid"}>
//                         Sign in
//                       </Button>
//                     </Stack>
//                     <p className={styles.message}>
//                       Not registered?{" "}
//                       <Link color={"blue.500"}>
//                         <a onClick={() => switchBtn(true)} href="#">
//                           Create an account
//                         </a>
//                       </Link>
//                     </p>
//                   </form>
//                 </Stack>
//               </Flex>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
