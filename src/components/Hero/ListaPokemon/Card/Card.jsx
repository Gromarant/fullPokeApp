import PropTypes from 'prop-types';

const Card = ({data}) => {

  return (
    <>
      <article className='card'>
        <img src={data.url} alt={data.name}/>
        <h2>{data.name}</h2>
        <p><span>{data.email}</span></p>
        {data.age? <p>Edad: <span>{data.age}</span></p> : <p><span>{data.age}</span></p>}
      </article>
    </>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card;