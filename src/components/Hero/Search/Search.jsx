import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { pokemons } from './SearchData';


const Search = ({setPokemons}) => {
  const [inputValue, setInputValue] = useState('');
  // const [searchHistory, setSearchHistory] = useState([]);
  // const [searchTerm, setSearchTerm] = useState([]);
  
  // const handleSearch = (inputValue) => {
  //   console.log(pokemons.filter(pokemon => pokemon.name?.toLowercase().indexOf(inputValue) !== -1 ))
  // };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    // handleSearch(inputValue)
  };

  // const handleClick = () => {
  //   // setSearchTerm(inputValue)
  // };

  // useEffect(() => {

  //   try {

  //     if (searchTerm) {
  //       axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
  //             .then(response => {
  //               if (response) {
  //                 // setSearchHistory(...searchHistory, response.data.results)
  //                 console.log("Search", response.data.results);
  //               }
  //             })
  //     }
  //   }
  //   catch(error) {
  //     console.error(error);
  //   }
  // }, [searchTerm])

  const filterPokemons = pokemons.results.filter(pokemon => pokemon.name?.toLowerCase().indexOf(inputValue) !== -1 )
  return (
    <>
     <form>
      <input type='text' list='matchingOptions' value={inputValue} onChange={handleChange} />
       {/* <datalist id='matchingOptions'>
         {data? data.map(match => <option value={match}/>) : <p>No se encontro pokemón</p>}
       </datalist> */}
       {/* <button onClick={handleClick}>Buscar</button> */}
     </form>

    <section>
      {filterPokemons.map(pokemon => <p key={pokemon.name}>{pokemon.name}</p>)}
    </section>
  </>);
};

Search.propTypes = {
  setPokemons: PropTypes.func.isRequired
}

export default Search;