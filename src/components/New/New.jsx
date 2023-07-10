import { useForm } from "react-hook-form";
import { useState, useContext } from 'react';
import { pokemonListContext } from '../../context/pokemonListContext';
import Input from '../baseComponents/Input';
import ButtonAct from '../baseComponents/ButtonAct';


const defaultValues = {
  id: '',
  name: '',
  image: '',
  typeOne: '',
  typeTwo: '',
};

const Form = () => {
  const [inputValue, setInputValue] = useState({...defaultValues});
  const {addToPokemonList} = useContext(pokemonListContext);
  const {
    register,
     handleSubmit,
      formState: { errors },
  } =useForm({ defaultValues });

  
  const handleChange = (e) => {

    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    })
  }


  return (
    <> 
      <section>
        <h1>Crea un pokémon</h1>
        <form className='form' onSubmit={handleSubmit((data)=>{
          data.message && <p>{data.message}</p>
          addToPokemonList({
            ...data
          })
        })}>
          <Input className='fullInput' type='number' {...register('id', { 
            required: 'campo obligatorio',
            minLength: {
              value: 1, 
              message: "debe tener un al menos un caracter"
            }, 
            maxLength:{
              value: 20, 
              message: "debe tener máximo 20 caracteres"
            },  
          })} onChange={handleChange} label='id' placeholder='pokemon id' value={inputValue.id}/>
          {errors.id?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <Input type='string' {...register('name', {
            required: 'campo obligatorio',
            minLength: {
              value: 3, 
              message: "debe tener un al menos 5 caracteres"
            }, 
            maxLength:{
              value: 20, 
              message: "debe tener máximo 20 caracteres"
            },  
          })}
          onChange={handleChange} label='name' placeholder='pokemon name' value={inputValue.name}/>
          {errors.name?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <Input type='string' {...register('image', {
            required: 'campo obligatorio',
            minLength: {
              value: 3, 
              message: "debe tener un al menos 5 caracteres"
            }
          })} onChange={handleChange} label='image' placeholder='pokemon image' value={inputValue.image}/>
          {errors.id?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <Input type='select' {...register('typeOne', {
            required: 'campo obligatorio',
            minLength: {
              value: 3, 
              message: "debe tener un al menos un caracter"
            }, 
            maxLength:{
              value: 20, 
              message: "debe tener máximo 20 caracteres"
            }, 
          })}
          onChange={handleChange} label='typeOne' placeholder='pokemon typeOne' value={inputValue.typeOne}/>
          {errors.typeOne?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <Input type='select' {...register('typeTwo', {
            minLength: {
              value: 5, 
              message: "debe tener un al menos un caracter"
            }, 
            maxLength:{
              value: 20, 
              message: "debe tener máximo 20 caracteres"
            }, 
          })}
          onChange={handleChange} label='typeTwo' placeholder='pokemon typeTwo' value={inputValue.typeTwo}/>
          {errors.typeTwo?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <ButtonAct value='Enviar'/>
        </form>
      </section>
    </>
  );
};


export default Form;