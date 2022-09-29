import { useCocktails } from '../contexts/CocktailsContext';

import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {
  const { cocktails, loading } = useCocktails();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length === 0) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section cocktails">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-grid">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
