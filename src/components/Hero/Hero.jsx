import { useState } from 'react';
import ListaPokemon from './ListaPokemon';
import Search from './Search';


const Hero = () => {
  const [data, setData] = useState([]);

  return (
    <section>
      <Search setPokemons={setData}/>
      <ListaPokemon pokemons={data}/>
    </section>
  );
};

export default Hero;