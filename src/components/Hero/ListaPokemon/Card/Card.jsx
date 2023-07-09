import PropTypes from 'prop-types';
import { Card as NextUiCard, Grid, Row } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const Card = ({id, name, image}) => {

  return (
    <>
    <Grid.Container gap={2} justify="flex-start">
        <Grid xs={6} sm={3}>
          <NextUiCard isPressable>
            <NextUiCard.Body css={{ p: 0 }}>
              <NextUiCard.Image
                src={image? image : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                objectFit="cover"
                width="fit-content"
                alt={name}
              />
            </NextUiCard.Body>
            <NextUiCard.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center" color=''>
              <Link
                to={`/pokemon/${id}`}
              >{name}</Link>
              </Row>
            </NextUiCard.Footer>
          </NextUiCard>
        </Grid>
    </Grid.Container>
  </>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
}

export default Card;