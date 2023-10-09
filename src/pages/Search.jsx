import { useState } from 'react';
import ListaPokemon from '../components/baseComponents/Pokemon_list';
import Search_bar from '../components/baseComponents/Search_bar';


const Search = () => {
  const [pokemonsData, setPokemonsData] = useState([]);

  return (
    <section className='main__content'>
      <h1 className='animated'>Search pokémons</h1>
      <Search_bar setPokemonsData={setPokemonsData}/>
      <ListaPokemon pokemonsData={pokemonsData}/>
    </section>
  );
};

export default Search;