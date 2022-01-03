import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../../store/actions/action";
import Link from "next/link";
import Image from "next/image";

const Favaroite = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function handledelete(house) {
    dispatch(deleteFromCart(house));
  }
  return (
    <>
      <h1>cart</h1>
      <h1>{state.cart.count}</h1>
      {state.cart.cartProducts.map((house) => (
        <>
          <Link href={"/home/" + house.id} key={house.id}>
            <a>
              <Image src={house.imgHero} width={500} height={500} />
            </a>
          </Link>
          <button
            onClick={() => {
              handledelete(house);
            }}
          >
            delete
          </button>
          <button>rent</button>
          <h3>{house.location}</h3>
          <h3>{house.price}</h3>
          <h3>{house.state}</h3>
        </>
      ))}
    </>
  );
};

export default Favaroite;
