const Router = require('express').Router;
const { v4: uuidv4 } = require('uuid');
const router = Router();

const clients = [];
const facts = [];

router.get('/facts', (req, res) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache',
  };

  res.writeHead(200, headers);
  res.write(`data: ${JSON.stringify(facts)}`);
  // res.send();  
  // res.write(`
  // event: connect,
  // data: 'OK'
  // `)
  const client = {
    id: uuidv4(),
    res
  }
  clients.push(client);
  console.log('[Connect]: ', client.id);

  res.on('close', () => {
    console.log('[Disconnect]: ', client.id);
    clients.filter((c) => c.id !== client.id);
  })
  
});

router.get('/stats', (_, res) => {
  res.send('pong');
});

router.post('/facts', (_, res) => {
  res.send('pong');
});

module.exports = router;
