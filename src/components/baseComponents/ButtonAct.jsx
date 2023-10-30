import PropTypes from 'prop-types';

const ButtonAct = ({value}) => {
  return (
    <input className='btn action__btn' type='submit' value={value}></input>
  );
};

ButtonAct.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
}
export default ButtonAct;
