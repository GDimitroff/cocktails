import { useState, useEffect, useRef } from 'react';

import { useCocktails } from '../contexts/CocktailsContext';

const SearchForm = () => {
  const { setSearchTerm } = useCocktails();
  const searchValue = useRef(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    // setIsSearching(true);
    // setIsSearching(false);
    setSearchTerm(searchValue.current.value);

    //TODO: thing about this carefully and build it properly
    // setTimeout(() => {
    //   setIsSearching(false);
    //   setSearchTerm(searchValue.current.value);
    // }, 1000);
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
      <div
        className={`${
          isSearching ? 'form-processing active' : 'form-processing'
        }`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchForm;
