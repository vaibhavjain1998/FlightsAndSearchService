For Project setup go down.
/
    -src/ ( Actual server logic stores in src.)
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/ (storing DB configurations)
        repository/ will give methods to access folders
    -tests/[later] (other files need not to be added with server)
    -static/
    -temp/

/ We are doing role based not feature based.
    Role-based: All the controllers in one folder, all the models in one folder.

    Feature-based: Seperate models and controllers for each feature.
        -filghts
          / models
          /controllers
        -search
          /models
          /controllers

# Welcome to Flight Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path pof the root directory of the downloaded project
- Create a `.env` file in the root the root directory and add the following environment variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
```

## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport