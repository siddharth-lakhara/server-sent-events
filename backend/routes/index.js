
const Router = require('express').Router;
const pingRoutes = require('./ping');

const router = Router();
router.use('/', pingRoutes);

module.exports = router;