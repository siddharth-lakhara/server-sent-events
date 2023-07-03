
const Router = require('express').Router;
const pingRoutes = require('./ping');
const factsRoute = require('./facts');

const router = Router();
router.use('/', pingRoutes);
router.use('/', factsRoute);

module.exports = router;