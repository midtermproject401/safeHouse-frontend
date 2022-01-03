import Image from "next/image";
import styles from "../styles/HomePageCard.module.css";

const HomePageCard = () => {
  return (
    <>
      <div className={styles.container}>
        <Image src="/img/rentHome.PNG" alt="" width="500" height="400" />
        <h1 className={styles.title}>Rent a home </h1>

        <p className={styles.desc}>
          Find your place with an immersive photo experience , including things
          you won’t find anywhere else.
        </p>
      </div>
      <div className={styles.container}>
        <Image src="/img/hotelbook.png" alt="" width="500" height="400" />
        <h1 className={styles.title}>Book a hotel Room</h1>

        <p className={styles.desc}>
          Find your place with an immersive photo experience, including things
          you won’t find anywhere else.
        </p>
      </div>
      <div className={styles.container}>
        <Image src="/img/sellHome.PNG" alt="" width="500" height="400" />
        <h1 className={styles.title}>Post adds </h1>

        <p className={styles.desc}>
          Sell your home with confidence, Safe House is making it simpler to
          sell your home and move forward.
        </p>
      </div>
    </>
  );
};

export default HomePageCard;
