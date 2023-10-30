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
      <label htmlFor="charName">CHARACTER NAME: </label>
      <input id="charName" type='text' placeholder="Character's name" {...register} />

      <label htmlFor="archetype">ARCHETYPE: </label>
      <input id="archetype" type='text' placeholder="ex: Jedi, Smuggler" {...register} />

      <label htmlFor="species">SELECT SPECIES: </label>
      <select id="species" {...register("Species")}>
        <option value="Januvrian">Januvrian</option>
        <option value="Ord'uu">Ord'uu</option>
        <option value="Varje">Varje</option>
        <option value="Kaminoan">Kaminoan</option>
      </select>

      
      

    </form>
  )
}