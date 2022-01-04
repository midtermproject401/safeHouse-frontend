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
          {loggedIn && (
            <>
              <li className={styles.listItem}>
                <Link href="/">
                  <a className={styles.listItem}>Homepage</a>
                </Link>
              </li>

              <li className="dropdown">
                <Link href="/home/houses">
                  <a>Houses</a>
                </Link>

                <div className="dropdown-content">
                  <Link href="/home/houses">
                    <a>Houses</a>
                  </Link>
                  <Link href="/home/Advs">
                    <a className="dropElement">Creat Adds</a>
                  </Link>
                </div>
              </li>

              <li className={styles.listItem}>
                <Link href="/hotels">
                  <a className={styles.listItem}>Hotels</a>
                </Link>
              </li>

              {/* <li className={styles.listItem}>
                <Link href="/home/houses">
                  <a className={styles.listItem}>Houses</a>
                </Link>
              </li> */}
              {/* <li className={styles.listItem}>
                <Link href="/home/fav">
                  <a className={styles.listItem}>Favorite</a>
                </Link>
              </li> */}

              <li className={styles.listItem}>
                <Link href="/profile">
                  <a className={styles.listItem}>Profile </a>
                </Link>
              </li>

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
