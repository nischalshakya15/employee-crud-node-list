## express-server-typescript

Basic CRUD operation between two entities employee and department using array in express and nodejs.

## Prerequisites

- nodejs
- Docker and docker-compose (for containerization)
- npm

## Setup

- git clone https://github.com/nischalshakya15/express-server-typescript.git

- Go to the project directory

  `cd express-server-typescript`

- Rename env.example to .env file

- Running in **development** mode

  `npm run start:dev`

- Running in **production** mode

  `npm run build && npm start`

- Open the browser

  `http://localhost:8080/api-docs`

## Using Docker

- `docker-compose --compatibility up -d`

## Deploy into heroku

- Login into heroku using your credentials.

  `heroku login`

- Create an app using **heroku-cli**

  `heroku apps:create employee-crud-node-list`

- Build the project.

  `npm run build`

- Specify the start script in **script** section of package.json file.

  ```json
   "scripts": {
      "start": "node build/index.js"
    }
  ```

- Push it into heroku.
    
    `git push heroku master`

- Open the app.
    
    `heroku open`

### References

https://stackify.com/winston-logging-tutorial/
https://www.codota.com/code/javascript/functions/winston/format
https://medium.com/@jorgemcdev/node-express-app-typescript-tslint-prettier-airbnb-husky-c42588cbcbe3
https://medium.com/@SigniorGratiano/express-error-handling-674bfdd86139
https://wanago.io/2018/12/17/typescript-express-error-handling-validation/
https://levelup.gitconnected.com/the-simplest-way-to-add-swagger-to-a-node-js-project-c2a4aa895a3c
