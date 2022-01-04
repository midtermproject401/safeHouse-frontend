import Image from "next/image";
import { addToCart } from "../../store/actions/action";
import { useSelector, useDispatch } from "react-redux";
import { LoginContext } from "../../context/loginContext";
// import styles from "../../styles/hoteldetail.module.css";
import styles from "../../styles/Homedetail.module.css";

import Banner from "../../components/Hotels/Banner";
import Link from "next/link";
import { useState, useContext } from "react";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://safe---house.herokuapp.com/api/v1/house");
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
    "https://safe---house.herokuapp.com/api/v1/house/" + id
  );
  const data = await res.json();

  return {
    props: { house: data },
  };
};
const Details = ({ house }) => {
  const { loggedIn, logoutFunction, user } = useContext(LoginContext);
  const [tab, setTab] = useState(0);

  const isActive = (index) => {
    if (tab === index) return " active";
    return "";
  };
  var images = [house.imgHero, house.img1, house.img2, house.img3];

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleFav(house) {
    dispatch(addToCart(house));
    console.log(house);
  }
  const chatBtn = () => {
    let usernameValue = user.username
    let advName = "HouseID:  " + house.id + "    " + "   OwnerName:" + "  " + house.ownerName
    console.log(1111, advName);
    let api = `https://houses--safe.herokuapp.com/chat.html?username=${usernameValue}&Advname=${advName}`
    window.open(api)
  }
  // console.log(11111, user.username);
  console.log(house);
  var divImage = {
    backgroundImage: "url(" + house.imgHero + ")",
  };
  return (
    <>
      <div className={styles.div}>
        <Head>
          <title className={styles.title}>Detail Home</title>
        </Head>

        <div className={styles.imgHeroo}>
          <img
            src={images[tab]}
            alt={images[tab]}
            className={styles.imgHeroo}
            style={{
              height: "500px",
              width: "800px",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
            }}
          />
          {/* <div className={styles.div}> */}
          <div className={styles.img} style={{ cursor: "pointer" }}>
            {images.map((img, index) => (
              <img
                className={styles.imgs}
                key={index}
                src={img}
                alt={img}
                className={`img-thumbnail rounded ${isActive(index)}`}
                style={{ height: "50px", width: "50px" }}
                onClick={() => setTab(index)}
              />
            ))}
          </div>
        </div>
        {/* </div> */}
        <span className={styles.span}> Home Data</span>
        <div className={styles.card_text}>
          {" "}
          <div className={styles.data}>{house.location}</div>
          <div className={styles.data}>${house.price}</div>
          <div className={styles.data}>{house.Description}</div>
          <div className={styles.data}>{house.rentDuration}</div>
          <div className={styles.data}>{house.ownerName}</div>
          <div className={styles.data}>{house.phoneNumber}</div>
          <div className={styles.data}>{house.state}</div>
          <button
            type="button"
            onClick={() => {
              handleFav(house);
            }}
          >
            ❤️
          </button>
      <button onClick={chatBtn}>Chat</button>
        </div>
      </div>
      {/* <h1>{house.location}</h1>
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
      <button onClick={chatBtn}>Chat</button>
    </div>
      <button>rent</button> */}
    </>
  );
};

export default Details;
