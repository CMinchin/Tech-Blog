const router = require('express').Router();

const apiRoutes = require('./api');
const websiteRoutes = require('./websiteRoutes');

router.use('/', websiteRoutes);
router.use('/api', apiRoutes);

module.exports = router;
