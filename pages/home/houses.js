import Link from "next/link";
import Image from "next/image";
import FilterData from "./FilterData";
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
  // const handelLocation = (e) => {
  //   e.preventDefault();
  //   let location = e.target.rigion.value;
  //   console.log(location);
  //   dispatch(filterRegion(location));
  // };
  const handleChange = (e) => {
    e.preventDefault();
    // let price = e.target.price.value;
    // let location = e.target.rigion.value;
    console.log(e.target.value);
    dispatch(filterHouse(e.target.value));

    // console.log(state.data.show, "state.data.show");
    // dispatch(filterPrice(price));
  };
  useEffect(() => {
    dispatch(featchHouses());
  }, []);
  return (
    <>
      <h1>all houses</h1>
      <form>
        <label htmlFor="location">location</label>

        <select name="rigion" onChange={handleChange}>
          <option value="">Select the value</option>
          <option value="amman">Amman</option>
          <option value="irbid">irbid</option>
          <option value="salt">salt</option>
          <option value="zarqa">zarqa</option>
        </select>

        <label htmlFor="location">pricr range</label>

        <select name="price" onChange={handleChange}>
          <option value="">Select the value</option>

          <option value="100">100-400</option>
          <option value="400">400-700</option>
          <option value="700">greter than 700</option>
        </select>
      </form>
      {!state.data.show &&
        houses.map((house) => (
          <>
            <Link href={"/home/" + house.id} key={house.id}>
              <a>
                <Image
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
      {state.data.show && <FilterData />}
    </>
  );
};

export default Houses;
