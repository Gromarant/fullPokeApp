import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Card from "./Card";
import {pokemons} from '../../Data_pokemon';

function MemoryGame() {
  const [cardsArray, setCardsArray] = useState([]);
  const [moves, setMoves] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [stopFlip, setStopFlip] = useState(false);
  const [won, setWon] = useState(0);
  

  const pokemonsData = pokemons.results;
  let pokeArray = [];
  const sortRandomly = (arr) => arr.sort(() => 0.5 - Math.random());
  let newPokemon = null;
  
  const getRandomPokemon = () => pokemonsData[Math.floor(Math.random() * 10264)];
  const pokemonlist = () => {
    
    while (pokeArray.length < 12) {
      newPokemon = getRandomPokemon();
      if (newPokemon) {
        if (!pokeArray.includes(newPokemon))
        pokeArray = [...pokeArray, newPokemon, {...newPokemon}];
    }
    newPokemon = null;
    }
  };
    pokemonlist();

  function NewGame() {
      setTimeout(() => {
        setCardsArray([...sortRandomly(pokeArray)]);
        setMoves(0);
        setFirstCard(null);
        setSecondCard(null);
        setWon(0);
      }, 500);
  }

  //this function helps in storing the firstCard and secondCard value
  function handleClick(position) {
    if (firstCard !== null && firstCard.position !== position) {
      setSecondCard(cardsArray[position]);
    } else {
      cardsArray[position].position = position;
      setFirstCard(cardsArray[position]);
    }
  }

  useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true);
      if (firstCard.id === secondCard.id) {
        setCardsArray((currentArr) => {
          return currentArr.map((pokemon) => {
            if (pokemon.id === firstCard.id) {
              return { ...pokemon, matched: true };
            } else {
              return pokemon;
            }
          });
        });
        setWon((count) => count + 1);
        removeSelection();
      } else {
          setTimeout(() => {
              removeSelection();
          }, 1000);
      } 
    }
  }, [firstCard, secondCard]);

  function removeSelection() {
      setFirstCard(null);
      setSecondCard(null);
      setStopFlip(false);
      setMoves((count) => count + 1);
  }

  const showAlert = () => {
    Swal.fire({
      title: `You Won in ${moves} moves`,
      imageUrl: 'https://pyxis.nymag.com/v1/imgs/49a/3d9/8f4f4657c10087b7238aab5fc39eeb2c88-pokemon.1x.rsquare.w1400.jpg',
      imageAlt: 'success image',
      showCancelButton: true,
      confirmButtonText: 'New Game',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        confirmButtonColor: '#2359be',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        NewGame();
        Swal.fire('New Game displayed!', '', 'success')
      }
    })
  }

  useEffect(() => {
      NewGame();
  }, []);

  return (
    <section className="main__content">
      <article className="comments">Moves : {moves}</article>
      { won === 6 && showAlert()}

      <section className="board">
        { cardsArray.length > 0 &&
          cardsArray?.map((pokemon, index) => (
            <Card
              key={index}
              position={index}
              handleClick={handleClick}
              toggled={
                pokemon === firstCard ||
                pokemon === secondCard ||
                pokemon.matched === true
              }
              stopflip={stopFlip}
              image={pokemon.image}
              name={pokemon.name}
              />
              ))
            }
      </section>
      <button className="button" onClick={NewGame}>New Game</button>
    </section>
  );
}

export default MemoryGame;