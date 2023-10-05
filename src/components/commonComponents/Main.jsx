import { Route, Routes } from 'react-router-dom';
import Home from '../../views/Home';
import Create from '../../views/Create';
import Detail from '../../views/Detail';
import Search from '../../views/Search';


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