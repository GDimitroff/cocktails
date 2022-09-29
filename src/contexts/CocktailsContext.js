import React, { useContext, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const CocktailsContext = React.createContext(null);

export const CocktailsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  return (
    <CocktailsContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </CocktailsContext.Provider>
  );
};

export const useCocktails = () => {
  return useContext(CocktailsContext);
};
