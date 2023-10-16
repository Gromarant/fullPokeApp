import { useState } from 'react';
import Header from './components/commonComponents/Header';
import Main from './components/commonComponents/Main';
import { pokemonListContext } from './context/pokemonListContext';
import { pokemonCreatedListContext } from './context/pokemonCreatedListContext';
import { searchedPokemonContext } from './context/searchedPokemonContext';
import { createdPokemonContext } from './context/createdPokemonContext';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [listOfPokemons, setListOfPokemons] = useState([]);
  const [listOfPokemonsCreated, setListOfPokemonsCreated] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const [createdPokemon, setCreatedPokemon] = useState({});

  const itContainsThisPokemon = (pokemon) => {
    const currentListNames = listOfPokemons.map(item => Object.entries(item)[1][1]);
    return currentListNames.includes(pokemon['name']);
  }

  const addToListOfPokemons = (pokemon) => {
    itContainsThisPokemon(pokemon) ? null : setListOfPokemons(([...listOfPokemons, pokemon]));
  };

  const addToListOfCreatedPokemons = (pokemon) => {
    setListOfPokemonsCreated([...listOfPokemonsCreated, pokemon]);
  };


  return (
    <>
      <NextUIProvider>
        <pokemonListContext.Provider value={{listOfPokemons, setListOfPokemons, addToListOfPokemons}}>
            <BrowserRouter>
              <Header />
            <pokemonCreatedListContext.Provider value={{listOfPokemonsCreated, setListOfPokemonsCreated, addToListOfCreatedPokemons}}>
            <createdPokemonContext.Provider value={{createdPokemon, setCreatedPokemon}}>
            <searchedPokemonContext.Provider value={{searchedPokemon, setSearchedPokemon}}>
              <Main />
            </searchedPokemonContext.Provider>
            </createdPokemonContext.Provider>
            </pokemonCreatedListContext.Provider>
            </BrowserRouter>
        </pokemonListContext.Provider> 
      </NextUIProvider>
    </>
  )
}

export default App;