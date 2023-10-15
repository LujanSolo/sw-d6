const router = require('express').Router();
const Character = require('../../models/Weapon');

//* GET ALL CHARACTERS
router.get('/', async (req, res) => {
  try {
    const weaponData = await Weapon.findAll();
    if (!weaponData) {
      res.status(404).json({ message: 'No database' });
      return;
    }
    res.status(200).json(weaponData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* GET A SINGLE WEAPON BY ID
router.get('/:weapon_id', async (req, res) => {
  try {
    const weaponData = await Weapon.findByPk(req.params.weapon_id);
    if (!weaponData) {
      res.status(404).json({ message: 'No weapon with this ID' });
      return;
    }
    res.status(200).json(weaponData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* UPDATE WEAPON BY ID
router.put('/:weapon_id', async (req, res) => {
  try {
    const updatedWeapon = await Weapon.update(
      {
        name: req.body.name,
        damage: req.body.damage,
        bonus_damage: req.body.bonus_damage
      },
      {
        where: {
          weapon_id: req.params.weapon_id,
        },
      }
    );
    if (!updatedWeapon[0]) {
      res.status(404).json({ message: 'No weapon with this ID' });
      return;
    }
    res.status(200).json(updatedWeapon);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* delete weapon by ID
router.delete('/:weapon_id', async (req, res) => {
  try {
    const deletedWeapon = await Weapon.destroy({
      where: {
        weapon_id: req.params.weapon_id,
      }
    });
    if (!deletedWeapon) {
      res.status(404).json({ message: 'No weapon with that ID' });
      return;
    }
    res.status(200).json(deletedWeapon);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* /api/weapons
router.post('/', async (req, res) => {
  const weaponData = await Weapon.create(req.body);
  return res.json(weaponData);
});

//* /api/weapons/seed
router.post('/seed', async (req, res) => {
  await Weapon.bulkCreate([
    {
      name: "Longbow",
      damage: 2,
      bonus_damage: 2
    },
    {
      name: "Black-powder Pistol",
      damage: 2,
      bonus_damage: 2
    },
    {
      name: "Musket",
      damage: 3,
      bonus_damage: 0
    },
    {
      name: "Blaster Pistol",
      damage: 4,
      bonus_damage: 0
    },
    {
      name: "Heavy Blaster Pistol",
      damage: 5,
      bonus_damage: 0
    },
    {
      name: "Blaster Rifle",
      damage: 5,
      bonus_damage: 0
    },
    {
      name: "Heavy Blaster Rifle",
      damage: 5,
      bonus_damage: 1
    },
  ]);

  return res.json({ message: 'Weapons seeded successfully' });
});

module.exports = router;