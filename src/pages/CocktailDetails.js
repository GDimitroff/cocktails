import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { transformData } from '../utils/helpers';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const CocktailDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const { drinks } = await response.json();

        if (drinks) {
          const transformedCocktail = transformData(drinks)[0];
          console.log(transformedCocktail);
        } else {
          setCocktail(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getCocktail();
  }, [id]);

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
