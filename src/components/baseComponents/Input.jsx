import PropTypes from 'prop-types';
import { GoXCircleFill } from "react-icons/go";

const Input = ({id, name, label, type, placeholder, onChange, value, register={}, clear}) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <article className='input__wrapper'>
        <input 
          type={type} 
          name={name} 
          id={id} 
          autoComplete='off' 
          register={register}
          onChange={onChange} 
          value={value}
          placeholder={placeholder}/>
          { value &&
            <button className='clear__btn' type='button' onClick={clear}>
              <GoXCircleFill/>
            </button>
          }
      </article>
    </>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  register: PropTypes.object,
  onChange: PropTypes.func,
  clear: PropTypes.func,
}

export default Input;