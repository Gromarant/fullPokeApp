import { useForm } from "react-hook-form";
import { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { pokemonCreatedListContext } from '../context/pokemonCreatedListContext';
import { createdPokemonContext } from '../context/createdPokemonContext';
import ButtonAct from '../components/baseComponents/ButtonAct';


const defaultValues = {
  owner_id: '',
  name: '',
  image: '',
  typeOne: '',
  typeTwo: '',
};

const Create = () => {
  const [inputValue, setInputValue] = useState({...defaultValues});
  const {addToListOfCreatedPokemons} = useContext(pokemonCreatedListContext);
  const {setCreatedPokemon} = useContext(createdPokemonContext);
  const {
    register,
     handleSubmit,
      formState: { errors },
  } =useForm({ defaultValues });
  const navigate = useNavigate();


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
          addToListOfCreatedPokemons({...data})
          setCreatedPokemon({...data})
          navigate(`/created/${data.owner_id}`);
          setInputValue(defaultValues)
        })}>
          <h3 className='form__title'>New Pokémon data</h3>
          <label htmlFor="owner_id" className='form_label'>Id
          <input type='string' name='owner_id' id='owner_id' autoComplete='off' className='form_input' {...register('owner_id', {
            required: 'ID field is required',
            minLength: {
              value: 1,
              message: "must have at least 1 character"
            },
            maxLength:{
              value: 20,
              message: "must have a maximum of 20 characters"
            },
          })} onChange={handleChange} placeholder='pokemon id' value={inputValue.owner_id}/></label>
          {errors.owner_id?.type === "required" && (
          <p role="alert">{errors.owner_id?.message}</p>)}

          <label htmlFor="name" className='form_label'>Name
          <input type='string' name='name' id='name' autoComplete='off' className='form_input' {...register('name', {
            required: 'Name field is required',
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
          <p role="alert">{errors.name?.message}</p>)}

          <label htmlFor="image" className='form_label'>Url image
          <input type='url' name='image' id='image' className='form_input' {...register('image', {
             required: 'Url image field is required',
            maxLength: {
              value: 200,
              message: "must have a maximum of 50 characters"
            }
          })}
          onChange={handleChange} placeholder='pokemon image' value={inputValue.image}/></label>
          {errors.image?.type === "required" && (
          <p role="alert">{errors.image?.message}</p>)}

          <label htmlFor="typeOne" className='form_label'>TypeOne
          <input type='string' name='typeOne' id='typeOne' autoComplete='off' className='form_input' {...register('typeOne', {
            required: 'TypeOne field is required',
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
          <p role="alert">{errors.typeOne?.message}</p>)}

          <label htmlFor="typeTwo" className='form_label'>TypeTwo
          <input type='string' name='typeTwo' id='typeTwo' autoComplete='off' className='form_input' {...register('typeTwo', {
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
          <p role="alert">{errors.typeTwo?.message}</p>)}

          <ButtonAct value='Create'/>
        </form>
      </section>
    </>
  );
};


export default Create;