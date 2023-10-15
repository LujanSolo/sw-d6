import { useForm } from 'react-hook-form';
import './CharacterSheet.css';
import Character from '../classes/character';

export default function CharacterSheet() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  //! change this to a POST 
  const onSubmit = async (data) => {
    const character = new Character(data.name, data.classType, data.age, data.species);
    console.log(character);

    try {
      const response = await fetch('/api/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(character),
      });

      if (response.ok) {
        console.log('Character sheet successfully submitted.');
      } else {
        console.error('Submission failed.');
      }
    } catch (error) {
      console.error('An error occurred during submission: ', error);
    }
  };
  console.log(errors);
  


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <input type="text" placeholder="Character Name" {...register} />
        <input type="text" placeholder="Character Class" {...register} />
      </div>
      <div className="container">
        <input type="number" placeholder="Age" {...register("Age", {})} />
        <select {...register("Species")}>
        <option value="Ord'uu">Ord&apos;uu</option>
        <option value="Januvrian">Januvrian</option>
        <option value="Varje">Varje</option>
        <option value="Kaminoan">Kaminoan</option>
      </select>
      </div>
      <br />
      <input className="char-submit-btn" type="submit" />

    </form>
  )
}