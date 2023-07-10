import PropTypes from 'prop-types';
import './CardHome.css';
import { Card, Col, Text } from "@nextui-org/react";

const CardHome = ({image, name}) => {

  return (
    <Card className='cardHome'>
      <Card.Header>
        <Col>
          <Text size={18} weight="bold" transform="uppercase">
            {name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={image}
        objectFit="cover"
        width="fit-content"
        alt={name}
      />
    </Card>
  );
};

CardHome.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}


export default CardHome;