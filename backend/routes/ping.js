const Router = require('express').Router;

const router = Router();

router.get('/', (_, res) => {
  res.send('App Working!');
});

router.get('/ping', (_, res) => {
  res.send('pong');
});

module.exports = router;
