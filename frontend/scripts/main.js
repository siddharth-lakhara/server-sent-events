const evtSource = new EventSource('http://localhost:8080/facts');

// custom event from server
evtSource.addEventListener('connect', (evt) => {
  console.log('Connection success');
  console.log('[Connect]: ',evt.data);
});

// message event from server
evtSource.onmessage = (evt) => {
  console.log('[MSG RCVD]: ', { msg: JSON.parse(evt.data) });
};
