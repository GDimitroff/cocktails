import React, { useContext, useEffect, useState } from 'react';

import { transformData } from '../utils/helpers';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const CocktailsContext = React.createContext(null);

export const CocktailsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [filter, setFilter] = useState('all');
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
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

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchDrinks();
  }, [searchTerm]);

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
        setSearchTerm,
        setFilter,
      }}>
      {children}
    </CocktailsContext.Provider>
  );
};

export const useCocktails = () => {
  return useContext(CocktailsContext);
};
