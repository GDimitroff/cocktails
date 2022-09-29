import { useEffect, useRef } from 'react';
import { useCocktails } from '../contexts/CocktailsContext';

const SearchForm = () => {
  const { setSearchTerm } = useCocktails();
  const searchValue = useRef(null);

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              ref={searchValue}
              onChange={searchCocktail}
              placeholder="search..."
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
