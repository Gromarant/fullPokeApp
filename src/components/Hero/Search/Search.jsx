import { Input, Button, Grid } from "@nextui-org/react";
import PropTypes from 'prop-types';
// import { useState } from 'react';
// import axios from 'axios';
// import { pokemons } from './SearchData';


const Search = (/*{setPokemons}*/) => {
  // const [inputValue, setInputValue] = useState('');
  // const [searchHistory, setSearchHistory] = useState([]);
  // const [searchTerm, setSearchTerm] = useState([]);
  
  // const handleSearch = (inputValue) => {
  //   pokemons.filter(pokemon => pokemon.name?.toLowercase().indexOf(inputValue) !== -1 )
  // };

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleClick = () => {
  //   setSearchTerm(inputValue)
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

  return (
  <>
  <form>  
    <Grid.Container gap={2}>
      <Grid>
        <Input
          rounded
          bordered
          label="Buscar"
          placeholder="Un pokemón"
          color="primary"
        />
      </Grid>
      <Grid>
        <Button color="gradient" auto>
          Buscar
        </Button>
      </Grid>
    </Grid.Container>
     
      {/* <input type='text' list='matchingOptions' value={inputValue} onChange={handleChange} />
       <datalist id='matchingOptions'>
         {data? data.map(match => <option value={match}/>) : <p>No se encontro pokemón</p>}
       </datalist> 
       <button onClick={handleClick}>Buscar</button> */}
  </form>
{/* 
    <section>
      {filterPokemons.map(pokemon => <p key={pokemon.name}>{pokemon.name}</p>)}
    </section> */}
  </>);
};

// Search.propTypes = {
//   setPokemons: PropTypes.func.isRequired
// }

export default Search;