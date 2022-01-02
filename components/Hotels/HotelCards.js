import Image from "next/image";
import styles from "../../styles/HotelCard.module.css";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import { getRooms, get } from "../../store/actions/action";
import { useDispatch, useSelector } from "react-redux";

const HotelCard = ({ image, name, description, id }) => {
  const dispatch = useDispatch();
  const [rating, ratingChanged] = useState(0);

  useEffect(() => {
    dispatch(getRooms(id));
    dispatch(get());
  }, []);

  const { rooms,hotels } = useSelector((state) => state.hotels);
  console.log(hotels, "roooms after fetching");
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={200} width={300} />
      <Link href={`/hotels`}>
        <div className={styles.info}>
          <nav>
            <Link href={`/hotels/${id}/map`}>
              <a>Show map</a>
            </Link>
            <div className={styles.ratingStars}>
              {" "}
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
            </div>
          </nav>
          <h3>{name}</h3>
          <p>{description}</p>
          <Link href={`/hotels/${id}`} onClick={() => HandleDisplay(name)}>
            <a>
              {" "}
              <button
                style={{ background: "blue", padding: "1.5%", color: "white" }}
              >
                see Availability
              </button>
            </a>
          </Link>{" "}
        </div>
      </Link>
    </div>
  );
};
export default HotelCard;
