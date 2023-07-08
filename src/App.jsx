import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { pokemonListContext } from './context/pokemonListContext';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [pokemonList, setPokemonList] = useState([])

  return (
    <>
      <pokemonListContext.Provider value={{pokemonList, setPokemonList}}>
        <NextUIProvider>
          <BrowserRouter>
            <Header />
            <Main />
          </BrowserRouter>
          <Footer />
        </NextUIProvider>
      </pokemonListContext.Provider> 
    </>
  )
}

export default App;