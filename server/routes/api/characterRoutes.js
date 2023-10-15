const router = require('express').Router();
const Character = require('../../models/Weapon');

//* GET ALL CHARACTERS
router.get('/', async (req, res) => {
  try {
    const characterData = await Weapon.findAll();
    if (!characterData) {
      res.status(404).json({ message: 'No database' });
      return;
    }
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* GET A SINGLE CHARACTER BY ID
router.get('/:character_id', async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.character_id);
    if (!characterData) {
      res.status(404).json({ message: 'No character with this ID' });
      return;
    }
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* UPDATE CHARACTER BY ID
router.put('/:character_id', async (req, res) => {
  try {
    const updatedCharacter = await Character.update(
      {
        name: req.body.name,
        damage: req.body.damage,
        bonus_damage: req.body.bonus_damage
      },
      {
        where: {
          character_id: req.params.character_id,
        },
      }
    );
    if (!updatedCharacter[0]) {
      res.status(404).json({ message: 'No character with this ID' });
      return;
    }
    res.status(200).json(updatedCharacter);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* delete CHARACTER by ID
router.delete('/:character_id', async (req, res) => {
  try {
    const deletedCharacter = await Character.destroy({
      where: {
        character_id: req.params.character_id,
      }
    });
    if (!deletedCharacter) {
      res.status(404).json({ message: 'No character with that ID' });
      return;
    }
    res.status(200).json(deletedCharacter);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* /api/characters
router.post('/characters', async (req, res) => {
  const characterData = await Character.create(req.body);
  return res.json(characterData);
});

module.exports = router;