import { useState } from 'react';
import ListaPokemon from './ListaPokemon';
import Search from './Search';


const Hero = () => {
  const [pokemonsData, setPokemonsData] = useState([]);

  return (
    <section className='hero_section'>
      <h1>Busca pokémons</h1>
      <Search setPokemonsData={setPokemonsData}/>
      <ListaPokemon pokemonsData={pokemonsData}/>
    </section>
  );
};

export default Hero;