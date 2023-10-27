import PropTypes from 'prop-types';
import { useState } from 'react';
import { pokemons } from '../../Data_pokemon';
import ButtonAct from './ButtonAct';
import Input from './Input';

const Search_bar = ({setPokemonsData}) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  
  const filterResults = (searchInputValue) => searchInputValue && pokemons.results.filter(pokemon => pokemon.name?.toLowerCase().indexOf(searchInputValue) !== -1 );

  const handleInputChange = (event) => {
    if (searchInputValue.length === 0) {
      setPokemonsData([]);
    }
    setSearchInputValue(event.target.value);
  };

  const handleClick = () => {
    if (searchInputValue) {
      setPokemonsData( filterResults(searchInputValue) )
    }
    setSearchInputValue('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <>
      <form className='search_form' onSubmit={handleSubmit}>
        <Input className='input_search' id='search'
          clearable
          initialValue=""
          label="Pokemon name"
          type="test"
          placeholder="Enter a pókemon name"
          helperText=""
          onChange={handleInputChange}
        />
        <ButtonAct onPress={handleClick} value='Search'/>
      </form>
    </>
  );
};

Search_bar.propTypes = {
  setPokemonsData: PropTypes.func,
}

export default Search_bar;