import HotelCard from "../../components/Hotels/HotelCards";
import styles from "../../styles/HotelCard.module.css";
import { filterHotels, get } from "../../store/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { display } from "../../store/actions/action";
import Link from "next/link";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FilterHotel from "../../components/Hotels/FilterHotels";
// import hotel from "../../public/h"

export default function Hotels() {
  const [showStatus, setShow] = useState(false);
  const [data, setData] = useState("");
  const [value, changeValue] = useState(new Date());
  const dispatch = useDispatch();
  const { hotels, activeHotel } = useSelector((state) => state.hotels);
  const [liked, setLiked] = useState(false);

  const handleNot = (id) => {
    setLiked(true);

    console.log(id);
  };

  const handleCheckValue = (e) => {
    e.preventDefault();
    e.target.value = value;
    console.log(e.target.value);
    setShow(!showStatus);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterHotels(data));
  };
  useEffect(() => {
    dispatch(get());
  }, []);
  return (
    <>
      <div className={styles.accommodation}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <svg
            // class="bk-icon -streamline-bed"
            // class={styles.check}
            height="24"
            width="24"
            viewBox="0 0 24 24"
            fill="#BDBDBD"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            overlinePosition={2}
          >
            <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
          </svg>
          <select
            id={styles.ss}
            name="Location"
            type="search"
            autoComplete="Location"
            required
            placeholder="Location"
            onChange={handleChange}
          >
            <option>Amman </option>
            <option>Aqaba </option>
            <option>Wadi-Rum </option>
          </select>

          <svg
            aria-hidden="true"
            // class="bk-icon -experiments-calendar sb-date-picker_icon-svg"
            className={styles.check}
            fill="#BDBDBD"
            focusable="false"
            height="20"
            role="presentation"
            width="20"
            viewBox="0 0 128 128"
          >
            <path
              d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-68-43.3h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm0 28h-12v-12h12zm26 0h-12v-12h12zm0-28h-12v-12h12z"
              fillRule="evenodd"
            ></path>
          </svg>
          <input
            id={styles.ss2}
            name="startday"
            type="text"
            autoComplete="startday"
            placeholder="Check-in -Check-out"
            // value={"value"}
            onClick={handleCheckValue}
          />
          <svg
            aria-hidden="true"
            className={styles.search}
            fill="#333333"
            focusable="false"
            height="20"
            role="presentation"
            width="20"
            viewBox="0 0 24 24"
          >
            <path d="M17.464 6.56a8.313 8.313 0 1 1-15.302 6.504A8.313 8.313 0 0 1 17.464 6.56zm1.38-.586C16.724.986 10.963-1.339 5.974.781.988 2.9-1.337 8.662.783 13.65c2.12 4.987 7.881 7.312 12.87 5.192 4.987-2.12 7.312-7.881 5.192-12.87zM15.691 16.75l7.029 7.03a.75.75 0 0 0 1.06-1.06l-7.029-7.03a.75.75 0 0 0-1.06 1.06z"></path>
          </svg>
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
      {showStatus && (
        <div className={styles.calender}>
          {" "}
          <Calendar
            onChange={(date) => changeValue(date)}
            value={value}
            showTimeInput
            timeInputLabel="CheckinDate"
            dateFormat="yyyy//MM/dd"
          />
        </div>
      )}
      <div className={styles.dev1}>
        <div className={styles.cont}>
          <div className={styles.contDev}></div>
          <div className={styles.contDev1}></div>
          <div className={styles.contDev2}></div>

          <div className={styles.devContainer}>
            <span className={styles.sp}>
              Find Your <br></br> <br></br> Hotel
            </span>
          </div>
        </div>
      </div>
      <div className={styles.devImg}>
        <img
          src="https://www.savepng.com/file/thumb/2020-06/33386-8-hotel-clipart-thumb.png"
          width={100}
        ></img>
      </div>
      <FilterHotel />
      {!activeHotel &&
        hotels.map((hotel, ind) => {
          return (
            <>
              <HotelCard
                image={hotel.img}
                name={hotel.hotelName}
                description={hotel.Discription}
                id={hotel.id}
                ratingNum={hotel.Rating}
              />
  
            </>
          );
        })}
    </>
  );
}
