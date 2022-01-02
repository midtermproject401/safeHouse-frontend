import Link from "next/link";
import styles from "../../../../styles/HotelCard.module.css";
import Banner from "../../../../components/Hotels/Banner";
import FeaturedRooms from "../../../../components/Hotels/FeaturedRooms";
import { useRouter } from "next/router";
import SingleRoom from "../../../../components/Hotels/SingleRoom";
import { useEffect, useState } from "react";

export default function Room({ room }) {
  const [hotelId, setHotelId] = useState();
  const [roomId, setRoomId] = useState();

  const router = useRouter();
  const { id, roomid } = router.query;
  useEffect(() => {
    setHotelId(id);
    setRoomId(roomid);
  }, [id, roomid]);
  return (
    <>
      <SingleRoom />
    </>
  );
}
