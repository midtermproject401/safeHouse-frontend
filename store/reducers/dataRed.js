const initialState = {
  houses: [],
  filterDataHouse: [],
  show: false,
};
export const dataRed = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_USERS_SUCCESS":
      console.log(payload);
      return {
        houses: payload,
        show: false,
      };
    case "FILTER_HOUSE":
      let filterd = [];
      const houseFilter = state.houses.filter((house) => {
        var price = house.price.replace(/[^\d.-]/g, "");
        if (
          price == Number(payload) ||
          house.location.toLowerCase() == payload.toLowerCase()
        ) {
          return house;
        }
        if (
          price == Number(payload) ||
          house.location.toLowerCase() == payload.toLowerCase()
        ) {
          return house;
        }
      });
      return {
        ...state,

        filterDataHouse: houseFilter,
        show: payload,
      };

    //       if (Number(payload) == 100) {
    //         filtered.push(
    //           price >= Number(payload) && price <= Number(payload) + 300
    //         );
    //       }
    //     if (Number(payload) == 400) {
    //       filtered.push(
    //         price >= Number(payload) && price <= Number(payload) + 300
    //       );
    //     }
    //     if (Number(payload) == 700) {
    //       filtered.push(price >= Number(payload));
    //     }
    //     return filtered;
    //   });
    //   console.log(houseFilterd, "hyuuuuuuuuuuuuu");

    //   return {
    //     ...state,
    //     houses: houseFilterd,
    //     filterDataHouse: [...state.filterDataHouse, filtered],
    //     show: true,
    //   };
    // case "FILTER_PRICE":
    //   console.log(payload, "payload");
    //   let houseFilterdPrice = state.houses.filter((house) => {
    //     var price = house.price.replace(/[^\d.-]/g, "");

    //     if (Number(payload) == 100) {
    //       return price >= Number(payload) && price <= Number(payload) + 300;
    //     }
    //     if (Number(payload) == 400) {
    //       return price >= Number(payload) && price <= Number(payload) + 300;
    //     }
    //     if (Number(payload) == 700) {
    //       return price >= Number(payload);
    //     }
    //   });
    //   console.log(houseFilterdPrice, "houseFilterdPrice");

    //   return {
    //     ...state,
    //     filtered: houseFilterdPrice,
    //     show: true,
    //   };
    default:
      return state;
  }
};
