import styles from "./ShowList.module.scss";
import { Link } from "react-router-dom";

const ShowList = (props) => {
  console.log(props.toRoad);
  return (
    <div className={styles.content}>
      <Link className={styles[`style${props.classLink}`]} to={props.toRoad}>
        <div className={styles.flexaki}>
          <div className={styles.img}>
            <img src={props.imgSrc} alt={props.altSrc} />
          </div>
          <h2 className={styles[`${props.classH2}`]}>{props.textH2}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ShowList;
