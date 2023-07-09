import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { pokemonListContext } from './context/pokemonListContext';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);


  const addToPokemonList = (pokemon) => {
    console.log("pokemon", pokemon);
    console.log("pokemonList", pokemonList);
    
    setPokemonList([...pokemonList, pokemon]);
  }


  return (
    <>
      <NextUIProvider>
        <pokemonListContext.Provider value={{pokemonList, setPokemonList, addToPokemonList}}>
            <BrowserRouter>
              <Header />
              <Main />
            </BrowserRouter>
            <Footer />
        </pokemonListContext.Provider> 
      </NextUIProvider>
    </>
  )
}

export default App;