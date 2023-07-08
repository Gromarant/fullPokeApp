import { useEffect, useState } from 'react';
import { Card, Grid, Text, Link, Spacer, Button } from "@nextui-org/react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [pokemonDetails, setPokemonDetails] = useState({});

  const { id } = useParams();

  useEffect(() => {

    try {

      if (id) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
              .then(response => {
                if (response) {
                  setPokemonDetails(response.data)
                }
              })
      }
    }
    catch(error) {
      console.error(error);
    }
  }, [id])


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
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`}
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
        {pokemonDetails.types && pokemonDetails.types?.map(type => (<Grid key={pokemonDetails.id}>
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