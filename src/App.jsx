import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <>
    <NextUIProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </NextUIProvider>
    </>
  )
}

export default App;