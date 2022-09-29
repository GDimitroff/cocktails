import React, { useContext } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const CocktailsContext = React.createContext();

const CocktailsProvider = ({ children }) => {
  return (
    <CocktailsContext.Provider value="hello">
      {children}
    </CocktailsContext.Provider>
  );
};

export const useCocktails = () => {
  return useContext(CocktailsContext);
};

export default CocktailsProvider;
