
# Server Sent Events

## About
Server Sent Events are alternative to WebSockets. It is useful in places where we need periodic info from server, but without the need of bi-directional communication i.e. the client will not be sending anything to the server. <br/>
<br/>
Ideal places of application would be places where we need near-real time data from server. <br/>
> Eg. Live updates of cricket match scores. 

## Scripts
There are two scripts. One for frontend, one for backend
```
$ yarn run backend // starts backend at port 8080
$ yarn run frontend // starts frontend at port 8081
```

## Testing backend (cUrl)

1. Curl for connecting to /facts endpoint
```
$ curl -H Accept:text/event-stream http://localhost:8080/facts
```

2. Curl for posting a new fact
 ```
 $ curl -X POST \
 -H "Content-Type: application/json" \
 -d '{"info": "Shark teeth are embedded in the gums rather than directly affixed to the jaw, and are constantly replaced throughout life.", "source": "https://en.wikipedia.org/wiki/Shark"}'\
 -s http://localhost:8080/facts
 ```
