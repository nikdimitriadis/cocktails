// import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import styles from "./SearchPage.module.scss";

const SearchPage = () => {
  // const [sit, setSit] = useState(false);
  // const [newData, setNewData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.drinks}`
  );

  const dataFromApi = data?.drinks ?? {};

  let drinksList = <h2>No drinks found</h2>;

  if (dataFromApi.length > 0) {
    drinksList = Object.keys(dataFromApi)?.map((drink, index) => {
      return (
        <div className={styles.content} key={index}>
          <li
            className={styles[`style${Math.floor((index % 6) + 1)}`]}
            onClick={filterHandler.bind(null, [index, dataFromApi[drink]])}
          >
            <div className={styles.flexaki}>
              <div className={styles.img}>
                <img
                  src={dataFromApi[drink].strDrinkThumb}
                  alt={dataFromApi[drink].strDrink}
                />
              </div>
              <h2 className={styles[`${index % 2 !== 0 && "right"}`]}>
                {dataFromApi[drink].strDrink}
              </h2>
            </div>
          </li>
        </div>
      );
    });
  }

  let content = drinksList;

  if (error) {
    content = <p>{error.message}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  function filterHandler(searchValue) {
    // const [indexios, datatios] = searchValue;
    // console.log(indexios, datatios);
    // console.log(searchValue);

    navigate(`/search/${searchValue[1].strDrink}/soloed`);
  }

  return <>{content}</>;
};
export default SearchPage;
