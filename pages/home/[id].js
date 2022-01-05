import Image from "next/image";
import { addToCart } from "../../store/actions/action";
import { useSelector, useDispatch } from "react-redux";
import { LoginContext } from "../../context/loginContext";
// import styles from "../../styles/hoteldetail.module.css";
import styles from "../../styles/Homedetail.module.css";
import swal from "sweetalert";
import { BsFillChatQuoteFill } from "react-icons/bs";

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
    swal("Added!", "Check your profile!", "success");
  }
  const chatBtn = () => {
    let usernameValue = user.username;
    let advName =
      "HouseID:  " +
      house.id +
      "    " +
      "   OwnerName:" +
      "  " +
      house.ownerName;
    let api = `https://houses--safe.herokuapp.com/chat.html?username=${usernameValue}&Advname=${advName}`;
    window.open(api);
  };
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
                // className={`img-thumbnail rounded ${isActive(index)}`}
                style={{ height: "50px", width: "50px" }}
                onClick={() => setTab(index)}
              />
            ))}
          </div>
        </div>
        {/* </div> */}
        <div className={styles.card_text}>
          {" "}
          <span className={styles.spanTitle}> Home Data</span>
          <div className={styles.data}>
            <span>location : </span>
            {house.location}
          </div>
          <div className={styles.data}>
            <span>price : </span>${house.price}
          </div>
          <div className={styles.data}>
            <span>Description : </span>
            {house.Description}
          </div>
          <div className={styles.data}>
            <span>Rent Duration : </span>
            {house.rentDuration}
          </div>
          <div className={styles.data}>
            <span>Owner Name : </span>
            {house.ownerName}
          </div>
          <div className={styles.data}>
            <span>phone Number : </span>
            {house.phoneNumber}
          </div>
          <div className={styles.data}>{house.state}</div>
          <button
            onClick={() => {
              handleFav(house);
            }}
            className={styles.svg}
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
            </svg>{" "}
          </button>
          <button className={styles.svg2} onClick={chatBtn}>
            <BsFillChatQuoteFill />
            chat
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
