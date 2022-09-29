import { useCocktails } from '../contexts/CocktailsContext';

const Filter = () => {
  const { cocktails } = useCocktails();
  const categories = [
    'all',
    ...new Set(cocktails.map((cocktail) => cocktail.category.toLowerCase())),
  ];

  return (
    <div className="filter">
      <select name="categories" id="categories">
        {categories.map((category) => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
