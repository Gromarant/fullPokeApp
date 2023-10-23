import { useState, useEffect } from "react";
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
      }, 1200);
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

  useEffect(() => {
      NewGame();
  }, []);

  return (
    <section className="main__content">
      <h1 className="header">Memory Game</h1>

      { won !== 6 ? (
        <article className="comments">Moves : {moves}</article>
      ) : (
        <article className="comments">
          ???????? You Won in {moves} moves ????????
        </article>
      )}

      <button className="button" onClick={NewGame}>New Game</button>

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
    </section>
  );
}

export default MemoryGame;