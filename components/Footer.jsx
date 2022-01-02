import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/footerImage.jpg"
          objectFit="cover"
          layout="fill"
          alt=""
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            We are continuously working to improve the accessibility of our web
            experience for everyone
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR Services</h1>
          <p className={styles.text}>Rent a home</p>
          <p className={styles.text}>Book a hotel Room</p>
          <p className={styles.text}>Post adds</p>
          <p className={styles.text}>contact sellers</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR COMPANY</h1>
          <p className={styles.text}>About Us</p>
          <p className={styles.text}>Privacy Policy</p>
          <p className={styles.text}>Terms Of Service</p>
          <p className={styles.text}>Accessibility</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
