import * as t from "./types";
let intial = {
  hotels: [],
  activeHotel: "",
  rooms: [],
  filterdRooms: [],
  activeRoom: "",
  filteredHotel:[]
};

// reducer function :
const hotelReducer = (state = intial, action) => {
  const { type, payload } = action;
  switch (type) {
    case t.GET_DATA:
      console.log(payload);
      state.hotels = payload;
      return { ...state, hotels: payload };
    case t.DISPLAY_DATA:
      let hotels = state.hotels.map((hotel) => {
        if (hotel.hotelName == payload) {
          return {
            hotelName: hotel.hotelName,
            img: hotel.img,
            facilities: hotel.facilities,
            Discription: hotel.Discription,
          };
        }
        return hotel;
      });

      return { ...state, activeHotel: payload, hotels: hotels };

    case t.DISPLAY_ROOM:
      console.log(payload);
      const displayRoom = state.rooms.map((room) => {
        if (room.id == payload) {
          return {
            id: room.id,
            Extras: room.Extras,
            Sleeps: room.Sleeps,
            accommodationType: room.accommodationType,
            heroImage: room.heroImage,
            hotelid: room.hotelid,
            img1: room.img1,
            img2: room.img2,
            img3: room.img3,
            price: room.price,
            size: room.size,
          };
        }
        return room;
      });

      return { ...state, activeRoom: payload, rooms: displayRoom };

    case "GETROOMS":
      state.rooms = payload;
      return { ...state, rooms: payload };
    case "FILTER":
      let filterd;
      const rooms = state.rooms.map((room) => {
        if (
          room.accommodationType == payload ||
          room.Sleeps == payload ||
          room.price == payload
        ) {
          return (filterd = room);
        }
        return room;
      });
      return {
        ...state,
        rooms: rooms,
        filterdRooms: [...state.filterdRooms, filterd],
        activeHotel: payload,
        activeRoom: payload,

      };
      case "FILTERHOTEL":
        let filterdhotels;
        console.log(payload);
        const hotelData = state.hotels.map((hotel) => {
          if (
            hotel.Location == payload 
          ) {
            return (filterdhotels = hotel);
          }
          return hotel;
        });
        return {
          ...state,
          hotels: hotelData,
          filteredHotel: [...state.filteredHotel, filterdhotels],
          activeHotel: payload,
          activeRoom: payload,
  
        };

    default:
      return state;
  }
};

export default hotelReducer;
