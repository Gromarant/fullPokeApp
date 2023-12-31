import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card as NextUi_Card, Grid, Text} from "@nextui-org/react";
import { v4 as uuidv4 } from 'uuid';
import logo from "/logo2023.webp";



const Card = ({image, name, id, position, handleClick, toggled, stopflip, showDetails, weight, height, types, typeOne, typeTwo, owner_id, detail_id}) => {
  return (
    <>
      { handleClick && image && name && 
        <section className={`memory__card ${toggled ? "toggled" : ""}`}>
          <article className='card card__home'>
            <NextUi_Card className='card__home_body'>
              <NextUi_Card.Header>
                <Text className='card__name card__home_name'>{name}</Text>
              </NextUi_Card.Header>
              <NextUi_Card.Body>
                <NextUi_Card.Image className='card__image' src={image} alt={name}/>
              </NextUi_Card.Body>
            </NextUi_Card>
          </article>
          <article className="card__back" onClick={() => !stopflip && handleClick(position)}><img src={logo} alt="Gromarant logo" /></article>
        </section>
      }

      { image && name && id &&
        <article className='card card__searched'>
          <NextUi_Card className='card__searched_body'>
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
            <NextUi_Card className='card__created_body'>
              <NextUi_Card.Body>
                <Grid>
                  <Text className='card__created_name'>{name}</Text>
                  <Text><span className='card__title'>Id: </span>{owner_id}</Text>
                </Grid>
                <NextUi_Card.Image className='card__image' src={image} alt={name}/>
              </NextUi_Card.Body>
              <NextUi_Card.Footer >
                <Grid className='card__button'>
                  <Text className='card__pokemonType' key={uuidv4()}>{typeOne}</Text>
                  { typeTwo && <Text className='card__pokemonType' key={uuidv4()}>{typeTwo}</Text>}   
                </Grid>
              </NextUi_Card.Footer>
            </NextUi_Card>
          </Link>
        </article>
      }

      { weight && height && types && image && name &&
        <article className='card card__detailed'>
          <NextUi_Card className='card__detailed_body'>
            <NextUi_Card.Header>
              <Text className='card__detailed_name'>{name}</Text>
            </NextUi_Card.Header>
            <NextUi_Card.Body >
              <NextUi_Card.Image className='card__detailed_image' src={image} alt={name}/>
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

      { detail_id && typeOne && name && image && 
        <article className='card card__created_detailed'>
          <NextUi_Card className='card__createdDetailed_body'>
            <NextUi_Card.Header>
              <Text className='card__detailed_name'>{name}</Text>
              <section className='card__data'>
                <Text className='card__title'>id number:</Text>
                <Text>{detail_id}</Text>
              </section>
            </NextUi_Card.Header>
            <NextUi_Card.Body >
              <NextUi_Card.Image className='card__detailed_image' src={image} alt={name}/>
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
  owner_id: PropTypes.string,
  detail_id: PropTypes.string,
  typeOne: PropTypes.string,
  typeTwo: PropTypes.string,
  id: PropTypes.string,
  weight: PropTypes.number,
  height: PropTypes.number,
  position: PropTypes.number,
  stopflip: PropTypes.bool,
  toggled: PropTypes.bool,
  types: PropTypes.array,
  pokemon: PropTypes.object,
  showDetails: PropTypes.func,
  handleSelectedCards: PropTypes.func,
}

export default Card;