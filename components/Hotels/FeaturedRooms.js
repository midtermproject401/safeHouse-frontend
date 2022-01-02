import Title from "./Title";
import styles from "../../styles/RoomCards.module.css";

// import { RoomContext } from "../context";
// import Room from "./Room";
// import Loading from "./Loading";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRooms } from "../../store/actions/action";

export default function FeaturedRooms() {
  const { rooms } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();

  console.log(rooms);

  useEffect(() => {
    dispatch(getRooms(1));
  }, []);
  return (
    <section className={styles.featuredRooms}>
      <Title title="featured rooms" />
      <div className={styles.featuredRoomsCenter}>
        {rooms.map((room) => {
          return (
            <article className={styles.room}>
              <div className={styles.imgContainer}>
                <img src={room.heroImage} alt="single room" />
                <div className={styles.priceTop}>
                  <h6>{room.price}</h6>
                </div>
                {/* <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link> */}
              </div>
              <p className={styles.roomInfo}>{room.accommodationType}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

// let { loading, featuredRooms: rooms } = this.context;
