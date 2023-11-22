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

  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        primary: '#2359be',
        secondary: '#FFCC01',
        danger: '#c10000',
        neutral: '#686d77',
        darkBlue: '#2e2776', 
        fontDark: '#4b5360',
        lightViolet: '#eadcf8',
        darkViolet: '#7828c8',
        gradient: 'linear-gradient(to right, #24c6dc, #514a9d)',
        gradientActive: 'linear-gradient(to right, #FFCC01, #D28A00, #B97B03)',
        link: '#5E1DAD',
      },
      radii: {
        sm: '0.6rem',
        base: '1rem',
      },
      fontSizes: {
        xl: '42px',
        lg: '32px',
        md: '28px',
        base: '18px',
        sm: '14px',
      }
    }
  })

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


  return (
    <>
      <NextUIProvider  theme={theme}>
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