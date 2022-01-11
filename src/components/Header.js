import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
    setSearchValue("");
  };

  const changeHandler = (e) => {
    setSearchValue(() => e.target.value);
  };

  return (
    <header className={styles.header}>
      <nav>
        <p className={styles.navText}>DRINKS & CHILL</p>
        <Link className={styles.navText} to="/">
          HOME
        </Link>
      </nav>
      <article>
        <h1>Cocktails & Getränke!</h1>
        <p>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE</p>
        <form onSubmit={submitHandler}>
          <input
            className={styles.radius}
            value={searchValue}
            type="text"
            onChange={changeHandler}
            placeholder="type something"
          />
          <button className={styles.radius} type="submit">
            Search
          </button>
        </form>
      </article>
    </header>
  );
};

export default Header;
