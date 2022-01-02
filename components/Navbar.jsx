import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { LoginContext } from "../context/loginContext";
import Link from "next/link";

const Navbar = () => {
  const { loggedIn, logoutFunction, user } = useContext(LoginContext);
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  // const chat = () => {
  //   let api = `https://houses--safe.herokuapp.com/chat.html?username=${user.username}&Advname=house1`
  //   window.open(api, "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")
  // }
  let api = `https://houses--safe.herokuapp.com/chat.html?username=${user.username}&Advname=house1`
  
  console.log(2222222222222222222222222222222, user.username);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/safeHouseLogo.PNG" alt="" width="50" height="50" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Safe House</div>
          {/* <div className={styles.text}>012 345 678</div> */}
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
         <Link href={'/'}><li className={styles.listItem}>Homepage</li></Link> 
          <li className={styles.listItem}>Houses</li>
<<<<<<< HEAD
          <li className={styles.listItem}>Hotels</li>
=======
         <Link href={'./hotels'}><li className={styles.listItem}>Hotels</li></Link> 

>>>>>>> 86f2df20a618ac2f946614d8e60518caef6bb8b3
          <li className={styles.listItem}>Profile</li>
          <li className={styles.listItem}>Contact</li>
          {/* button for chat */}
          {/* <button className="btn btn-success" onClick={window.open('http://google.com','_blank')}> Google</button> */}
          {/* <button onClick={chat} >chat</button> */}
          <Button variant="primary" onClick={handleShow}>
            Chat
          </Button>
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Body>
            <iframe src={api} border="no" scrolling="no"  width="100%" height="100%"></iframe>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {loggedIn && (
            <>
              <a to="/">
                <button
                  className="bp3-minimal"
                  icon="log-out"
                  text="logout"
                  onClick={logoutFunction}
                >
                  logout
                </button>
              </a>
            </>
          )}
        </ul>
      </div>
      <div className={styles.item}>

      </div>
    </div>
  );
};

export default Navbar;

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
