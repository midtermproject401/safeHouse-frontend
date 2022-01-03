import Link from "next/link";
import Image from "next/image";
import FilterData from "./FilterData";
// import React, {  } from "react";
import { LoginContext } from "../../context/loginContext";
import {
  addToCart,
  featchHouses,
  filterHouse,
  filterRegion,
} from "../../store/actions/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect , useContext } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://safe---house.herokuapp.com/api/v1/house", {
    headers: {
      Accept: "application/json",

      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhbmluIiwiaWF0IjoxNjQxMTU0MDMzfQ.BdFiaDxPA1ez__S5u4gfV__rUbj6-Hp1S5bZL_FT9jM",
    },
  });
  const data = await res.json();
  console.log(5555555,data);
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
  // const chatBtn = (house) => {
  //   let usernameValue = user.username
  //   let userID =state.data
  //   console.log(111111, userID);
  // //  let c =  dispatch(house);
  //   // console.log(55555, c);

  //   var item = houses.filter(function(x){ 
  //     return x.id === x.location; 
  //   })[0];


  //   // let x = item.location
  // //   // let adValue = houses. ;
  // //   console.log(55555, item);
  // //  let mapArr = houses.map(( item , key) =>{
  // //     let adValue = item
  // //     console.log(66666,adValue);
  // //   })
  // //   console.log(77777,mapArr);

  //   // const result = inventory.find( ({ name }) => name === 'cherries' );
  //   // const result = mapArr.find((item) => item === 'Amman')
  //   // console.log(77777,result);
    
  //   let api = `https://houses--safe.herokuapp.com/chat.html?username=${usernameValue}&Advname=emad`
  //   window.open(api)
  // }
  // console.log(111111, user.username);
  // console.log(222222 , `https://safe---house.herokuapp.com/api/v1/house`)
  // console.log(3333);
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

        <label htmlFor="location">price range</label>

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
