import { useState } from 'react';
import Header from './components/commonComponents/Header';
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
        </pokemonListContext.Provider> 
      </NextUIProvider>
    </>
  )
}

export default App;