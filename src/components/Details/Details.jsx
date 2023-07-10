import {  useContext,useEffect, useState } from 'react';
import { useDebounce  } from 'use-debounce';
import { pokemonListContext } from '../../context/pokemonListContext';
import { Card, Grid, Text, Spacer, Button } from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


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
    <article>
        <Card css={{ mw: "400px" }}>
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h3 css={{ lineHeight: "$xs" }}>
                {pokemonDetails.name}
              </Text>
            </Grid>
            <Card.Image
                src={pokemonDetails?.sprites?.other['official-artwork']?.front_default}
                objectFit="cover"
                width="fit-content"
                alt={pokemonDetails.name}
              />
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>Peso</Text>
              <Spacer x={1} />
              <Text css={{ color: "$accents8" }}>{`${pokemonDetails.weight / 10} kg`}</Text>
              <Spacer x={2} />
              <Text h4 css={{ lineHeight: "$xs" }}>Altura</Text>
              <Spacer x={1} />
              <Text css={{ color: "$accents8" }}>{`${pokemonDetails.height / 10} mts`}</Text>
            </Grid>
            <Spacer y={1} />
            <Card.Divider />
          </Grid.Container>
          <Grid.Container gap={1}>
          {pokemonDetails.types && pokemonDetails.types?.map(type => (<Grid key={uuidv4()}>
              <Button flat color="secondary" auto>{type.type.name}</Button>
            </Grid> 
            ))
          }
          </Grid.Container>
        </Card>
    </article>
  );
};

export default Details;