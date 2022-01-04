import "react-calendar/dist/Calendar.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import Banner from "./Banner";
import styles from "../../styles/RoomCards.module.css";
import { getRooms } from "../../store/actions/action";

export default function SingleRoom() {
  const dispatch = useDispatch();

  const [value, onChange] = useState(new Date());
  const [active, setActive] = useState("");

  const { rooms, activeRoom, filterdRooms } = useSelector(
    (state) => state.hotels
  );
  console.log(rooms, activeRoom);

  useEffect(() => {
    dispatch(getRooms(rooms.hotelid));
    setActive(activeRoom);
  }, []);

  var divImage;

  const userLink = () => {
    return (
      <>
        <Link href={`product/${product._id}`}>
          <a className="btn btn-info" style={{ marginRight: "5px", flex: 1 }}>
            View
          </a>
        </Link>
        <button
          className="btn btn-success"
          style={{ marginLeft: "5px", flex: 1 }}
          disabled={product.inStock === 0 ? true : false}
          onClick={() => dispatch(addToCart(product, cart))}
        >
          Buy
        </button>
      </>
    );
  };

  return (
    <>
      {/* <Banner title={`HOTEL'S ROOM`}></Banner> */}
      <section className={styles.singleRoom}>
        {rooms.map((room, index) => {
          if (room.id == active) {
            divImage = {
              backgroundImage: "url(" + room.heroImage + ")",
            };
            return (
              <>
                <div className={styles.products}>
                  {/* {
                auth.user && auth.user.role === 'admin' &&
                <input type="checkbox" checked={product.checked}
                className="position-absolute"
                style={{height: '20px', width: '20px'}}
                onChange={() => handleCheck(product._id)} />
            } */}
                  <img
                    className={styles.cardImgTop}
                    src={room.heroImage}
                    alt={"product.images[0].url"}
                    height={"350px"}
                    marginRight="1.5rem!important"
                  />
                  <img
                    className={styles.cardImg1}
                    src={room.img1}
                    alt={"product.images[0].url"}
                    height={"100px"}
                    marginRight="1.5rem!important"
                  />
                  <img
                    className={styles.cardImg2}
                    src={room.img2}
                    alt={"product.images[0].url"}
                    height={"100px"}
                    marginRight="1.5rem!important"
                  />
                  <img
                    className={styles.cardImg3}
                    src={room.img3}
                    alt={"product.images[0].url"}
                    height={"100px"}
                    marginRight="1.5rem!important"
                  />
                  {/* <div className={styles.cardBody}> */}
                  <h5>
                    {room.accommodationType}
                    <br></br>
                  </h5>

                  {/* <div className="row justify-content-between mx-0">
                      <h6 className="text-danger">${product.price}</h6>
                      {product.inStock > 0 ? (
                        <h6 className="text-danger">
                          In Stock: {product.inStock}
                        </h6>
                      ) : (
                        <h6 className="text-danger">Out Stock</h6>
                      )}
                    </div> */}

                  <p>
                    {/* {room.Extra1} */}
                    {room.price}
                  </p>
                  <nav>
                  <li>{room.Extra1}</li>
                  <li>{room.Extra2}</li>
                  <li>{room.Extra3}</li>
                  </nav>

                  <img className={styles.book} src="https://image.freepik.com/free-vector/flat-hotel-booking-background_23-2148142886.jpg"></img>
                  
                  {/* 
                    <div className="row justify-content-between mx-0">
                      {!auth.user || auth.user.role !== "admin"
                        ? userLink()
                        : adminLink()}
                    </div> */}
                </div>
                {/* </div> */}
              </>
            );
          }
        })}
      </section>
    </>
  );
}
