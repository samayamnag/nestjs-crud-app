### Prerequisites

- NodeJS >= 12
- Mysql >= 5.7
- MongoDB >= 4.0
- NPM/yarn
- PM2 >= 3.5.1

### Installation

```bash
$ git clone https://github.com/samayamnag/nestjs-crud-app.git
$ cd <project_name>
$ npm install
```

### Set config

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

### Application documentation
```bash
$ npx compodoc -p tsconfig.json -s

```
- [Here you can find your appliaction documentation](http://localhost:8080)
- [For more info](https://docs.nestjs.com/recipes/documentation)


# Code Overview

## Dependencies

- [nestjs](https://github.com/nestjs/nest) - TypeScript based NodeJS framework
- [nodemon](https://www.npmjs.com/package/nodemon) - Developer tool for NodeJS applications
- [typeorm](https://github.com/typeorm/typeorm) - ORM for Typescript and Javascript
- [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for NodeJS
- [mongoose](https://www.npmjs.com/package/mongoose) - MongoDB bject modeling tool
- [dotenv](https://github.com/motdotla/dotenv) - To load environment variables from .env file
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - bcrypt for NodeJs
- [class-validator](https://github.com/typestack/class-validator) - Decorator-based property validation for classes.
- [class-transformer](https://github.com/typestack/class-transformer) - Decorator-based transformation, serialization,  
  and deserialization between objects and classes
- [passport-jwt](https://github.com/mikenicholson/passport-jwt) - A Passport strategy for authenticating with a JSON Web  
  Token.
- [documentation](https://github.com/compodoc/compodoc) - Documentation tool

## Authentication

This application is using `passport`'s `jwt` strategy for authentication.
For more info https://docs.nestjs.com/techniques/authentication
