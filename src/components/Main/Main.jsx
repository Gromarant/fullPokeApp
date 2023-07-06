import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loquesea' element={<h1>Holi</h1>} />
      </Routes>
    </main>
  );
};

export default Main;
