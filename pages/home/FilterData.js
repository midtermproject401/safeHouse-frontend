import { addToCart } from "../../store/actions/action";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";

const FilterData = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  function handleFav(house) {
    dispatch(addToCart(house));
  }

  return (
    <>
      {state.data.filterDataHouse.map((house) => (
        <>
          <Link href={"/home/" + house.id} key={house.id}>
            <a>
              <Image src={house.imgHero} width={500} height={500} />
            </a>
          </Link>
          <button
            onClick={() => {
              handleFav(house);
            }}
          >
            add to fav
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

export default FilterData;
