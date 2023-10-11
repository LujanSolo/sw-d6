import React, { useState } from 'react',
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CharacterCreationForm = () => {
  const [character, setCharacter] = useState({
    name: '',
    age: '',
    species: '',
    characterClass: '',
    attributes: {
      dexterity: {
        value: 0,
        skills: {
          blaster: 0,
          dodge: 0,
          meleeCombat: 0,
          meleeParry: 0
        },
      },
      strength: {
        value: 0,
        skills: {
          athletics: 0,
          brawling: 0,
          stamina: 0
        }
      }   
    }
  })
}