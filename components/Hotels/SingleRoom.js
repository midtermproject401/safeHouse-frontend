import "react-calendar/dist/Calendar.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import Banner from "./Banner";
import styles from "../../styles/RoomCards.module.css";
import { filterHotels, getRooms } from "../../store/actions/action";
import Head from "next/head";
import ModelBooking from "./Model";


export default function SingleRoom() {
  const dispatch = useDispatch();

  const [value, onChange] = useState(new Date());
  const [hotelid, setHotel] = useState(0);

  const { rooms, activeRoom, hotels } = useSelector((state) => state.hotels);

  const hotelFilter = rooms.filter((hotel) => {
    return hotel.id == activeRoom;
  });
  const hotelsFilter = hotels.filter((hotel) => {
    console.log(hotel);
    return Number(hotel.id) == hotelid;
  });

  console.log(hotelsFilter, hotelid);
  useEffect(() => {
    setHotel(hotelFilter[0].hotelid);
  }, []);

  var divImage;
  const [tab, setTab] = useState(0);

  const isActive = (index) => {
    if (tab === index) return " active";
    return "";
  };
  return (
    <>
      {rooms.map((room, index) => {
        if (room.id == activeRoom) {
          divImage = {
            backgroundImage: "url(" + room.heroImage + ")",
          };
          var images = [room.heroImage, room.img1, room.img2, room.img3];

          return (
            <>
              <div key={index} className={styles.div}>
                <Head>
                  <title className={styles.title}>Detail Home</title>
                </Head>
                <div className={styles.imgHeroo}>
                  <img
                    src={images[tab]}
                    alt={images[tab]}
                    className={styles.imgHeroo}
                    style={{
                      height: "300px",
                      width: "600px",
                    }}
                  />
                  <div className={styles.img} style={{ cursor: "pointer" }}>
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={img}
                        className={`${styles.imgs}${isActive(index)}`}
                        style={{ height: "50px", width: "50px" }}
                        onClick={() => setTab(index)}
                      />
                    ))}
                  </div>
                </div>

                <div className={styles.card_text}>
                  {" "}
                  <span className={styles.spanTitle}> Room Data</span>
                  {/* <div className={styles.data}>
            <span>location : </span>
            {room.location}
          </div> */}
                  <div className={styles.data}>
                    <span>price : </span>
                    {room.price}
                  </div>
                  {/* <div className={styles.data}>
                    <span>facilities </span>
                    <img src={hotelsFilter[0].img}></img>{" "}
                  </div> */}
                  {hotelsFilter.length > 0 && (
                    <>
                      <div className={styles.data}>
                        <span>Hotel Name : {hotelsFilter[0].hotelName} </span>
                        {room.Extra1}
                      </div>
                      <div className={styles.data}>
                        <span>Location : {hotelsFilter[0].Location}</span>
                        {room.Extra2}
                      </div>
                      <div className={styles.data}>
                        <span>Rating :{hotelsFilter[0].Rating} </span>
                        {room.Extra1}
                      </div>
                      <div className={styles.data}>Available</div>
                    </>
                  )}
                </div>
           <ModelBooking />
              </div>
            </>
          );
        }
      })}
    </>
  );
}
