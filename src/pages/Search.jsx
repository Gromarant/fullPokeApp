import { useState } from 'react';
import ListaPokemon from '../components/baseComponents/Pokemon_list';
import Search_bar from '../components/baseComponents/Search_bar';
import Scroll_btn from '../components/baseComponents/Scroll_btn';


const Search = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [isVisibile, setIsVisibile] = useState(false);

  const handleVisibility = () => window.scrollY >= 50 ? setIsVisibile(true) : setIsVisibile(false);
  window.addEventListener('scroll', handleVisibility);


  return (
    <section className='main__content'>
      <h1 className='animated'>Search pokémons</h1>
      <Search_bar setPokemonsData={setPokemonsData}/>
      <ListaPokemon pokemonsData={pokemonsData}/>
      <Scroll_btn alt='button to scroll up' visibility={isVisibile} action={'scroll-up'}/>
    </section>
  );
};

export default Search;