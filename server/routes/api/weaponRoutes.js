const router = require('express').Router();

const Weapon = require('../../models/Weapon');

router.post('/', (req, res) => {
  Weapon.create({
    name: req.body.title,
    damage: req.body.damage
  })
    .then((newWeapon) => {
      res.json(newWeapon);
    })
    .catch((err) => {
      res.json(err);
    }); 
});

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
})

module.exports = router;