import { useCocktails } from '../contexts/CocktailsContext';

const Filter = () => {
  const { cocktails, filter, setFilter } = useCocktails();
  const categories = [
    'all',
    ...new Set(cocktails.map((cocktail) => cocktail.category.toLowerCase())),
  ];

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  if (cocktails.length === 0) {
    return null;
  }

  return (
    <div className="filter">
      <select
        name="categories"
        id="categories"
        onChange={handleChange}
        value={filter}>
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
