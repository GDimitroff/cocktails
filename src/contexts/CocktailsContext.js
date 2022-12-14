import React, { useContext, useEffect, useState, useCallback } from 'react';

import { transformData } from '../utils/helpers';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const CocktailsContext = React.createContext(null);

export const CocktailsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktails = transformData(drinks);
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }

      setFilter('all');
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const fetchTimeout = setTimeout(() => {
      fetchDrinks();
    }, 400);

    return () => {
      clearTimeout(fetchTimeout);
    };
  }, [searchTerm, fetchDrinks]);

  useEffect(() => {
    setFilteredCocktails(
      cocktails.filter((cocktail) => {
        return cocktail.category.toLowerCase() === filter || filter === 'all';
      })
    );
  }, [filter, cocktails]);

  return (
    <CocktailsContext.Provider
      value={{
        loading,
        cocktails,
        filteredCocktails,
        searchTerm,
        setSearchTerm,
        filter,
        setFilter,
      }}>
      {children}
    </CocktailsContext.Provider>
  );
};

export const useCocktails = () => {
  return useContext(CocktailsContext);
};
