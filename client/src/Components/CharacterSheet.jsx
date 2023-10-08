import { useState, useEffect } from 'react';

const CharacterSheet = () => {
  const blankCharacterSheet = {
    name: "",
    type: "",
    age: "",
    attributes: {
      dexterity: {
        base: 0,
        bonus: 0
      },
      knowledge: {
        base: 0,
        bonus: 0
      },
      mechanical: {
        base: 0,
        bonus: 0
      },
      perception: {
        base: 0,
        bonus: 0
      },
      strength: {
        base: 0,
        bonus: 0
      },
      technical: {
        base: 0,
        bonus: 0
      }
    },
  };


  const [character, setCharacter] = useState(blankCharacterSheet);

  useEffect(() => {
    const savedCharacterSheet = localStorage.getItem('character');
    if (savedCharacterSheet) {
      setCharacter(JSON.parse(savedCharacterSheet));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('character', JSON.stringify(character))
  }, [character]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCharacter((prevCharacter) => ({ ...prevCharacter, [name]: value, }));
  };

  const handleAttributeChange = (attribute, subAttribute, value) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      attributes: {
        ...prevCharacter.attributes,
        [attribute]: {
          ...prevCharacter.attribute[attribute],
          [subAttribute]: value,
        }
      },
    }));
  };

  return (
    <div>
      <h2>Character Sheet</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={character.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={character.type}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={character.age}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <h3>ATTRIBUTES</h3>
      {Object.entries(character.attribues).map(([attribute, { base, bonus }]) => (
        <div key={attribute}>
          <label>
            {attribute} Base:
            <input
              type="number"
              name={`attributes.${attribute}.base`}
              
          </label>
        </div>
      ))}
    </div>
  )

};

export default CharacterSheet;