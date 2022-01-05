const initialState = {
  houses: [],
  filterDataHouse: [],
  show: false,
};
export const dataRed = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_USERS_SUCCESS":
      return {
        houses: payload,
        show: false,
      };
    case "FILTER_HOUSE":
      let filterd = [];
      const houseFilter = state.houses.filter((house) => {
        var price = house.price.replace(/[^\d.-]/g, "");
        if (
          (price == Number(payload) ||
            price <= Number(payload) + 300 ||
            house.location.toLowerCase() == payload.toLowerCase()) &&
          700 !== Number(payload)
        ) {
          return house;
        }
        if (
          (price == Number(payload) ||
            house.location.toLowerCase() == payload.toLowerCase()) &&
          Number(payload) > 700
        ) {
          return house;
        }
      });
      return {
        ...state,

        filterDataHouse: houseFilter,
        show: payload,
      };
    default:
      return state;
  }
};
