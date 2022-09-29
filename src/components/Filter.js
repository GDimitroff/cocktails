import { useCocktails } from '../contexts/CocktailsContext';

const Filter = () => {
  const { cocktails, setFilter } = useCocktails();
  const categories = [
    'all',
    ...new Set(cocktails.map((cocktail) => cocktail.category.toLowerCase())),
  ];

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="filter">
      <select name="categories" id="categories" onChange={handleChange}>
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
