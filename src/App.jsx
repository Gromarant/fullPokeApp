import { useState } from 'react';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { BrowserRouter } from 'react-router-dom';
import Header from './components/commonComponents/Header';
import Main from './components/commonComponents/Main';
import { pokemonContext } from './context/pokemonContext';

const App = () => {
  const [listOfPokemons, setListOfPokemons] = useState([]);
  const [listOfPokemonsCreated, setListOfPokemonsCreated] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const [createdPokemon, setCreatedPokemon] = useState({});


  const itContainsThisPokemon = (pokemon, list) => {
    let currentListNames;
    if (listOfPokemons) {
      currentListNames = list.map(item => Object.entries(item)[0][1]);
      return currentListNames.includes(pokemon['id']); 
    }
    else if (listOfPokemonsCreated) {
      currentListNames = list.map(item => Object.entries(item)[2][1]);
      return currentListNames.includes(pokemon['owner_id']); 
    }
  }

  const addToListOfPokemons = (pokemon) => {
    itContainsThisPokemon(pokemon, listOfPokemons) ? null : setListOfPokemons(([...listOfPokemons, pokemon]));
  };

  const addToListOfCreatedPokemons = (pokemon) => {
    itContainsThisPokemon(pokemon, listOfPokemonsCreated) ? null : setListOfPokemonsCreated([...listOfPokemonsCreated, pokemon]);
  };

  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        primary: '#2359be',
      }
    }
  })
  
  return (
    <>
      <NextUIProvider theme={theme}>
        <pokemonContext.Provider value={{
          listOfPokemons, setListOfPokemons, 
          listOfPokemonsCreated, setListOfPokemonsCreated, 
          createdPokemon, setCreatedPokemon, 
          searchedPokemon, setSearchedPokemon, 
          addToListOfPokemons, addToListOfCreatedPokemons
        }}>
          <BrowserRouter>
            <Header />
            <Main />
          </BrowserRouter>
        </pokemonContext.Provider>
      </NextUIProvider>
    </>
  )
}

export default App;