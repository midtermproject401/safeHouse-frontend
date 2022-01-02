import "react-calendar/dist/Calendar.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import Banner from "./Banner";
import styles from "../../styles/RoomCards.module.css";
import { getRooms } from "../../store/actions/action";

export default function SingleRoom() {
  const dispatch = useDispatch();

  const [value, onChange] = useState(new Date());
  const [active, setActive] = useState("");

  const { rooms, activeRoom, filterdRooms } = useSelector(
    (state) => state.hotels
  );
  console.log(rooms, activeRoom);

  useEffect(() => {
    dispatch(getRooms(rooms.hotelid));
    setActive(activeRoom);
  }, []);

  var divImage;

  return (
    <>
      {/* <Banner title={`HOTEL'S ROOM`}></Banner> */}
      <section className={styles.singleRoom}>
        {rooms.map((room) => {
          if (room.id == active) {
            divImage = {
              backgroundImage: "url(" + room.heroImage + ")",
            };
            return (
              <>
                <div className={styles.image}>
                  <Image
                    src={room.heroImage}
                    height={200}
                    width={700}
                    // onClick={() => dipatcher(roomId)}
                  />
                </div>

                <div className={styles.singleRoomImages}>
                  <img src={room.img1} alt={room.img2} />
                  <img src={room.img2} alt={room.img2} />
                  <img src={room.img3} alt={room.img2} />
                </div>
                <div className={styles.singleRoomInfo}>
                  <article className={styles.desc}>
                    <h3>Details</h3>
                    <p>
                      {room.accommodationType} <br></br> {room.Extras}
                    </p>
                  </article>
                  <article className={styles.info}>
                    <h3>info</h3>
                    <h6>price : {room.price}</h6>
                    <h6>size : {room.size}</h6>
                    <h6>
                      max capacity :
                      {room.Sleeps > 1
                        ? `${room.Sleeps} people`
                        : `${room.Sleeps}  person`}
                    </h6>
                    {/* <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                    <h6>{breakfast && "free breakfast included"}</h6> */}
                  </article>
                </div>
              </>
            );
          }
        })}
      </section>
      <section className="room-extras">
        <h6>extras </h6>
      

        {/* <Calendar onChange={onChange} value={value} /> */}

        {/* <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul> */}
      </section>
    </>
  );
}
