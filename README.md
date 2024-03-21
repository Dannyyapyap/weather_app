# Weather_App
Powered by https://openweathermap.org/api

This is a weather dashboard that allows user to track current weather condition in a city or location.

### Assumption: 
1) If user did not allow for tracking of location on browser, the default will be Singapore
3) Limit will be set to 1 to display only 1 related search result 
4) Lat and Lon will be defaulted to Singapore Geographical location if not specified or detected
5) Epoch time will be converted to Singapore time
6) Geocoding API can only search for location via City name or Area Name. Therefore unable to search for country.

## Getting Started
Compatible on node v16.19.1

To use your own API token for the application, create an account over at https://openweathermap.org/api and generate an API token.

Configure .env-cmdrc.json to 
1) Input your API token 

## Installing dependecies
```bash
    npm install
```

### Running the development server.

By default, development server will start on localhost:3000

```bash
    npm start
```

### Building for development.

```bash
    npm run build
```

### Building for production.

```bash
    npm run build_prod
```

### Running build folder

## Ensure that serve is installed in the host machine

```bash
    npm i serve
```
## Build will be serve on http://localhost:3000

```bash
    serve -s build
```