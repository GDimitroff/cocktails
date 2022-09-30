import { useCocktails } from '../contexts/CocktailsContext';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useCocktails();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              placeholder="search..."
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
