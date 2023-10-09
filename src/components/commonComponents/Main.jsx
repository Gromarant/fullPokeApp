import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Create from '../../pages/Create';
import Detail from '../../pages/Detail';
import Search from '../../pages/Search';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/pokemon/:id' element={<Detail />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </main>
  );
};

export default Main;