import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Loading from '../components/Loading';
import { transformData } from '../utils/helpers';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const CocktailDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const { drinks } = await response.json();

        if (drinks) {
          const newCocktail = transformData(drinks)[0];
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
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
        {!loading && !cocktail && <h2>no cocktail to display</h2>}
      </motion.section>
    );
  }

  const {
    name,
    image,
    isAlcoholic,
    glass,
    category,
    instructions,
    ingredients,
  } = cocktail;

  const formattedIngredients = ingredients
    .filter((item) => item !== null)
    .join(', ');

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
      <div className="drink">
        <div className="cocktail-details--image">
          <img src={image} alt={name} />
        </div>
        <div className="drink-info">
          <h2 className="drink-title">{name}</h2>
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">isAlcoholic: </span>
            {isAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {formattedIngredients}
          </p>
        </div>
      </div>
      <Link to="/" className="btn btn-home-details">
        back home
      </Link>
    </motion.section>
  );
};

export default CocktailDetails;
