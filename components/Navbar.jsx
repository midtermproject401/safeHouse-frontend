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
            <Link href="/">Safe House</Link>
          </div>
          {/* <div className={styles.text}>012 345 678</div> */}
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">Homepage</Link>
          </li>

          <li className={styles.listItem}>Houses</li>
          <li className={styles.listItem}>Hotels</li>

          <li className={styles.listItem}>
            <Link href="/profile">Profile </Link>
          </li>

          <li className={styles.listItem}>Contact</li>
          {loggedIn && (
            <>
              <li className={styles.logoutB} onClick={logoutFunction}>
                <Link className={styles.logoutB} href="/">
                  logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={styles.item}>
        {/* <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
