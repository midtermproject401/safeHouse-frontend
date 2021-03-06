import Link from "next/link";
import Image from "next/image";
import FilterData from "./FilterData";
import styles from "../../styles/House.page.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import swal from "sweetalert";

import {
  addToCart,
  featchHouses,
  filterHouse,
  filterRegion,
} from "../../store/actions/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
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
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};
export const getStaticProps = async () => {
  const res = await fetch("https://safe---house.herokuapp.com/api/v1/house");

  const data = await res.json();
  console.log(data);
  return {
    props: { houses: data },
  };
};

const Houses = ({ houses }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleFav(house) {
    dispatch(addToCart(house));
    console.log(house);
    swal("Added!", "Check your profile!", "success");
  }

  const handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    dispatch(filterHouse(e.target.value));
  };

  useEffect(() => {
    dispatch(featchHouses());
  }, []);
  return (
    <>
      <ChakraProvider>

        <div className={styles.accommodation}>
          <form className={styles.form}>
            <svg
              class="bk-icon -streamline-bed"
              class={styles.check}
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="#BDBDBD"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              overlinePosition={2}
            >
              <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
            </svg>
            <select
              name="rigion"
              onChange={handleChange}
              id={styles.ss}
              required
              placeholder="Location"
              onChange={handleChange}
            >
              <option value="">Select the value</option>
              <option value="amman">Amman</option>
              <option value="irbid">irbid</option>
              <option value="salt">salt</option>
              <option value="zarqa">zarqa</option>
            </select>
            <svg
              class="bk-icon -streamline-bed"
              class={styles.check}
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="#BDBDBD"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              overlinePosition={2}
            >
              <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
            </svg>
            <select
              id={styles.ss2}
              required
              name="price"
              onChange={handleChange}
            >
              <option value="">Select the value</option>
              <option value="100">100-400</option>
              <option value="400">400-700</option>
              <option value="700">greter than 700</option>
            </select>
          </form>
        </div>

        <div className={styles.card}>
          {!state.data.show &&
            houses.map((house) => {
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
                            color={useColorModeValue("gray.800", "white")}
                          >
                            <Box as="span" color={"gray.600"} fontSize="lg">
                              $
                            </Box>
                            {house.price}

                            <Text color={"gray.500"}>
                              <button
                                onClick={() => {
                                  handleFav(house);
                                }}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  className={styles.svg}
                                >
                                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                                </svg>{" "}
                              </button>
                              <Link href={`/home/${house.id}`}>
                                <a className={styles.show}>Show more ...</a>
                              </Link>
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
        {state.data.show && <FilterData />}
      </ChakraProvider>
    </>
  );
};

export default Houses;
