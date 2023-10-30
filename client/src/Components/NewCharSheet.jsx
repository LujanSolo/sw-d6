import { useForm } from 'react-hook-form';
// import { useState, useEffect } from 'react';
import './CharacterSheet.css';
import React from 'react';


export default function NewCharSheet() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  console.log(errors);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="charName">CHARACTER NAME: </label>
      <input id="charName" type='text' placeholder="Character's name" {...register} />

      <label for="charName">CHARACTER NAME: </label>
      <input id="charName" type='text' placeholder="Character's name" {...register} />

      <label for="charName">CHARACTER NAME: </label>
      <input id="charName" type='text' placeholder="Character's name" {...register} />

      
      

    </form>
  )
}