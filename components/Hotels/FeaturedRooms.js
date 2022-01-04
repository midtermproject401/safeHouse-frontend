import Title from "./Title";
import styles from "../../styles/RoomCards.module.css";
import { displayRoom } from "../../store/actions/action";

// import { RoomContext } from "../context";
// import Room from "./Room";
// import Loading from "./Loading";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRooms } from "../../store/actions/action";
import Link from "next/link";

export default function FeaturedRooms() {
  const { rooms } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();
  let featured = [];
  featured.push(rooms[0], rooms[1], rooms[2]);

  const dipatcher = (id) => {
    console.log("dispatch", id);
    dispatch(displayRoom(id));
  };

  console.log(featured);

  useEffect(() => {
    dispatch(getRooms(1));
  }, []);
  return (
    <section className={styles.featuredRooms}>
      <Title title="featured rooms" />
      <div className={styles.featuredRoomsCenter}>
        {rooms.map((room) => {
          if (
            room.accommodationType == "Double Deluxe" ||
            room.accommodationType == "Family Deluxe Room"
          ) {
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

                  {/* <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link> */}
                </div>
                <p className={styles.roomInfo}>{room.accommodationType}</p>
              </article>
            );
          }
        })}
      </div>
    </section>
  );
}

// let { loading, featuredRooms: rooms } = this.context;
