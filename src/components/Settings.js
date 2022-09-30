import { motion } from 'framer-motion';

import SearchForm from './SearchForm';
import Filter from './Filter';

const Settings = () => {
  return (
    <motion.section
      className="section settings"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          type: 'Tween',
        },
      }}>
      <SearchForm />
      <Filter />
    </motion.section>
  );
};

export default Settings;
