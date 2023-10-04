import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card as NextUi_Card, Grid, Text, Spacer, Button } from "@nextui-org/react";
import { v4 as uuidv4 } from 'uuid';



const Card = ({image, name, handleClickEvent, id, weight, height, types}) => {

  return (
    <>
      { image && name && handleClickEvent &&
        <article onClick={handleClickEvent} className='card__home'>
          <NextUi_Card>
            <NextUi_Card.Header>
              <Text className='card__home_name'>{name}</Text>
            </NextUi_Card.Header>
            <NextUi_Card.Body >
              <NextUi_Card.Image src={image} alt={name}/>
            </NextUi_Card.Body>
          </NextUi_Card>
        </article>
      }

      { image && name && id &&
        <NextUi_Card>
          <Link to={`/pokemon/${id}`}>
            <NextUi_Card.Body >
              <NextUi_Card.Image src={image} alt={name}/>
            </NextUi_Card.Body>
            <NextUi_Card.Footer >
              <Text>{name}</Text>
            </NextUi_Card.Footer>
          </Link>
        </NextUi_Card>
      }

      { weight && height && types  && image && name &&
        <article>
          <NextUi_Card>
            <NextUi_Card.Header>
              <Text>{name}</Text>
            </NextUi_Card.Header>
            <NextUi_Card.Body >
              <NextUi_Card.Image src={image} alt={name}/>
            </NextUi_Card.Body>
            <Grid>
              <Text>Weight:</Text>
              <Spacer/>
              <Text>{`${height / 10} mts`}</Text>
              <Spacer x={2} />
              <Text>Height:</Text>
              <Spacer/>
              <Text>{`${height / 10} mts`}</Text>
            </Grid>
            <Spacer/>
            <NextUi_Card.Divider />
          {types && types?.map(type => (
              <Grid key={uuidv4()}>
                <Button flat color="secondary" auto>{type.type.name}</Button>
              </Grid> 
            ))
          }
        </NextUi_Card>
        </article>
      }
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  handleClickEvent: PropTypes.func,
  id: PropTypes.number,
  weight: PropTypes.number,
  height: PropTypes.number,
  types: PropTypes.array,
}

export default Card;