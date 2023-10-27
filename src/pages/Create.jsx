import { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import ButtonAct from '../components/baseComponents/ButtonAct';
import { pokemonContext } from '../context/pokemonContext';


const defaultValues = {
  owner_id: '',
  name: '',
  image: '',
  typeOne: '',
  typeTwo: '',
};

const Create = () => {
  const [inputValue, setInputValue] = useState({...defaultValues});
  const {setCreatedPokemon, addToListOfCreatedPokemons} = useContext(pokemonContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } =useForm({ defaultValues });
  const navigate = useNavigate();

  
  const handleErrors = (error) => {
    let title;
    let message;
    if (Object.hasOwn(error, 'owner_id')) {
      title = 'invalid Id:';
      message = 'Must begin with:' +
      '<b> 1 Capital letter</b> + (-) + <b>3-6 numbers.</b>' +
      ' EXAMPLE:  <b>X-157961</b>' +
      ' Length:  <b>5-8 characters</b>';
    } else if (Object.hasOwn(error, 'name')) {
      title = 'invalid Name:';
      message = 'Must start with:' +
      '<b> Letters</b> + optional : (-) + <b>4 numbers.</b>' +
      ' EXAMPLE:  <b>Pokeboy</b> or <b>Pokeboy-0025</b>' +
      ' Length:  <b>3-20 characters</b>';
    } else if (Object.hasOwn(error, 'image')) {
      title = 'invalid Image url:';
      message = 'Must start with:' +
      '<b> https</b>' +
      ' EXAMPLE:  <b>https://images...</b>' +
      ' Length:  <b> max 200 characters</b>';
    } else if (Object.hasOwn(error, 'typeOne')) {
      title = 'invalid TypeOne:'
      message = 'Must have only letters' +
      ' EXAMPLE:  <b>fire</b> | <b>water</b> | <b>onomatopoeia</b>' +
      ' Length:  <b>3-20 characters</b>';
    } else {
      title = 'invalid TypeTwo:'
      message = 'Must have only letters' +
      ' EXAMPLE:  <b>fairy"</b> | <b>poison</b> | <b>fighting</b>' +
      ' Length:  <b>3-20 characters</b>';
    }
    Swal.fire({
      icon: 'error',
      titleText: title,
      html: message,
    })
    clearErrors();
  };

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
          <label htmlFor='owner_id' className='form_label'>Id *
          <input type='string' name='owner_id' id='owner_id' autoComplete='off' className='form_input' {...register('owner_id', {
            required: 'ID field is required',
            pattern: /([A-Z](?<=[A-Z])-\d{3,6})/,
            minLength: 5,
            maxLength: 8,
          })} onChange={handleChange} placeholder='X-123... or X-123456' value={inputValue.owner_id}/></label>
          {errors.owner_id && handleErrors(errors)}

          <label htmlFor='name' className='form_label'>Name *
          <input type='string' name='name' id='name' autoComplete='off' className='form_input' {...register('name', {
            required: 'Name field is required',
            pattern: /^[A-Za-z]{1,20}?$|([A-Za-z]{1,20}(?<=[A-Za-z])-\d{4})/ig,
            minLength: 3,
            maxLength:20,
          })}
          onChange={handleChange} placeholder='Pokechi or pokechi-0001' value={inputValue.name}/></label>
          {errors.name && handleErrors(errors)}

          <label htmlFor='image' className='form_label'>Url image *
          <input type='url' name='image' id='image' className='form_input' {...register('image', {
            required: 'Url image field is required',
            pattern: /(https?:\/\/.*\.*)/i,
            maxLength: 200,
          })}
          onChange={handleChange} placeholder='pokemon image' value={inputValue.image}/></label>
          {errors.image && handleErrors(errors)}

          <label htmlFor='typeOne' className='form_label'>TypeOne *
          <input type='string' name='typeOne' id='typeOne' autoComplete='off' className='form_input' {...register('typeOne', {
            required: 'TypeOne field is required',
            pattern: /^[A-Za-z]{3,15}$/,
            minLength: 3,
            maxLength: 20,
          })}
          onChange={handleChange} placeholder='fire or water or ...' value={inputValue.typeOne}/></label>
          {errors.typeOne && handleErrors(errors)}

          <label htmlFor='typeTwo' className='form_label'>TypeTwo
          <input type='string' name='typeTwo' id='typeTwo' autoComplete='off' className='form_input' {...register('typeTwo', {
            pattern: /^[A-Za-z]{3,15}$/,
            minLength: 5,
            maxLength:20,
          })}
          onChange={handleChange} placeholder='pokemon typeTwo' value={inputValue.typeTwo}/></label>
          {errors.typeTwo && handleErrors(errors)}

          <ButtonAct value='Create'/>
        </form>
      </section>
    </>
  );
};


export default Create;