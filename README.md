# Hacker News - Backend Project

  <p align="center">Backend Application made entirely with Nest JS</p>

<!-- ## Description -->

### To have the project functional, the following steps must be followed.

## Presettings

- You must have MongoDB running on port 27017.
- In the root of the project (src folder), create the following file:
  - .env.development
- The created file must have the following:

```bash
PORT=4000
DB_PORT=27017
DB_URL=mongodb://localhost
DB_NAME=post
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Getting the data

To get the data from the API, execute the following GET request.

```bash
localhost:4000/posts/api
```

You can use Postman or Insomnia REST.

## Validation

To validate if the data was successfully obtained, execute the following GET request.

```bash
localhost:4000/posts
```

## Frontend Side

Once the backend is running. We must start the Frontend side.

To do so, you must follow this link [Frontend App](https://gitlab.com/jordansalazar.975/frontend-react-challenge) and follow the corresponding steps detailed in the README file.
