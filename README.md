![Travis (.org)](https://img.shields.io/travis/vinyguedess/zxventure_challenge.svg?label=TravisCI)
[![Maintainability](https://api.codeclimate.com/v1/badges/2c675a56fdc008ba8370/maintainability)](https://codeclimate.com/github/vinyguedess/zxventure_challenge/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2c675a56fdc008ba8370/test_coverage)](https://codeclimate.com/github/vinyguedess/zxventure_challenge/test_coverage)

# ZXVenture Challenge

Backend code challenge based on [ZXVenture Challenge](https://github.com/ZXVentures/code-challenge/blob/master/backend.md).

## Tests

Tests can be runned with following command:

```bash
yarn test # or npm run test
```

## Running

Before choosing running mode, you must install dependencies. I strongly recommend [yarn](https://yarnpkg.com/en/), but
there's no prevention for [npm](https://npmjs.com).

```bash
yarn # or npm install
```

### Development mode

To run project in development mode you need to globally install [nodemon](https://nodemon.io/), that will allow with server refresh on files changes.

```bash
yarn dev
```

### Production mode

To run project in production mode you need to have [docker-compose](https://docs.docker.com/compose/install/) installed. That will permit you serving up full environment with Web and Database server.

```bash
docker-compose build
docker-compose up -d
```
