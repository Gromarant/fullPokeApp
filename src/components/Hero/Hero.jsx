import { useState } from 'react';
import { Text } from "@nextui-org/react";
import ListaPokemon from './ListaPokemon';
import Search from './Search';


const Hero = () => {
  const [pokemonsData, setPokemonsData] = useState([]);

  return (
    <section>
      <Text h1 size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 90%",
        }}
        weight="bold" 
      >Pokemons Search</Text>
      <Search setPokemonsData={setPokemonsData}/>
      <ListaPokemon pokemonsData={pokemonsData}/>
    </section>
  );
};

export default Hero;