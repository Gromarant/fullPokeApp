import { useContext } from 'react';
import { createdPokemonContext } from '../context/createdPokemonContext';
import Card from '../components/baseComponents/Card';

function CreatedDetails() {
  // const [pokemonCreatedDetails, setPokemonCreatedDetails] = useState({});
  const {createdPokemon} = useContext(createdPokemonContext);

  console.log('createdPokemon: ', createdPokemon);
  
  // useEffect(() => {
  //   if (createdPokemon) {
  //     setPokemonCreatedDetails(createdPokemon)
  //   }
  // }, [createdPokemon])
  
  return (
    <>
      <section className='main__content'>
        <h1 className='animated'>Created Pokémon details</h1>
        { createdPokemon &&
          <Card 
            image={createdPokemon.image} 
            name={createdPokemon.name} 
            owner_id={createdPokemon.owner_id} 
            typeOne={createdPokemon.typeOne} 
            typeTwo={createdPokemon.typeTwo}/>
        }
      </section>
    </>
  )
}

export default CreatedDetails