import {  useContext,useEffect, useState } from 'react';
import { pokemonListContext } from '../context/pokemonListContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/baseComponents/Card';


const Details = () => {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const {addToListOfPokemons} = useContext(pokemonListContext);
  const { id } = useParams();


  const ListOfPokemonsHandle = (data) => {
    if (data) {
      addToListOfPokemons(data);
    }
  }

  useEffect(() => {

    try {
    
      if (id) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
              .then(response => {
                if (response) {
                  setPokemonDetails(response.data);

                  const formatedData = {
                    id: `${response.data.id}`,
                    name: response.data.name,
                    image: response.data?.sprites?.other['official-artwork']?.front_default,
                  }
                  ListOfPokemonsHandle(formatedData);
                }
              })
      }
    }
    catch(error) {
      console.error(error);
    }
  }, [id])


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