const router = require('express').Router();

const Weapon = require('../../models/Weapon');

// GET ALL WEAPONS
router.get('/', (req, res) => {
  Weapon.findAll().then((weaponData) => {
    res.json(weaponData);
  });
});

router.put('/:weapon_id', (req, res) => {
  Weapon.update(
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
  )
    .then((updatedWeapon) => {
      res.json(updatedWeapon);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:book_id'), (req, res) => {
  Weapon.destroy({
    where: {
      weapon_id: req.params.weapon_id,
    },
  })
    .then((deletedWeapon) => {
      res.json(deletedWeapon);
    })
    .catch((err) => res.json(err));
}

//* /api/weapons
router.post('/', (req, res) => {
  Weapon.create({
    name: req.body.name,
    damage: req.body.damage,
    bonus_damage: req.body.bonus_damage
  })
    .then((newWeapon) => {
      res.json(newWeapon);
    })
    .catch((err) => {
      res.json(err);
    });
});

//* /api/weapons/seed
router.post('/seed', (req, res) => {
  Weapon.bulkCreate([
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
  ])
    .then(() => {
      res.json({ message: 'Weapons seeded successfully' });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;