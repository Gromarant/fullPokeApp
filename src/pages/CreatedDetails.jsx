import { useContext } from 'react';
import { createdPokemonContext } from '../context/createdPokemonContext';
import Card from '../components/baseComponents/Card';


function CreatedDetails() {
  const {createdPokemon} = useContext(createdPokemonContext);


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