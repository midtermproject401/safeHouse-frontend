import styles from "../styles/HomePageList.module.css";
import HomePageCard from "./HomePageCard";

const HomePageList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Whether you’re buying, selling or renting, we can help you move forward.
      </h1>

      <div className={styles.wrapper}>
        <HomePageCard />
      </div>
    </div>
  );
};

export default HomePageList;
