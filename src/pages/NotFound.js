import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          type: 'Tween',
        },
      }}>
      <div className="error">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </motion.section>
  );
};

export default NotFound;
