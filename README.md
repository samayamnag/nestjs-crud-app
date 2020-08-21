### Prerequisites ###
  * NodeJS >= 12
  * Mysql >= 5.7
  * MongoDB >= 4.0
  * NPM/yarn
  * PM2 >= 3.5.1

### Installation ###

```bash
$ git clone https://github.com/samayamnag/nestjs-crud-app.git
$ cd <project_name>
$ npm install
```

### Set config ###
```bash
$ cp .env.example .env
```
- Provide values in .env

### Run the application

```bash
# local
$ nodemon or $ npm run start

# watch mode
$ npm run start:dev

```

# Code Overview

## Dependencies

- [nestjs](https://github.com/nestjs/nest) - TypeScript based NodeJS framework
- [nodemon](https://www.npmjs.com/package/nodemon) - Developer tool for NodeJS applications
- [typeorm](https://github.com/typeorm/typeorm) - ORM for Typescript and Javascript
- [mysql](https://www.npmjs.com/package/mysql2) - MySQL client for NodeJS
- [mongoose](https://www.npmjs.com/package/mongoose) - MongoDB bject modeling tool
- [dotenv](https://github.com/motdotla/dotenv) - To load environment variables from .env file
