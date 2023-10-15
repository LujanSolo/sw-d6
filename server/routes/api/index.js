const router = require('express').Router();
const weaponRoutes = require('./weaponRoutes');
const characterRoutes = require('./characterRoutes');

// Prefix all routes defined in `bookRoutes.js` with `/books
router.use('/weapons', weaponRoutes);
router.use('/characters', characterRoutes);

module.exports = router;