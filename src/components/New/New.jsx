import { useState, useContext } from 'react';

import PropTypes from 'prop-types';

const clearForm = {
  name: "",
  email: "",
  url: "",
  age: ""
};

const Form = ({ setData }) => {
  const [inputValue, setInputValue] = useState({...clearForm});

  const handleChange = (e) => {

    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    setData(inputValue);
    setInputValue({...clearForm})
  };

  return (
    <>
      <form className='form'>
        <label htmlFor="name" className='placeholder'>Name: 
          <input className='input_Container' id='name' type="text" name="name" value={inputValue.name} onChange={handleChange} placeholder='enter your name' />
        </label><br />

        <label htmlFor="email" className='placeholder'>Email: 
          <input className='input_Container' id='email' type="email" name="email" value={inputValue.email} onChange={handleChange} placeholder='Enter your email' />
        </label><br />

        <label htmlFor="url" className='placeholder'>Image url: 
          <input className='input_Container' id='url' type="text" name="url"value={inputValue.url} onChange={handleChange} placeholder='Enter image url' />
        </label><br />

        <label htmlFor="age" className='placeholder'>Edad: 
          <input className='input_Container' id='age' type="number" name="age" value={inputValue.age} onChange={handleChange} placeholder='Enter your age' />
        </label><br />
        <button className='submit' onClick={handleClick}>Enviar</button>
      </form>
    </>
  );
};

Form.propTypes  = {
  setData: PropTypes.func,
}

export default Form;