Homelane Hackerearth Challenge
===============================

# About

This application will run inside 3 containers and 2 networks.

`database` and `query service` are running on the same network (`db_network`) which is private.

`query service` and `api service` are on the same network (`api_network`)

Only `api service` is publicly accessible which will run on port `8080`

## Gotchas

The initial startup might take some time. since the db is very large (`23 MB` dump file). The init script runs only one time during the container creation. Subsequent runs will be faster

# Run Application


## Start the app:

- Install `docker-compose`
- `docker-compose build`
- `docker-compose up`

## Interact with app

- GET /get_player_info

    ```
    curl localhost:8080/api/get_player_info\?player_name=cristiano
    ```

- GET /get_club_player_list

    ```
    curl localhost:8080/api/get_club_player_list\?club_name=Barcelona
    ```


## Scale up app

- Start two instances of query microservice
    
    ```
    docker-compose scale query=2
    ```

## Stop the app

- `docker-compose down`


# Run Tests

- `cd services/query`
- `npm run test`
