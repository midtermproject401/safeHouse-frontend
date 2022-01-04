import { addToCart } from "../../store/actions/action";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/react";
import styles from "../../styles/House.page.module.css";

import { useEffect, useState } from "react";
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

const FilterData = () => {
  const state = useSelector((state) => state);

  const [liked, setLiked] = useState({
    active: null,
    love: false,
    obj: state.data.filterDataHouse,
  });

  const dispatch = useDispatch();

  function handleFav(house, index) {
    dispatch(addToCart(house));
    function toogel(index) {
      setLiked({ ...liked, active: liked.obj[index] });
      console.log(liked.obj[index]);
    }
    function tog(index) {
      console.log(state.data.filterDataHouse[index].id);
      console.log(liked.obj[index].id);

      if (liked.obj[index].id == state.data.filterDataHouse[index].id) {
        setLiked({ ...liked, love: true });
        console.log(liked, ";;;;;;;;;;;;;;;;;;;;,,,");
      }
    }
    toogel(index);
    tog(index);
  }

  return (
    <>
      <ChakraProvider>
        <div className={styles.card}>
          {state.data.filterDataHouse.map((house, index) => {
            return (
              <>
                <Flex
                  p={50}
                  w="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    bg={useColorModeValue("white", "gray.800")}
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
                          // alt={`Picture of ${data.name}`}
                          roundedTop="lg"
                          width={500}
                          height={500}
                        />
                      </a>
                    </Link>

                    <Box p="6">
                      <Box d="flex" alignItems="baseline"></Box>
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
                          color={useColorModeValue("gray.800", "white")}
                        >
                          <Box as="span" color={"gray.600"} fontSize="lg">
                            $
                          </Box>
                          {house.price}

                          <Text color={"gray.500"}>
                            <button
                              key={index}
                              onClick={() => {
                                handleFav(house, index);
                              }}
                              className={styles.hart}
                            >
                              {liked.love ? (
                                <svg
                                  fill="crimson"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                                </svg>
                              ) : (
                                <svg
                                  width="24"
                                  height="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                >
                                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                                </svg>
                              )}
                            </button>
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </>
            );
          })}
        </div>
      </ChakraProvider>
    </>
  );
};

export default FilterData;
