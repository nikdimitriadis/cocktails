import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <article>
        <h4>Genuss hat viele Facetten..</h4>
        <p>..aber ohne das richtige Maß geht es nicht!</p>
        <p>
          Cocktails kann man mit allen Sinnen genießen.Zum Cocktail-Genuss
          gehören neben dem Geschmack natürlich auch die Optik, die Farbe und
          die verschiedenen Aromen, die im Zusammenspiel ganz neue Assoziationen
          wecken und unterbewusst auch den Geschmack beeinflussen.
        </p>
      </article>
    </footer>
  );
};

export default Footer;
