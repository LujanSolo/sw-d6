const router = require('express').Router();

const Weapon = require('../../models/Weapon');

router.post('/', (req, res) => {
  Weapon.create({
    title: req.body.title,
    damage: req.body.damage
  })
    .then((newWeapon) => {
      res.json(newWeapon);
    })
    .catch((err) => {
      res.json(err);
    }); 
});

module.exports = router;