import { Routes, Route } from 'react-router-dom';

import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Cocktail from './pages/Cocktail';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:id" element={<Cocktail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
