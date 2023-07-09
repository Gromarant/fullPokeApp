import { useForm } from "react-hook-form";
import { useState, useContext } from 'react';
import { pokemonListContext } from '../../context/pokemonListContext';
import Input from '../baseComponents/Input';
import ButtonAct from '../baseComponents/ButtonAct';


// const clearForm = {
//   id: '',
//   name: '',
//   image: '',
//   typeOne: '',
//   typeTwo: '',
// };

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const {addToPokemonList} = useContext(pokemonListContext);
  const {
    register,
     handleSubmit,
      formState: { errors },
  } =useForm({
    defaultValues: {
      id: '',
      name: '',
      image: '',
      typeOne: '',
      typeTwo: '',
    }});

  console.log(errors);

  
  const handleChange = (e) => {

    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    })
  }
  
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   addToPokemonList(inputValue)
  //   setInputValue({...clearForm})
  //   console.log(merwe);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleClick();
  // };

  // id => number
  // name => text
  // image => text
  // typeOne => select
  // typeTwo => select

  // Las condiciones de error y validación serán las siguientes:

  // id => required
  // name => required minlenght = 3
  // image => required
  // typeOne => select required
  // typeTwo => select


  return (
    <> 
      <form className='form' onSubmit={handleSubmit((data)=>{
        data.message && <p>{data.message}</p>
        addToPokemonList({
          ...data,
          id: String(data.id),
        })
      })}>
        <Input className='fullInput' {...register('id', { 
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

        <Input {...register('name', {
          required: 'campo obligatorio',
          minLength: {
            value: 5, 
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

        {/* <Input {...register('image', {
          required: 'campo obligatorio',
          minLength: {
            value: , 
            message: "debe tener un al menos 5 caracteres"
          }, 
          maxLength:{
            value: 20, 
            message: "debe tener máximo 20 caracteres"
          },  
        })} onChange={handleChange} label='image' placeholder='pokemon image' value={inputValue.image}/>
        {errors.id?.type === "required" && (
        <p role="alert">{errors.id?.message}</p>)} */}

        <Input {...register('typeOne', {
          required: 'campo obligatorio',
          minLength: {
            value: 5, 
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

        <Input {...register('typeTwo', {
          required: 'campo obligatorio',
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

        <ButtonAct value='Enviar' />
      </form>
    </>
  );
};


export default Form;