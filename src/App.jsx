import { useState } from 'react';
// import { object } from 'prop-types';
import Header from './components/commonComponents/Header';
import Footer from './components/commonComponents/Footer';
import Main from './components/commonComponents/Main';
import { pokemonListContext } from './context/pokemonListContext';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [listOfPokemons, setListOfPokemons] = useState([]);

  const itContainsThisPokemon = (pokemon) => {
    const currentListNames = listOfPokemons.map(item => Object.entries(item)[1][1]);
    return currentListNames.includes(pokemon['name']);
  }


  const addToListOfPokemons = (pokemon) => {
    itContainsThisPokemon(pokemon) ? null : setListOfPokemons(([...listOfPokemons, pokemon]));
  };

  return (
    <>
      <NextUIProvider>
        <pokemonListContext.Provider value={{listOfPokemons, setListOfPokemons, addToListOfPokemons}}>
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