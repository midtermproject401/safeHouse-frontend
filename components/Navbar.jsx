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
<<<<<<< HEAD
          <li className={styles.listItem}>
            <a className={styles.listItem} href="/">
              Homepage
            </a>
          </li>

          <li className={styles.listItem}>Houses</li>
          <li className={styles.listItem}>Hotels</li>

          <li className={styles.listItem}>
            <a className={styles.listItem} href="/profile">
              Profile{" "}
            </a>
          </li>

=======
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
          <li className={styles.listItem}>Profile</li>
>>>>>>> c729d8675d9ce68a518de2e4e07f6444b66efaa4
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
<<<<<<< HEAD
=======
// import React, { useContext } from "react";
// import { Navbar, Button, Alignment } from "@blueprintjs/core";
// import styles from "../styles/nav.module.scss";

// import { Link } from "react-router-dom";
// import { LoginContext } from "../context/loginContext";

// function Navbare(props) {
//   const { loggedIn, logoutFunction } = useContext(LoginContext);

//   return (
//     <>
//       <Navbar className="bp3-navbar bp3-dark">
//         <Navbar.Group>
//           <Navbar.Heading>Safe House</Navbar.Heading>
//         </Navbar.Group>
//         <Navbar.Group align={Alignment.RIGHT}>
//           <Navbar.Divider />
//           <a to="/">
//             <Button className="bp3-minimal" icon="home" text="Home" />
//           </a>
//           {loggedIn && (
//             <>
//               <a to="/">
//                 <Button
//                   className="bp3-minimal"
//                   icon="log-out"
//                   text="logout"
//                   onClick={logoutFunction}
//                 />
//               </a>
//             </>
//           )}
//         </Navbar.Group>
//       </Navbar>
//     </>
//   );
// }

// export default Navbare;
>>>>>>> c729d8675d9ce68a518de2e4e07f6444b66efaa4
