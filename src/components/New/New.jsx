import { useForm } from "react-hook-form";
import { useState, useContext } from 'react';
import { pokemonListContext } from '../../context/pokemonListContext';
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
      <section className='create__section'>
        <h1 className='animated'>Create a pokémon</h1>
        <form className='form' onSubmit={handleSubmit((data)=>{
          data.message && <p>{data.message}</p>
          addToPokemonList({
            ...data
          })
        })}>
          <h3 className='form__title'>New Pokémon data</h3>
          <label htmlFor="id" className='form_label'>Id
          <input type='number' name='id' id='id' autoComplete='off' className='form_input' {...register('id', { 
            required: '*** required field ***',
            minLength: {
              value: 1, 
              message: "must have at least 1 character"
            }, 
            maxLength:{
              value: 20, 
              message: "must have a maximum of 20 characters"
            },  
          })} onChange={handleChange} label='id' placeholder='pokemon id' value={inputValue.id}/></label> 
          {errors.id?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <label htmlFor="name" className='form_label'>Name            
          <input type='string' name='name' id='name' autoComplete='off' className='form_input' {...register('name', {
            required: '*** required field ***',
            minLength: {
              value: 3, 
              message: "must have at least 3 characters"
            }, 
            maxLength:{
              value: 20, 
              message: "must have a maximum of 20 characters"
            },  
          })}
          onChange={handleChange} label='name' placeholder='pokemon name' value={inputValue.name}/></label>
          {errors.name?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <label htmlFor="imageUrl" className='form_label'>Image url
          <input type='string' name='imageUrl' id='imageUrl' autoComplete='photo' className='form_input' {...register('imageUrl', {
            required: '*** required field ***',
            minLength: {
              value: 3, 
              message: "must have at least 3 characters"
            }
          })} onChange={handleChange} label='image url' placeholder='pokemon image' value={inputValue.image}/></label>
          {errors.id?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <label htmlFor="typeOne" className='form_label'>TypeOne
          <input type='select' name='typeOne' id='typeOne' autoComplete='off' className='form_input' {...register('typeOne', {
            required: '*** required field ***',
            minLength: {
              value: 3, 
              message: "must have at least 3 characters"
            }, 
            maxLength:{
              value: 20, 
              message: "must have a maximum of 20 characters"
            }, 
          })}
          onChange={handleChange} label='typeOne' placeholder='pokemon typeOne' value={inputValue.typeOne}/></label>
          {errors.typeOne?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <label htmlFor="typeTwo" className='form_label'>TypeTwo
          <input type='select' name='typeTwo' id='typeTwo' autoComplete='off' className='form_input' {...register('typeTwo', {
            minLength: {
              value: 5, 
              message: "must have at least 5 characters"
            }, 
            maxLength:{
              value: 20, 
              message: "must have a maximum of 20 characters"
            }, 
          })}
          onChange={handleChange} label='typeTwo' placeholder='pokemon typeTwo' value={inputValue.typeTwo}/></label>
          {errors.typeTwo?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <ButtonAct value='Create'/>
        </form>
      </section>
    </>
  );
};


export default Form;