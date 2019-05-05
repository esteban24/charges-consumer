# charges-consumer React App

Source code repository of the React consumer app for the charges-server API.

## Requirements

- Linux distro
- Node == 10.x
- Docker > 18.x

## Installation with Docker

First of all, lets create the network to communicate between server and consumers:

`$ docker create network <network_name>`

In order to let communicate between server and consumer, the consumer must know the hostname the Docker container server will have. This is an example with server hostname: `charges-server`:

1. Modify the .env file (REACT_APP_API_SERVER_HOST=localhost by default):

	`REACT_APP_API_SERVER_HOST=charges-server`

2. Docker build:

	` $ docker build -t <charges_consumer_image_tag>:<version> .`

3. Docker run (the app port is 5000):

	` $ docker run --name <container_name> -h <container_hostname> --network <network_name> -p 5000:5000 -d <charges_consumer_image_tag>:<version>`

4. Check the consumer is up:

	```
	$ curl http://localhost:5000/ping
	{"response":"pong"}
	```

### Installation with Node

In this case, if we are running the application in development mode for example, the .env file doesn't have to be modified:

`$ npm install`

## Testing

This project comes with some tests to check every view renders properly (using Jest):

	With this command we run the tests interactively:

	`$ npm test`

	To run tests as CI environment mode:

	```
	$ CI=true npm test

	> charges-consumer@0.1.0 test /Users/esteban/Workspace/charges-consumer
	> react-scripts test --env=jsdom

	PASS src/tests/Index.test.js
	PASS src/tests/Show.test.js
	PASS src/tests/Home.test.js
	PASS src/tests/Create.test.js
	PASS src/tests/Header.test.js
	PASS src/tests/App.test.js

	Test Suites: 6 passed, 6 total
	Tests:       6 passed, 6 total
	Snapshots:   0 total
	Time:        6.095s
	Ran all test suites.
	```

## Serving

### Development mode

To start a development server:

`$ npm start`

The application will be deployed at http://localhost:3000/

### Production mode

To generate the production optimized files and serve them, follow the next steps:

`$ npm run build`

The necessary files will be stored at __build/__ folder.

There is a minimun server at __server/__ folder. To set up the production server with the static files previously generated run:

`$ cd server`
`server$ npm install`
`server$ STATIC_CONTENT=<path/to/static/content> npm start`**

** Note: `<path/to/static/content>` should be __STATIC_CONTENT=../build/__
