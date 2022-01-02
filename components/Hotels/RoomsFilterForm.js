import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/RoomCards.module.css";
import { filter } from "../../store/actions/action";
import Title from "./Title";

const RoomsFilter = ({rooms}) => {
  // const { rooms } = useSelector((state) => state.hotels);
  console.log(rooms,"rooooooooooooms");
  const dispatch = useDispatch();

  // create function to handle change the state in the store according to chosed item:
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(filter(e.target.value));
    console.log(e.target.value);
  };
  return (
    <section className={styles.filterContainer}>
      <Title title="search rooms" />
      <form className={styles.filterForm}>
        <div className={styles.formGroup}>
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className={styles.formControl}
          >
            {rooms.map((item, index) => {
              return (
                <option key={index} value={item.accommodationType}>
                  {item.accommodationType}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className={styles.formControl}
          >
            {rooms.map((item, index) => {
              return (
                <option key={index} value={item.Sleeps}>
                  {item.Sleeps}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="capacity">Guests</label>
          <select
            name="price"
            id="price"
            onChange={handleChange}
            className={styles.formControl}
          >
            {rooms.map((item, index) => {
              return (
                <option key={index} value={item.price}>
                  {item.price}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">room price</label>
          <input
            type="range"
            name="price"
            min={100}
            max={700}
            id="price"
            // value={price}
            // onChange={handleChangePrice}
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.singleExtra}>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              // checked={breakfast}
              // onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className={styles.singleExtra}>
            <input
              type="checkbox"
              name="pets"
              // checked={pets}
              // onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
