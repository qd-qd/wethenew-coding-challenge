# Coding challenge

[Wethenew](https://wethenew.com/) x Jonathan Giamporcaro

## Requirements

- Node.js 10.13 or later
- Yarn v1.x
- MacOS, Windows (including WSL), and Linux are supported

## Installation

#### Install lefthook

In the directory, run this command.

```sh
npx lefthook install
```

#### Install dependencies

In the directory, run this command.

```sh
yarn
```

## Run the project

#### Run in development mode

In the directory, run this command to run the webapp in development mode.

```sh
yarn dev
```

> Webapp is accessible at localhost:3000

#### Run in production mode

In the directory, run this command to build the webapp

```sh
yarn build
```

Then run this command to run the webapp in production mode.

```sh
yarn start
```

> Webapp is accessible at localhost:3000

## Useful commands

#### Run quality

In the directory, run this command to run quality check.

```sh
yarn lint
```

In the directory, run this command to fix quality errors automatically.

```sh
yarn lint:fix
```

#### Run unit tests

In the directory, run this command to run tests once.

```sh
yarn test
```

In the directory, run this command to watch tests.

```sh
yarn test:watch
```

#### Run e2e tests

In the directory, run this command to run e2e tests once.

```sh
yarn e2e
```

In the directory, run this command to open cypress gui.

```sh
yarn e2e:watch
```

---

## Improvements ideas

- Add translation system to manage at least **english** and **french**
- Better manage proptypes. For the moment, sneaker proptypes doesn't respect DRY concept
- Improve e2e testing by running them CI-side and from multiple browsers (Firefox, Edge...°
- Add a function to sort sneakers by brand
- Add a new cool search functionnality. User will be able to find a specific sneaker and by redirected to the sneaker page. This functionnality is very hot and should be accessible everywhere so it could be a good idea to put it inside the Header component
- Improve UI! I have very cool idea about the UI to make the two pages completely insane. I'll be happy to discuss with you about these ideas.
- Add frontend cache mechanics to cache data requested. Use something like [SWR](https://swr.now.sh/) could be a good idea
- Add backend tests and integration tests

I've cool ideas to share with you, I'll be happy to discuss them.

---

Thanks to the team at Wethenew for their time. I have made clear-cut technical and design decisions (_Why using serverless functions? Why don't add any dependencies? Why create the UI from scratch? Why this file structures choice..._) and so I will be happy to share my thoughts about his choices with you during a phone call.
