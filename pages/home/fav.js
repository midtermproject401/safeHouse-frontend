import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../../store/actions/action";
import Link from "next/link";
import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/react";
import styles from "../../styles/House.page.module.css";
// import {FontAwesomeIconfrom} "react-icons/fa";
import { BsFillArchiveFill } from "react-icons/bs";

import {
  Flex,
  Circle,
  Box,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
} from "@chakra-ui/react";
const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

export default function Favaroite() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function handledelete(house) {
    dispatch(deleteFromCart(house));
  }

  return (
    <>
      <h1 className={styles.span}>cart</h1>
      <span className={styles.span}>{state.cart.count}</span>
      <div className={styles.card}>
        {state.cart.cartProducts.map((house) => {
          return (
            <>
              <ChakraProvider>
                <Flex
                  p={50}
                  w="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    // bg={useColorModeValue("white", "gray.800")}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative"
                  >
                    <Circle
                      size="10px"
                      position="absolute"
                      top={2}
                      right={2}
                      bg="red.200"
                    />
                    <Link href={"/home/" + house.id} key={house.id}>
                      <a>
                        <Image
                          src={house.imgHero}
                          alt={`Picture of ${data.name}`}
                          roundedTop="lg"
                          width={500}
                          height={500}
                        />
                      </a>
                    </Link>

                    <Box p="6">
                      <Box d="flex" alignItems="baseline">
                        {data.isNew && (
                          <Badge
                            rounded="full"
                            px="2"
                            fontSize="0.8em"
                            colorScheme="red"
                          >
                            {house.state}
                          </Badge>
                        )}
                      </Box>
                      <Flex
                        mt="1"
                        justifyContent="space-between"
                        alignContent="center"
                      >
                        <Box
                          fontSize="2xl"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          isTruncated
                        >
                          {house.location}
                        </Box>
                        <Tooltip
                          label="Add to cart"
                          bg="white"
                          placement={"top"}
                          color={"gray.800"}
                          fontSize={"1.2em"}
                        >
                          <chakra.a href={"#"} display={"flex"}>
                            {/* <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} /> */}
                          </chakra.a>
                        </Tooltip>
                      </Flex>
                      <Text fontSize={"sm"} color={"gray.500"}>
                        {house.Description}
                      </Text>
                      <Flex
                        justifyContent="space-between"
                        alignContent="center"
                      >
                        {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
                        <Box
                          fontSize="2xl"
                          // color={useColorModeValue("gray.800", "white")}
                        >
                          <Box as="span" color={"gray.600"} fontSize="lg">
                            $
                          </Box>
                          {house.price}

                          <Text color={"gray.500"}>
                            <button
                              onClick={() => {
                                handledelete(house);
                              }}
                            >
                              <div className={styles.delete}>
                                <BsFillArchiveFill />
                              </div>
                            </button>
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </ChakraProvider>
            </>
          );
        })}
      </div>
      ;
    </>
  );
}
