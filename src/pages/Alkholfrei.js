import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import ShowList from "../components/Lists/ShowList";

const Alkoholfrei = () => {
  const params = useParams();
  const { data, isLoading, error } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
  );

  const dataFromApi = data?.drinks ?? {};

  let drinksList = <h2>No drinks found</h2>;

  if (dataFromApi.length > 0) {
    drinksList = Object.keys(dataFromApi)?.map((drink, index) => {
      return (
        <ShowList
          classLink={[`${Math.floor((index % 6) + 1)}`]}
          key={index}
          toRoad={dataFromApi[drink].strDrink}
          imgSrc={dataFromApi[drink].strDrinkThumb}
          altSrc={dataFromApi[drink].strDrink}
          classH2={`${index % 2 !== 0 && "right"}`}
          textH2={dataFromApi[drink].strDrink}
        />
      );
    });
  }

  let content = drinksList;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return <>{content}</>;
};

export default Alkoholfrei;
