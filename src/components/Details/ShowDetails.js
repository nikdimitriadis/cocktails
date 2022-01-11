import styles from "./ShowDetails.module.scss";

const ShowDetails = (props) => {
  return (
    <article className={styles.article}>
      <div className={styles.img}>
        <img src={props.imgSrc} alt={props.altSrc} />
      </div>
      <div className={styles.text}>
        <h2>{props.textH2}</h2>
        <h3>Zutaten</h3>

        {props.newIngredients}
        <p> {props.textP}</p>
      </div>
    </article>
  );
};

export default ShowDetails;
