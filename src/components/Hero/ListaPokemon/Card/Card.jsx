import PropTypes from 'prop-types';
import { Card as NextUiCard, Grid, Row, Text } from "@nextui-org/react";

const Card = ({data}) => {

  const list = [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    }
  ];
  
  return (
    <p>cacnea</p>
  //   <Grid.Container gap={2} justify="flex-start">
  //     {list.map(item => (
  //       <Grid xs={6} sm={3} key={item.name}>
  //         <NextUiCard isPressable>
  //           <NextUiCard.Body css={{ p: 0 }}>
  //             <NextUiCard.Image
  //               src={item.url}
  //               objectFit="cover"
  //               width="100%"
  //               height={140}
  //               alt={item.name}
  //             />
  //           </NextUiCard.Body>
  //           <NextUiCard.Footer css={{ justifyItems: "flex-start" }}>
  //             <Row wrap="wrap" justify="space-between" align="center">
  //               <Text b>{item.title}</Text>
  //               <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
  //                 {`id: ${item.name}`}
  //               </Text>
  //             </Row>
  //           </NextUiCard.Footer>
  //         </NextUiCard>
  //       </Grid>
  //     ))}
  //   </Grid.Container>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card;