# marcneander.se
Small presentation website of myself

## Getting started

You'll need [nodejs](https://nodejs.org/) and [yarn](https://yarnpkg.com) installed. If you also want to run the application in [Docker](https://www.docker.com/) you need to install that aswell.


### Running locally

- `yarn install && yarn _start`

### Running in Docker

- `yarn start --build`

## Taskrunner

Listing all tasks:
- `yarn run`

All tasks prefixed with `_` is meant for local use while the other tasks are meant for docker use. Docker is required for `test` tasks.

Commons tasks (Docker required):
- `yarn build` (Build application)
- `yarn start` (Builds application and starts a webserver)
- `yarn run lint` (Runs stylelint and eslint)
- `yarn test` (Runs stylelint, eslint, nightwatch and gemini)
- `yarn test:visual` (Runs gemini)
- `yarn test:visual:update` (Updates gemini screenshots)
- `yarn test:e2e` (Runs nightwatch)
- `yarn run down` (Closes down application)

## License
Copyright © 2015-present Marc Neander. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/marcneander/marcneander.se/blob/master/LICENSE.txt)
file.
