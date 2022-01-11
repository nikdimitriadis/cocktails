import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import useObjFilter from "../hooks/useObjFilter";
// import styles from "./Detail.module.scss";
import ShowDetails from "../components/Details/ShowDetails";

const Detail = () => {
  const params = useParams();

  const { data, isLoading, error } = useFetch(
    ` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.drinkName}`
  );

  const dataFromApi = data?.drinks ?? {};

  const lastObj = dataFromApi[0];
  const { newIngredients } = useObjFilter(lastObj);

  let drinkDetails = <h2>No details found</h2>;
  let content = drinkDetails;

  if (lastObj) {
    content = (
      <ShowDetails
        imgSrc={lastObj.strDrinkThumb}
        altSrc={lastObj.strDrink}
        textH2={lastObj.strDrink}
        textP={lastObj.strInstructionsDE}
        newIngredients={newIngredients}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return <div>{content}</div>;
};

export default Detail;
