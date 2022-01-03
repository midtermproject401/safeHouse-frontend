import Link from "next/link";
import Image from "next/image";
import FilterData from "./FilterData";
import styles from "../../styles/House.page.module.css";
import {
  addToCart,
  featchHouses,
  filterHouse,
  filterRegion,
} from "../../store/actions/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export const getStaticProps = async () => {
  const res = await fetch("https://safe---house.herokuapp.com/api/v1/house", {
    headers: {
      Accept: "application/json",

      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhbmluIiwiaWF0IjoxNjQxMTU0MDMzfQ.BdFiaDxPA1ez__S5u4gfV__rUbj6-Hp1S5bZL_FT9jM",
    },
  });
  const data = await res.json();
  console.log(data);
  return {
    props: { houses: data },
  };
};

const Houses = ({ houses }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleFav(house) {
    dispatch(addToCart(house));
  }

  const handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    dispatch(filterHouse(e.target.value));
  };

  useEffect(() => {
    dispatch(featchHouses());
  }, []);
  return (
    <>
      <h1>all houses</h1>
      <form className={styles.form}>
        <label htmlFor="location">location</label>
        <div className={styles.box}>
          <select
            name="rigion"
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select the value</option>
            <option value="amman">Amman</option>
            <option value="irbid">irbid</option>
            <option value="salt">salt</option>
            <option value="zarqa">zarqa</option>
          </select>
        </div>
        <label htmlFor="location">pricr range</label>
        <div className={styles.box}>
          <select
            name="price"
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select the value</option>

            <option value="100">100-400</option>
            <option value="400">400-700</option>
            <option value="700">greter than 700</option>
          </select>
        </div>
      </form>
      <div>
        {!state.data.show &&
          houses.map((house) => (
            <>
              <Link href={"/home/" + house.id} key={house.id}>
                <a>
                  <img
                    alt={"img fav"}
                    src={house.imgHero}
                    width={500}
                    height={500}
                  />
                </a>
              </Link>
              <button
                onClick={() => {
                  handleFav(house);
                }}
              >
                add to fav
              </button>

              <button>rent</button>
              <h3>{house.location}</h3>
              <h3>{house.price}</h3>
              <h3>{house.state}</h3>
            </>
          ))}
      </div>
      {state.data.show && <FilterData />}
    </>
  );
};

export default Houses;
