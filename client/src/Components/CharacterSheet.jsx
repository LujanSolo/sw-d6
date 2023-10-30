import { useForm } from 'react-hook-form';
import './CharacterSheet.css';
import Character from '../classes/character';
import { useState, useEffect } from 'react';

// export default function CharacterSheet() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   //* set up hooks to change starting stats/ponits based on species
//   // const [species, setSpecies] = useState('Januvrian');
//   // const [attributePoints, setAttributePoints] = useState({
//   //  Dexterity: 0,
//   //  Strength: 0,
//   //  
//   // })


//   //todo: BUILD an object that contains the unique properties for each species, which will then be used in the attribute fields
//   const speciesAttributeMods = {
//     'Ord\'uu': {
//       Strength: {
//         min: 2,
//         max: 4
//       },
//       Dexterity: {
//         min: 2,
//         max: 4
//       },
//       Perception: {
//         min: 2,
//         max: 4
//       },
//       Knowledge: {
//         min: 2,
//         max: 4
//       },
//       Mechanical: {
//         min: 2,
//         max: 4
//       },
//       Technical: {
//         min: 2,
//         max: 4
//       },
//       totalStarterPoints: 18,
//     }
//   }



//   const onSubmit = async (data) => {
//     const character = new Character(data.name, data.classType, data.age, data.species);
//     console.log(character);

//     try {
//       const response = await fetch('/api/characters', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', },
//         body: JSON.stringify(character),
//       });

//       if (response.ok) {
//         console.log('Character sheet successfully submitted.');
//       } else {
//         console.error('Submission failed.');
//       }
//     } catch (error) {
//       console.error('An error occurred during submission: ', error);
//     }
//   };
//   console.log(errors);



//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>

//       <div className="container">
//         <input type="text" placeholder="Character Name" {...register} />
//         <input type="text" placeholder="Character Class" {...register} />
//       </div>
//       <div className="container">
//         <input type="number" placeholder="Age" {...register("Age", {})} />
//         <select {...register("Species")}>
//           <option value="Ord'uu">Ord&apos;uu</option>
//           <option value="Januvrian">Januvrian</option>
//           <option value="Varje">Varje</option>
//           <option value="Kaminoan">Kaminoan</option>
//         </select>
//       </div>

//       <div className="container">
//         <h2>ATTRIBUTES</h2>
//         <h3>Strength</h3>
//         <h3>Dexterity</h3>
//         <h3>Perception</h3>
//         <h3>Knowledge</h3>
//         <h3>Mechanical</h3>
//         <h3>Technical</h3>
//       </div>
//       <br />
//       <input className="char-submit-btn" type="submit" />

//     </form>
//   )
// }

//! study portion to be removed later
export default function CharacterSheet() {
  const { register, handleSubmit } = useForm();

  const [species, setSpecies] = useState('Januvrian'); // Default species

  const [attributePoints, setAttributePoints] = useState({
    Dexterity: 0,
    Strength: 0,
    Knowledge: 0,
    Perception: 0,
    Technical: 0,
    Mechanical: 0,
  });

  // const [skillPoints, setSkillPoints] = useState({
  //   // an object to include ALL SKILLS, with allocated points added to base number derived from parent attribute
  // })

  const attributeModifiers = {
    'Januvrian': { Strength: { min: 0, max: 7 }, Technical: { min: 0, max: 5 }, totalPoints: 12 },
    'Ord\'uu': { Strength: { min: 0, max: 5 }, Technical: { min: 0, max: 5 }, totalPoints: 10 },
    'Varje': { Strength: { min: 1, max: 6 }, Technical: { min: 0, max: 4 }, totalPoints: 8 },
    'Kaminoan': { Strength: { min: 0, max: 6 }, Technical: { min: 0, max: 5 }, totalPoints: 11 },
  };

  const totalPoints = attributeModifiers[species].totalPoints;

  useEffect(() => {
    // Ensure that the attribute points stay within min and max values when the species changes
    const modifiedAttributePoints = { ...attributePoints };
    for (const attributeName in attributePoints) {
      const min = attributeModifiers[species][attributeName].min;
      const max = attributeModifiers[species][attributeName].max;

      if (modifiedAttributePoints[attributeName] < min) {
        modifiedAttributePoints[attributeName] = min;
      } else if (modifiedAttributePoints[attributeName] > max) {
        modifiedAttributePoints[attributeName] = max;
      }
    }

    setAttributePoints(modifiedAttributePoints);
  }, [species]);

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  const handleAttributeChange = (event) => {
    const attributeName = event.target.name;
    const attributeValue = parseInt(event.target.value);
    const min = attributeModifiers[species][attributeName].min;
    const max = attributeModifiers[species][attributeName].max;

    // Ensure the attribute value stays within the min and max values
    if (attributeValue >= min && attributeValue <= max) {
      setAttributePoints({ ...attributePoints, [attributeName]: attributeValue });
    }
  };

  const onSubmit = async (data) => {
    // Apply species-specific attribute modifiers
    const modifiedAttributePoints = { ...attributePoints };
    for (const attributeName in attributeModifiers[species]) {
      modifiedAttributePoints[attributeName] += attributeModifiers[species][attributeName].bonus;
    }

    //todo: Create a new Character object with attributes
    const character = new Character(data.name, data.classType, data.age, species, modifiedAttributePoints);
    console.log(character);

    // ... The rest of your submission logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Your form inputs */}
      <div className="container">
        <select value={species} onChange={handleSpeciesChange} {...register('species')}>
          {Object.keys(attributeModifiers).map((speciesName) => (
            <option key={speciesName} value={speciesName}>{speciesName}</option>
          ))}
        </select>
      </div>
      <div className="container">
        <h2>ATTRIBUTES</h2>
        {Object.keys(attributePoints).map((attributeName) => (
          <div key={attributeName}>
            <h3>{attributeName}</h3>
            <input
              type="number"
              name={attributeName}
              value={attributePoints[attributeName]}
              onChange={handleAttributeChange}
              min={attributeModifiers[species][attributeName].min}
              max={attributeModifiers[species][attributeName].max}
            />
          </div>
        ))}
      </div>
      <br />
      <input className="char-submit-btn" type="submit" />
    </form>
  );
}
