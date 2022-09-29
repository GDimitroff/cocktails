export const transformData = (data) => {
  return data.map((drink) => {
    const {
      idDrink,
      strDrink,
      strCategory,
      strAlcoholic,
      strGlass,
      strInstructions,
      strDrinkThumb,
    } = drink;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      isAlcoholic: strAlcoholic,
      glass: strGlass,
      category: strCategory,
      instructions: strInstructions,
    };
  });
};
