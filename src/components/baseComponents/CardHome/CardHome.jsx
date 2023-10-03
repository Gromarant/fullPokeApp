import PropTypes from 'prop-types';
import './CardHome.css';
import { Card, Col, Text } from "@nextui-org/react";

const CardHome = ({image, name, handleClickEvent}) => {

  return (
    <article onClick={handleClickEvent}>
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
    </article>
  );
};

CardHome.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  handleClickEvent: PropTypes.func,
}


export default CardHome;