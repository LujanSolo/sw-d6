const router = require('express').Router();
const weaponRoutes = require('./weaponRoutes');

router.use('/weapons', weaponRoutes);

module.exports = router;