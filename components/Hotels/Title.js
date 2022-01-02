import styles from "../../styles/RoomCards.module.css"

const Title = ({ title }) => {
    return (
      <div className={styles.sectionTitle}>
        <h4>{title}</h4>
        <div />
      </div>
    );
  };
  
  export default Title;