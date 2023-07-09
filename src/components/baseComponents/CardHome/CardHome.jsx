import PropTypes from 'prop-types';
import { Card, Col, Text, green } from "@nextui-org/react";

const CardHome = ({id, name}) => {
  return (
    <Card>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, textAlign: "right" }}>
        <Col>
          <Text size={18} weight="bold" transform="uppercase">
            {name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        objectFit="cover"
        width="fit-content"
        alt={name}
      />
  </Card>
  );
};

CardHome.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}


export default CardHome;
