import HotelCard from "../../components/Hotels/HotelCards";
import styles from "../../styles/HotelCard.module.css";
import { get } from "../../store/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { display } from "../../store/actions/action";
import Link from "next/link";
import FeaturedRooms from "../../components/Hotels/FeaturedRooms";
import Calendar from "react-calendar";
// import DatePicker from "react-datepicker";
import "react-calendar/dist/Calendar.css";

export default function Hotels() {
  const [showStatus, setShow] = useState(false);
  const [value, changeValue] = useState(new Date());
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.hotels);
  console.log(hotels, "hoteeeeeeeels");

  const handleCheckValue = (e) => {
    e.preventDefault();
    e.target.value = value;
    console.log(e.target.value);
    setShow(!showStatus);
  };
  //  dispatch(get());

  useEffect(() => {
    dispatch(get());
  },[]);
  return (
    <>
      <div className={styles.accommodation}>
        <form className={styles.form}>
          <input
            id="Location"
            name="Location"
            type="text"
            autoComplete="Location"
            required
            placeholder="Location"
          />
          <input
            id="Check-in -Check-out"
            name="startday"
            type="text"
            autoComplete="startday"
            placeholder="Check-in -Check-out"
            // value={"value"}
            onClick={handleCheckValue}
          />
          {/* <input
            id="endday"
            name="endday"
            type="endday"
            autoComplete="endday"
            required
            placeholder="End Day"
          /> */}
        </form>
        <svg className={styles.icon}></svg>
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
      {hotels &&
        hotels.map((hotel) => {
          return (
            <>
              <HotelCard
                image={hotel.img}
                name={hotel.hotelName}
                description={hotel.Discription}
                id={hotel.id}
              />
            </>
          );
        })}
    </>
  );
}
