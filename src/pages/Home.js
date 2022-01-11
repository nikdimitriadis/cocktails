import { NavLink } from "react-router-dom";
import styles from "./Home.module.scss";

const links = [
  {
    drink: "Gin",
    info: "Get all the Gin",
  },
  {
    drink: "Vodka",
    info: " It`s Vodka o`clock",
  },
  {
    drink: "Rum",
    info: "Get a bottle of Rum,yoho",
  },
  {
    drink: "Scotch",
    info: "So much I like to drink Scotch that sometimes I think my name is Igor Stra-whiskey.",
  },
  {
    drink: "Alkoholfrei",
    info: "Heute Abend darf es mal alkoholfrei sein. Einer muss am Ende ja den Taxifahrer spielen.",
  },
  {
    drink: "Random",
    info: "Lorem ipsum dolor",
  },
];

const Home = () => {
  return (
    <>
      <section className={styles.flexen}>
        {links.map((link, index) => (
          <NavLink
            className={styles[`style${Math.floor((index % 6) + 1)}`]}
            key={index}
            to={`${link.drink}`}
          >
            <div className={styles.div}>
              <h2> {link.drink}</h2>
              <p>{link.info}</p>
            </div>
          </NavLink>
        ))}
      </section>
    </>
  );
};

export default Home;
