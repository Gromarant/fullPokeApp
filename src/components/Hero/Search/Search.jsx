import { Input, Button, Grid } from "@nextui-org/react";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { pokemons } from './SearchData';


const Search = ({setPokemonsData}) => {
  const [inputValue, setInputValue] = useState('');
  
  
  const filterResults = (inputValue) => inputValue && pokemons.results.filter(pokemon => pokemon.name?.toLowerCase().indexOf(inputValue) !== -1 );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue) {
      setPokemonsData( filterResults(inputValue) )
    }
    setInputValue('')
  };

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
            onChange={handleInputChange}
          />
        </Grid>
        <Grid>
          <Button color="gradient" auto onPress={handleClick}>
            Buscar
          </Button>
        </Grid>
      </Grid.Container> 
    </form>
  </>
  );
};

Search.propTypes = {
  setPokemonsData: PropTypes.func,
}

export default Search;