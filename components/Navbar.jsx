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
            <a className={styles.text} href="/">
              Safe House
            </a>
          </div>
          {/* <div className={styles.text}>012 345 678</div> */}
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
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
              <li className={styles.logoutB} onClick={logoutFunction}>
                <a className={styles.logoutB} href="/">
                  logout
                </a>
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
