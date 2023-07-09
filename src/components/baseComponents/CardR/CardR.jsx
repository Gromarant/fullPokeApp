import PropTypes from 'prop-types';
import { Card as NextUiCard, Grid, Row, Link } from "@nextui-org/react";

const CardR = ({id, name}) => {

  return (
    <>
    <Grid.Container gap={2} justify="flex-start">
        <Grid xs={6} sm={3}>
          <NextUiCard isPressable>
            <NextUiCard.Body css={{ p: 0 }}>
              <NextUiCard.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                objectFit="cover"
                width="fit-content"
                alt={name}
              />
            </NextUiCard.Body>
            <NextUiCard.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center" color=''>
              <Link
                href={`/pokemon/${id}`}
              >{name}</Link>
              </Row>
            </NextUiCard.Footer>
          </NextUiCard>
        </Grid>
    </Grid.Container>
  </>
  );
};

CardR.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}

export default CardR;
