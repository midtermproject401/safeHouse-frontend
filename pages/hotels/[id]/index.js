import Link from "next/link";
import styles from "../../../styles/HotelCard.module.css";
import Banner from "../../../components/Hotels/Banner";
import FeaturedRooms from "../../../components/Hotels/FeaturedRooms";
import cookie from "react-cookies";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../../store/actions/action";

export const getStaticPaths = async () => {
  const myTokenCookie = cookie.load("token");
  console.log(myTokenCookie, "tooooooooken");

  const res = await fetch("https://safe---house.herokuapp.com/hotel", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${myTokenCookie}`,
    },
  });

  const data = await res.json();
  const paths = data.map((hotel) => {
    return {
      params: { id: hotel.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://safe---house.herokuapp.com/hotel/${id}`);
  const data = await res.json();
  return {
    props: { hotel: data },
  };
};
export default function Hotel({ hotel }) {
  // const dispatch=useDispatch()
  // const {hotels}=useSelector(state=>state.hotels)
  console.log(hotel);
  var divImage = {
    backgroundImage: "url(" + hotel.img + ")",
  };

 
  return (
    <>
      <header className={styles.defaultHero} style={divImage}>
        <Banner title={hotel.hotelName} subtitle={hotel.Discription}>
          <Link href={`/hotels/${hotel.id}/rooms`} className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </header>

      <FeaturedRooms id={hotel.id} />
    </>
  );
}
