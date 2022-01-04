const axios = require("axios");
import cookie from "react-cookies";

const url = "https://safe---house.herokuapp.com/hotel";

export const get = () => async (dispatch) => {
  const myTokenCookie = cookie.load("token");
  console.log(myTokenCookie, "tooooooooken");
  return axios
    .get(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${myTokenCookie}`,
      },
    })
    .then((res) => {
      dispatch(actualData(res.data, "GET"));
    });
  // const myTokenCookie = cookie.load("token");
  // console.log(myTokenCookie, "tooooooooken");
  // const res = await fetch("https://safe---house.herokuapp.com/hotel", {
  //   headers: {
  //     Accept: "application/json",
  //     Authorization: `Bearer ${myTokenCookie}`,
  //   },
  // });
  // const data = await res.json();
  //   console.log(data, "ressssssssssss");

  // return {
  //   type: "GET",
  //   payload: data,
  // };

  // return () => dispatch(actualData(data, "GET"));

  // console.log(data, "ressssssssssss");
};

function actualData(data, type) {
  return {
    type: type,
    payload: data,
  };
}

export const display = (data) => {
  return {
    type: "DISPLAY",
    payload: data,
  };
};
export const displayRoom = (data) => {
  return {
    type: "DISPLAYROOM",
    payload: data,
  };
};

export const getRooms = (id) => (dispatch) => {
  return axios.get(`${url}/${id}/rooms`).then((res) => {
    dispatch(actualData(res.data, "GETROOMS"));
  });
};
export const filter = (data) => {
  return {
    type: "FILTER",
    payload: data,
  };
};

/////////////////////////////////////////////////////////////////////////// home action
export function addToCart(productName) {
  return {
    type: "ADD_TO_CART",
    payload: productName,
  };
}
export function deleteFromCart(productName) {
  return {
    type: "DELETE_FROM_CART",
    payload: productName,
  };
}

export const fetchUsersSuccess = (houses) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: houses,
  };
};
export const filterHouse = (houses) => {
  return {
    type: "FILTER_HOUSE",
    payload: houses,
  };
};

export const featchHouses = () => {
  return (dispatch) => {
    axios
      .get("https://safe---house.herokuapp.com/api/v1/house")
      .then((response) => {
        const houses = response.data;
        console.log(houses);
        dispatch(fetchUsersSuccess(houses));
      })

      .catch((error) => {
        const errorMsg = error.message;
      });
  };
};
