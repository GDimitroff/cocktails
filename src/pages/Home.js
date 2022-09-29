import { motion } from 'framer-motion';

import Settings from '../components/Settings';
import CocktailList from '../components/CocktailList';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          type: 'Tween',
        },
      }}>
      <Settings />
      <CocktailList />
    </motion.main>
  );
};

export default Home;
