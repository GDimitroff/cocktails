export const transformData = (data) => {
  return data.map((drink) => {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      isAlcoholic: drink.strAlcoholic,
      glass: drink.strGlass,
      category: drink.strCategory,
      instructions: drink.strInstructions,
      ingredients: [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
        drink.strIngredient9,
        drink.strIngredient10,
      ],
    };
  });
};
