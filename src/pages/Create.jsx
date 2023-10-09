import { useForm } from "react-hook-form";
import { useState, useContext } from 'react';
import { pokemonListContext } from '../context/pokemonListContext';
import ButtonAct from '../components/baseComponents/ButtonAct';


const defaultValues = {
  id: '',
  name: '',
  image: '',
  typeOne: '',
  typeTwo: '',
};

const Create = () => {
  const [inputValue, setInputValue] = useState({...defaultValues});
  const {addToListOfPokemons} = useContext(pokemonListContext);
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
      <section className='main__content'>
        <h1 className='animated'>Create a pokémon</h1>
        <form className='form' onSubmit={handleSubmit((data) => {
          data.message && <p>{data.message}</p>
          addToListOfPokemons({
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
          })} onChange={handleChange} placeholder='pokemon id' value={inputValue.id}/></label> 
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
          onChange={handleChange} placeholder='pokemon name' value={inputValue.name}/></label>
          {errors.name?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <label htmlFor="image" className='form_label'>Url image            
          <input type='url' name='image' id='image' className='form_input' {...register('image', {
             required: '*** required field ***',
            maxLength: {
              value: 200, 
              message: "must have a maximum of 50 characters"
            }  
          })}
          onChange={handleChange} placeholder='pokemon image' value={inputValue.image}/></label>
          {errors.name?.type === "required" && (
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
          onChange={handleChange} placeholder='pokemon typeOne' value={inputValue.typeOne}/></label>
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
          onChange={handleChange} placeholder='pokemon typeTwo' value={inputValue.typeTwo}/></label>
          {errors.typeTwo?.type === "required" && (
          <p role="alert">{errors.id?.message}</p>)}

          <ButtonAct value='Create'/>
        </form>
      </section>
    </>
  );
};


export default Create;