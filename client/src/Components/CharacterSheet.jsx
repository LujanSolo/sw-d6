import { useForm } from 'react-hook-form';

export default function CharacterSheet() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <input type="text" placeholder="Character Name" {...register} />
        <input type="text" placeholder="Character Class" {...register} />
      </div>
      <div className="container">
        <input type="number" placeholder="Age" {...register("Age", {})} />
      </div>
      <select {...register("Species")}>
        <option value="Ord'uu">Ord&apos;uu</option>
        <option value="Januvrian">Januvrian</option>
        <option value="Varje">Varje</option>
        <option value="Kaminoan">Kaminoan</option>
      </select>
      <br />
      <input type="submit" />

    </form>
  )
}