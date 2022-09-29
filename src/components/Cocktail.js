import { Link } from 'react-router-dom';

const Cocktail = (props) => {
  const { id, name, image, category, glass, instructions, isAlcoholic } = props;

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{isAlcoholic}</p>
        <Link to={`/cocktails/${id}`} className="btn btn-primary">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
