import { useState, useEffect, useCallback } from "react";

const useObjFilter = (data) => {
  const [newIngredients, setNewIngredients] = useState([]);
  const ingredients = [];
  const measures = [];

  const test = useCallback((data) => {
    for (let key in data) {
      if (data[key] != null) {
        if (key.startsWith("strIngredient")) {
          ingredients.push(data[key]);
        }

        if (key.startsWith("strMeasure")) {
          measures.push(data[key]);
        }
      }
    }

    const all = ingredients.map((item, index) => {
      return {
        [index]: `${item} ${measures[index]}`,
      };
    });
    let newIngr = all.map((item, index) => {
      return <p key={index}>{item[index]}</p>;
    });

    setNewIngredients(newIngr);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    test(data);
  }, [test, data]);

  return {
    newIngredients,
  };
};

export default useObjFilter;
