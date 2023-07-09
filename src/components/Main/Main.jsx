import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import New from '../New';
import Details from '../Details';
import Hero from '../Hero';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/New' element={<New />} />
        <Route path='/pokemon/:id' element={<Details />} />
        <Route path='/search' element={<Hero />} />
      </Routes>
    </main>
  );
};

export default Main;