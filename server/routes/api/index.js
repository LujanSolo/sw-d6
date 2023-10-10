const router = require('express').Router();
const weaponRoutes = require('./weaponRoutes');

// Prefix all routes defined in `bookRoutes.js` with `/books
router.use('/weapons', weaponRoutes);

module.exports = router;