import { useContext } from 'react';
import Card from '../components/baseComponents/Card';
import { pokemonContext } from '../context/pokemonContext';


function CreatedDetails() {
  const {createdPokemon} = useContext(pokemonContext);


  return (
    <>
      <section className='main__content'>
        <h1 className='animated'>Created Pokémon details</h1>
        { createdPokemon &&
          <Card 
            image={createdPokemon.image} 
            name={createdPokemon.name} 
            detail_id={createdPokemon.owner_id} 
            typeOne={createdPokemon.typeOne} 
            typeTwo={createdPokemon.typeTwo}/>
        }
      </section>
    </>
  )
}

export default CreatedDetails