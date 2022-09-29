import { motion } from 'framer-motion';

const CocktailDetails = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          type: 'Tween',
        },
      }}
      className="section cocktail-details">
      Cocktail
    </motion.section>
  );
};

export default CocktailDetails;
