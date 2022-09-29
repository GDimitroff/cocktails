import { useCocktails } from '../contexts/CocktailsContext';

const SearchForm = () => {
  const { setSearchTerm } = useCocktails();

  return <div>SearchForm</div>;
};

export default SearchForm;
