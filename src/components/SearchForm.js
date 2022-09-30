import { useState, useEffect } from 'react';

import { useCocktails } from '../contexts/CocktailsContext';

let initialLoad = true;

const SearchForm = () => {
  const { setSearchTerm } = useCocktails();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (initialLoad) return;

    let searchTimeout = setTimeout(() => {
      setSearchTerm(searchValue);
    }, 500);

    return () => {
      clearTimeout(searchTimeout);
    };
  }, [searchValue, setSearchTerm]);

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
              value={searchValue}
              onChange={(e) => {
                initialLoad = false;
                setSearchValue(e.target.value);
              }}
              placeholder="search..."
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
