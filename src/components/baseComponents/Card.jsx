import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card as NextUi_Card, Grid, Text} from "@nextui-org/react";
import { v4 as uuidv4 } from 'uuid';



const Card = ({image, name, id, handleClickEvent, showDetails, weight, height, types, typeOne, typeTwo, owner_id}) => {

  return (
    <>
      { image && name && handleClickEvent &&
        <article onClick={handleClickEvent} className='card card__home'>
          <NextUi_Card className='card__home_body'>
            <NextUi_Card.Header>
              <Text className='card__name card__home_name'>{name}</Text>
            </NextUi_Card.Header>
            <NextUi_Card.Body>
              <NextUi_Card.Image className='card__image' src={image} alt={name}/>
            </NextUi_Card.Body>
          </NextUi_Card>
        </article>
      }

      { image && name && id &&
        <article className='card card__searched'>
          <NextUi_Card>
            <Link to={`/pokemon/${id}`}>
              <NextUi_Card.Body>
                <NextUi_Card.Image className='card__image' src={image} alt={name}/>
              </NextUi_Card.Body>
              <NextUi_Card.Footer >
                <Text className='card__name card__searched_name'>{name}</Text>
              </NextUi_Card.Footer>
            </Link>
          </NextUi_Card>
        </article>
      }

      { image && name && owner_id && showDetails && typeOne &&
        <article className='card card__created' onClick={showDetails}>
          <Link to={`/created/${owner_id}`}>
            <NextUi_Card>
              <NextUi_Card.Header>
                <Text className='card__owner_id card__home_owner_id'>{owner_id}</Text>
              </NextUi_Card.Header>
              <NextUi_Card.Body>
                <NextUi_Card.Image className='card__image' src={image} alt={name}/>
                <Grid className='card__button'>
                  <Text className='card__pokemonType' key={uuidv4()}>{typeOne}</Text>
                  { typeTwo && <Text className='card__pokemonType' key={uuidv4()}>{typeTwo}</Text>}   
                </Grid>
              </NextUi_Card.Body>
              <NextUi_Card.Footer >
                <Text className='card__name card__searched_name'>{name}</Text>
              </NextUi_Card.Footer>
            </NextUi_Card>
          </Link>
        </article>
      }

      { weight && height && types && image && name &&
        <article className='card card__detailed'>
          <NextUi_Card>
            <NextUi_Card.Header>
              <Text className='card__name card__detailed_name'>{name}</Text>
            </NextUi_Card.Header>
            <NextUi_Card.Body >
              <NextUi_Card.Image className='card__image' src={image} alt={name}/>
            </NextUi_Card.Body>
            <Grid className='card__data_section'>
              <section className='card__data'>
                <Text className='card__title'>Weight:</Text>
                <Text>{`${height / 10} mts`}</Text>
              </section>
              <section className='card__data'>
                <Text className='card__title'>Height:</Text>
                <Text>{`${height / 10} mts`}</Text>
              </section>
            </Grid>
            <NextUi_Card.Divider />
            <Grid className='card__button'>
            {types && types?.map(type => (
                  <Text className='card__pokemonType' key={uuidv4()}>{type.type.name}</Text>
              ))
            }
            </Grid> 
          </NextUi_Card>
        </article>
      }

      { owner_id && typeOne && name && image && 
        <article className='card card__detailed'>
          <NextUi_Card>
            <NextUi_Card.Header>
              <Text className='card__name card__detailed_name'>{name}</Text>
            <Grid className='card__data_section'>
              <section className='card__data'>
                <Text className='card__title'>id number:</Text>
                <Text>{owner_id}</Text>
              </section>
            </Grid>
            </NextUi_Card.Header>
            <NextUi_Card.Body >
              <NextUi_Card.Image className='card__image' src={image} alt={name}/>
            </NextUi_Card.Body>
            <NextUi_Card.Divider />
            <Grid className='card__button'>
              <Text className='card__pokemonType' key={uuidv4()}>{typeOne}</Text>
              { typeTwo && <Text className='card__pokemonType' key={uuidv4()}>{typeTwo}</Text>}
            </Grid> 
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
  showDetails: PropTypes.func,
  id: PropTypes.string,
  owner_id: PropTypes.string,
  weight: PropTypes.number,
  height: PropTypes.number,
  types: PropTypes.array,
  typeOne: PropTypes.string,
  typeTwo: PropTypes.string,
}

export default Card;