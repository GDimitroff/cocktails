import React, { useContext, useEffect, useState } from 'react';
import { data } from '../data';

import { transformData } from '../utils/helpers';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const CocktailsContext = React.createContext(null);

export const CocktailsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      setLoading(true);

      try {
        // const response = await fetch(`${url}${searchTerm}`);
        // const data = await response.json();
        // const { drinks } = data;

        // if (drinks) {
        //   const newCocktails = transformData(drinks);
        //   setCocktails(newCocktails);
        // } else {
        //   setCocktails([]);
        // }
        setCocktails(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchDrinks();
  }, [searchTerm]);

  return (
    <CocktailsContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </CocktailsContext.Provider>
  );
};

export const useCocktails = () => {
  return useContext(CocktailsContext);
};
