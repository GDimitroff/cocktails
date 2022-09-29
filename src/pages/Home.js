import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

const Home = () => {
  return (
    <main className="main section">
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
