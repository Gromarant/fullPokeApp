import { Route, Routes } from 'react-router-dom';
import Memory from '../../pages/Memory';
import Create from '../../pages/Create';
import Detail from '../../pages/Detail';
import Search from '../../pages/Search';
import CreatedDetails from '../../pages/CreatedDetails';


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Memory />} />
        <Route path='/create' element={<Create />} />
        <Route path='/pokemon/:id' element={<Detail />} />
        <Route path='/created/:id' element={<CreatedDetails />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </main>
  );
};

export default Main;