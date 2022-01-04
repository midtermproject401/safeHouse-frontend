import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { LoginContext } from "../context/loginContext";
import Link from "next/link";

const Navbar = () => {
  const { loggedIn, logoutFunction } = useContext(LoginContext);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/logoNew.PNG"
            className={styles.newLogo}
            alt=""
            width="50"
            height="50"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>
            <Link href="/">
              <a className={styles.text}>Safe House</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
<<<<<<< HEAD
          <Link href={"/"}>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href={"./home/houses"}>
            <li className={styles.listItem}>Houses</li>
          </Link>
          <Link href={"./hotels"}>
            <li className={styles.listItem}>Hotels</li>
          </Link>
          <Link href={"./home/fav"}>
            <li className={styles.listItem}>Favourite</li>
          </Link>
          <Link href={"./home/Advs"}>
            <li className={styles.listItem}>ADVS</li>
          </Link>
          <li className={styles.listItem}>Profile</li>
          <li className={styles.listItem}>Contact</li>
          {loggedIn && (
            <>
=======
          {loggedIn && (
            <>
              <li className={styles.listItem}>
                <Link href="/">
                  <a className={styles.listItem}>Homepage</a>
                </Link>
              </li>

              <li className={styles.listItem}>
                <Link href="./hotels">
                  <a className={styles.listItem}>Hotels</a>
                </Link>
              </li>

              <li className={styles.listItem}>
                <Link href="./home/houses">
                  <a className={styles.listItem}>Houses</a>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="./home/fav">
                  <a className={styles.listItem}>Favorite</a>
                </Link>
              </li>

              <li className={styles.listItem}>
                <Link href="/profile">
                  <a className={styles.listItem}>Profile </a>
                </Link>
              </li>
              <Link href={"./home/Advs"}>
                <li className={styles.listItem}>ADVS</li>
              </Link>

>>>>>>> ebf0a3c6baa50cd30e6c4d8054f48de31475973d
              <li className={styles.logoutB} onClick={logoutFunction}>
                <Link href="/">
                  <a className={styles.logoutB}>logout</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
