import {  useContext,useEffect, useState } from 'react';
import { useDebounce  } from 'use-debounce';
import { pokemonListContext } from '../context/pokemonListContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/baseComponents/Card';


const Details = () => {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const {addToPokemonList} = useContext(pokemonListContext);
  const { id } = useParams();
  const [value] = useDebounce(id, 1500);




  const pokemonListHandler = (data) => {
    if (data) {
      addToPokemonList(data);
    }
  }

  useEffect(() => {

    try {
    
      if (value) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
              .then(response => {
                if (response) {
                  setPokemonDetails(response.data);

                  const formatedData = {
                    id: response.data.id,
                    name: response.data.name,
                    image: response.data?.sprites?.other['official-artwork']?.front_default,
                  }
                  pokemonListHandler(formatedData);
                }
              })
      }
    }
    catch(error) {
      console.error(error);
    }
  }, [value])


  return ( 
    <>
      <section className='main__content'>
        <h1 className='animated'>Pokémon details</h1>
        <Card 
          image={pokemonDetails?.sprites?.other['official-artwork']?.front_default} 
          name={pokemonDetails.name} 
          weight={pokemonDetails.weight} 
          height={pokemonDetails.height} 
          types={pokemonDetails.types}/>
      </section>
    </>
  );
};

export default Details;