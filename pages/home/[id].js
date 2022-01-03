import Image from "next/image";
import { addToCart, deleteFromCart } from "../../store/actions/action";
import { useSelector, useDispatch } from "react-redux";
import { LoginContext } from "../../context/loginContext";
import { useContext } from "react";
export const getStaticPaths = async () => {
  const res = await fetch("https://toto-do-7.herokuapp.com/homes/house");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((house) => {
    return {
      params: { id: house.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://toto-do-7.herokuapp.com/homes/house/" + id);
  const data = await res.json();

  return {
    props: { house: data },
  };
};
const Details = ({ house }) => {
  const { loggedIn, logoutFunction, user } = useContext(LoginContext);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleFav(house) {
    dispatch(addToCart(house));
  }
  const chatBtn =()=>{
    let usernameValue = user.username
    let advName = "HouseID:  " + house.id + "    " + "   OwnerName:" + "  " + house.ownerName
    console.log(1111,advName);
    let api = `https://houses--safe.herokuapp.com/chat.html?username=${usernameValue}&Advname=${advName}`
    window.open(api)
  }
  // console.log(11111, user.username);
  return (
    <div>
      <Image src={house.imgHero} width={500} height={500} />
      <Image src={house.img1} width={500} height={500} />
      <Image src={house.img2} width={500} height={500} />

      <h1>{house.location}</h1>
      <p>{house.Description}</p>
      <p>{house.accomdationType}</p>
      <p>{house.rentDuration}</p>
      <p>{house.state}</p>
      <p>{house.price}</p>
      <p>{house.ownerName}</p>
      <p>{house.phoneNumber}</p>
      <button
        onClick={() => {
          handleFav(house);
        }}
      >
        add to fav
      </button>
      <button>rent</button>
      <button onClick={chatBtn} >Chat</button>
    </div>
  );
};

export default Details;
