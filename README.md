

In this project we are creating an authentication systeme using Node.js expressjs MongoDB and JWT ;
connecting with anime API ( based on Express.js and Request ) Complete anime data. Ranking, synopsis, genre, search by title. Over 20k data updated everyday.



## Dependencies

-  express
-  bcrypt
-  dotenv
-  mongoose
-  request
-  nodemon

## Roadmap

- Create server

- Add auth-router

- connect with database

- Create user with POST '/register' :

   - check if email is unique
   
   - hash pasword

   - insert into database

- Login user with POST '/LOGIN' :    

   - check if email in database.

   - Compare password with hashed password in database. 

 - connect with an Anime api and fetch a data

 - Add anime-router

## Deployment

 To deploy this project run using :

```bash
  npm install
```
```bash
  npm start
```

## Authors

- https://github.com/kratos9802