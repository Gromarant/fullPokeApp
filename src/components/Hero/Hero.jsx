import { useState } from 'react';
import ListaPokemon from './ListaPokemon';
import Search from './Search';


const Hero = () => {
  const [pokemonsData, setPokemonsData] = useState([]);

  return (
    <section>
      <Search setPokemonsData={setPokemonsData}/>
      <ListaPokemon pokemonsData={pokemonsData}/>
    </section>
  );
};

export default Hero;