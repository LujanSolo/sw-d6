const router = require('express').Router();
const Weapon = require('../../models/Weapon');

// GET ALL WEAPONS
router.get('/', async (req, res) => {
  const weaponData = await Weapon.findAll();
  return res.json(weaponData);
});

// GET A SINGLE WEAPON BY ID
router.get('/:weapon_id', async (req, res) => {
  const weaponData = await Weapon.findOne(
    {
      where: {
        weapon_id: req.params.weapon_id
      }
    }
  );
  return res.json(weaponData);
});

router.put('/:weapon_id', async (req, res) => {
  const weaponData = await Weapon.update(
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
  return res.json(weaponData);
});

router.delete('/:book_id'), async (req, res) => {
  const weaponData = await Weapon.destroy({
    where: {
      weapon_id: req.params.weapon_id,
    },
  });
  return res.json(weaponData);
}

//* /api/weapons
router.post('/', async (req, res) => {
  const weaponData = await Weapon.create(req.body);
  return res.json(weaponData);
});

//* /api/weapons/seed
router.post('/seed', async (req, res) => {
  const weaponData = await Weapon.bulkCreate([
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