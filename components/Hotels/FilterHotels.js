import React from "react";
import { useSelector } from "react-redux";
import HotelCard from "./HotelCards";

const FilterHotel = () => {
  const { filteredHotel, activeHotel } = useSelector((state) => state.hotels);
  return (
    <>
      {filteredHotel &&
        filteredHotel.map((hotel) => {
          if (hotel?.Location == activeHotel) {
            return (
              <HotelCard
                image={hotel.img}
                name={hotel.hotelName}
                description={hotel.Discription}
                id={hotel.id}
              />
            );
          }
          // else{
          //     return (
          //         <div className="empty-search">
          //           <h3>unfortunately no rooms matched your search parameters</h3>
          //         </div>
          //       );
          // }
        })}
    </>
  );
};

export default FilterHotel;
