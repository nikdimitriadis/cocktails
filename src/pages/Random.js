import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import useObjFilter from "../hooks/useObjFilter";
import ShowDetails from "../components/Details/ShowDetails";

const Random = () => {
  const { data, isLoading, error } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  );

  const dataFromApi = data?.drinks ?? {};
  console.log(dataFromApi);

  const lastObj = dataFromApi[0];
  const { newIngredients } = useObjFilter(lastObj);

  let drinksList = <h2>No drinks found</h2>;

  if (dataFromApi.length > 0) {
    drinksList = Object.keys(dataFromApi)?.map((drink, index) => {
      return (
        <ShowDetails
          imgSrc={dataFromApi[drink].strDrinkThumb}
          altSrc={dataFromApi[drink].strDrink}
          textH2={dataFromApi[drink].strDrink}
          textP={dataFromApi[drink].strInstructionsDE}
          newIngredients={newIngredients}
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

  return <div>{content}</div>;
};

export default Random;
