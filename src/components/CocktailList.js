import { motion } from 'framer-motion';

import { useCocktails } from '../contexts/CocktailsContext';

import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {
  const { loading, filteredCocktails } = useCocktails();

  return (
    <motion.section className="section">
      {loading && <Loading />}
      {filteredCocktails.length === 0 && (
        <h2 className="section-title">
          no cocktails matched your search criteria
        </h2>
      )}
      <motion.div className="cocktails">
        {filteredCocktails.length > 0 &&
          filteredCocktails.map((cocktail) => {
            return <Cocktail key={cocktail.id} {...cocktail} />;
          })}
      </motion.div>
    </motion.section>
  );
};

export default CocktailList;
