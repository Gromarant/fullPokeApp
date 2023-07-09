import PropTypes from 'prop-types';
// import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useContext } from 'react';
import { pokemonListContext } from '../../context/pokemonListContext';
import Input from '../baseComponents/Input';
import ButtonAct from '../baseComponents/ButtonAct';


const clearForm = {
  id: '',
  name: '',
  image: '',
  typeOne: '',
  typeTwo: '',
};

const Form = () => {
  const [inputValue, setInputValue] = useState({...clearForm});
  const {setPokemonList} = useContext(pokemonListContext);

  const handleChange = (e) => {

    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    setPokemonList(inputValue)
    setInputValue({...clearForm})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <Input onChange={handleChange} label='id' placeholder='pokemon id' value={`pokemon ${inputValue.id}`}/>
        <Input onChange={handleChange} label='name' placeholder='pokemon name' value={`pokemon ${inputValue.name}`}/>
        <Input onChange={handleChange} label='image' placeholder='pokemon image' value={`pokemon ${inputValue.image}`}/>
        <Input onChange={handleChange} label='typeOne' placeholder='pokemon typeOne' value={`pokemon ${inputValue.typeOne}`}/>
        <Input onChange={handleChange} label='typeTwo' placeholder='pokemon typeTwo' value={`pokemon ${inputValue.typeTwo}`}/>
        <ButtonAct onClick={handleClick} value='Enviar' />
      </form>
    </>
  );
};

Form.propTypes  = {
  setData: PropTypes.func,
}

export default Form;