import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Hero from './components/Hero';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;