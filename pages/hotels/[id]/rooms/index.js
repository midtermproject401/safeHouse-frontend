// import styles from "../../../../styles/HotelCard.module.css";
import styles from "../../../../styles/RoomCards.module.css";

import Banner from "../../../../components/Hotels/Banner";
import RoomCard from "../../../../components/Hotels/RoomCards ";
import Link from "next/link";
import RoomsFilter from "../../../../components/Hotels/RoomsFilterForm";
import FilterRoom from "../../../../components/Hotels/FilterRooms";
import Title from "../../../../components/Hotels/Title";
import Services from "../../../../components/Hotels/Services";

import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../../../store/actions/action";
import FeaturedRooms from "../../../../components/Hotels/FeaturedRooms";
import { useEffect } from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://safe---house.herokuapp.com/hotel");
  const data = await res.json();
  const paths = data.map((hotel) => {
    return {
      params: { id: hotel.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://safe---house.herokuapp.com/hotel/${id}/rooms`
  );

  const data = await res.json();
  const res2 = await fetch(`https://safe---house.herokuapp.com/hotel/${id}`);
  const data2 = await res2.json();

  return {
    props: { rooms: data, hotel: data2 },
  };
};

export default function Rooms({ rooms, hotel }) {
  console.log(rooms);
  var divImage = {
    backgroundImage: "url(" + rooms[2].heroImage + ")",
  };

  const dispatch = useDispatch();
  const { activeHotel } = useSelector((state) => state.hotels);
  const dipatcher = (id) => {
    console.log("dispatch", id);
    dispatch(displayRoom(id));
  };

  return (
    <>
      <header className={styles.defaultHeroRoom} style={divImage}>
        <Banner
          title={`OUR ROOMS`}
          subtitle={`OUR ROOMS STARTS FROM ${rooms[0].price}`}
        >
          <Link href={`/hotels/${hotel.id}`} className="btn-primary">
            RETURN HOTEL PAGE
          </Link>
        </Banner>
      </header>
      <RoomsFilter rooms={rooms} />
      <FilterRoom room={rooms} />
      {
        !activeHotel && (
          <section className={styles.featuredRooms}>
            {/* <Title title="featured rooms" /> */}
            <div className={styles.featuredRoomsCenter}>
              {rooms.map((room) => {
                return (
                  <article className={styles.room}>
                    <div className={styles.imgContainer}>
                      <img src={room.heroImage} alt="single room" />
                      <div className={styles.priceTop}>
                        <h6>{room.price}</h6>
                      </div>
                      <Link href={`/hotels/${room.hotelid}/rooms/${room.id}`}>
                        <a
                          className={styles.btnPrimary}
                          onClick={() => dipatcher(room.id)}
                        >
                          {" "}
                          show more
                        </a>
                      </Link>
                    
                    </div>
                    <p className={styles.roomInfo}>{room.accommodationType}</p>
                  </article>
                );
              })}
            </div>
          </section>
        )
        /* 
            // <RoomCard
              image={room.img2}
              name={room.accommodationType}
              description={room.price}
              id={room.hotelid}
              roomId={room.id}
            /> */
      }
    </>
  );
}
