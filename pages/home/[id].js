import Image from "next/image";
import { addToCart } from "../../store/actions/action";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/HotelCard.module.css";
import Banner from "../../components/Hotels/Banner";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://toto-do-7.herokuapp.com/homes/house");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((house) => {
    return {
      params: { id: house.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://safe---house.herokuapp.com/api/v1/house/" + id,
    {
      headers: {
        Accept: "application/json",

        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhbmluIiwiaWF0IjoxNjQxMTU0MDMzfQ.BdFiaDxPA1ez__S5u4gfV__rUbj6-Hp1S5bZL_FT9jM",
      },
    }
  );
  const data = await res.json();

  return {
    props: { house: data },
  };
};
const Details = ({ house }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleFav(house) {
    dispatch(addToCart(house));
    console.log(house);
  }
  console.log(house);
  var divImage = {
    backgroundImage: "url(" + house.imgHero + ")",
  };
  return (
    <>
      <header className={styles.defaultHeroRoom} style={divImage}>
        {/* <Banner
          title={`OUR ROOMS`}
          subtitle={`OUR ROOMS STARTS FROM ${house.price}`}
        ></Banner> */}
        <img src={house.imgHero} width={1000} height={500} />
      </header>
      <img src={house.img1} width={500} height={500} />
      <img src={house.img2} width={500} height={500} />
      <img src={house.img3} width={500} height={500} />

      <h1>{house.location}</h1>
      <p>{house.Description}</p>
      <p>{house.accomdationType}</p>
      <p>{house.rentDuration}</p>
      <p>{house.state}</p>
      <p>{house.price}</p>
      <p>{house.ownerName}</p>
      <p>{house.phoneNumber}</p>
      <button
        onClick={() => {
          handleFav(house);
        }}
      >
        add to fav
      </button>
      <button>rent</button>
    </>
  );
};

export default Details;
