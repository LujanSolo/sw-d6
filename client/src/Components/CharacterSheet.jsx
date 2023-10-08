import { useState, useEffect } from 'react';
import './CharacterSheet.css';

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
          ...prevCharacter.attributes[attribute],
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
        <h3>ATTRIBUTES</h3>
        {Object.entries(character.attributes).map(([attribute, { base, bonus }]) => (
          <div className="attribute-section" key={attribute}>
            <label>
              {attribute.charAt(0).toUpperCase() + attribute.slice(1)} Base:
              <input
                className="diceValues"
                type="number"
                name={`attributes.${attribute}.base`}
                value={base}
                onChange={(e) => handleAttributeChange(attribute, 'base', e.target.value)}
              />
            </label>
            <label>
              {attribute.charAt(0).toUpperCase() + attribute.slice(1)} bonus:
              <input
                className="diceValues"
                type="number"
                min="1"
                name={`attributes.${attribute}.bonus`}
                value={bonus}
                onChange={(e) => handleAttributeChange(attribute, 'bonus', e.target.value)}
              />
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CharacterSheet;