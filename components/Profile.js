import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { LoginContext } from "../context/loginContext";
import React, { useContext, useState } from "react";
import Link from "next/link";
export default function Profile() {
  const { user } = useContext(LoginContext);
  const userName = user.username;
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={
              "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
            }
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {userName}
            </Heading>
            <Text color={"gray.500"}>{userName}@gmail.com</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>1 checkout</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Bookings
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>2 adds</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Favorites
              </Text>
            </Stack>
          </Stack>

          <Button
            w={"full"}
            mt={8}
            bg={"gray"}
            // bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            <Link href="/">
              <a>Homepage</a>
            </Link>
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
