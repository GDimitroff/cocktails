import { motion } from 'framer-motion';

import { useCocktails } from '../contexts/CocktailsContext';

import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {
  const { loading, filteredCocktails } = useCocktails();

  return (
    <motion.section className="section">
      {loading && <Loading />}
      {!loading && filteredCocktails.length === 0 && (
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.3,
              type: 'Tween',
            },
          }}>
          no cocktails matched your search criteria
        </motion.h2>
      )}
      <motion.div className="cocktails">
        {!loading &&
          filteredCocktails.length > 0 &&
          filteredCocktails.map((cocktail) => {
            return <Cocktail key={cocktail.id} {...cocktail} />;
          })}
      </motion.div>
    </motion.section>
  );
};

export default CocktailList;
