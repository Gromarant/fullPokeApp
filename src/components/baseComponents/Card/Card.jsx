import PropTypes from 'prop-types';
import { Card as NextUiCard, Row } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const Card = ({id, name, image}) => {


  return (
    <>
      <NextUiCard isPressable>
        <Link to={`/pokemon/${id}`}>
          <NextUiCard.Body >
            <NextUiCard.Image
              src={image}
              alt={name}/>
          </NextUiCard.Body>
        </Link>
        <NextUiCard.Footer >
          <Row>
          <Link
            to={`/pokemon/${id}`}
          >{name}</Link>
          </Row>
        </NextUiCard.Footer>
      </NextUiCard>
  </>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
}

export default Card;