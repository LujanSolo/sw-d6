import { useForm } from 'react-hook-form';
// import { useState, useEffect } from 'react';
import './CharacterSheet.css';
import { useState } from 'react';




export default function NewCharSheet() {
  const [species, setSpecies] = useState("Januvrian");

  const speciesList = ["Januvrian", "Kaminoan", "Ord'uu", "Varje"]

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  console.log(errors);

  const handleSpeciesSelect = ((e) =>{  setSpecies(e.target.value); console.log(e.target.value)});

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <label htmlFor="charName">CHARACTER NAME: </label>
        <input id="charName" type='text' placeholder="Character's name" {...register('name', {})} />
      </div>

      <div className="container">
        <label htmlFor="archetype">ARCHETYPE: </label>
        <input id="archetype" type='text' placeholder="ex: Jedi, Smuggler" {...register('archetype', {})} />
      </div>

      <div className="container">
        <label htmlFor="species">SELECT SPECIES: </label>
        <select value={species} onChange={handleSpeciesSelect}>
          {speciesList.map(speciesName => 
            <option key={speciesName} value={species} {...register('species', {})}>{speciesName}</option>
          )}
        </select>

      </div>


      <div className="container">
        <input type='submit' />
      </div>


    </form>
  )
}