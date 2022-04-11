## CoolDigs

This is a clone of HipCamp called CoolDigs. CoolDigs is a place where users can schedule to stay at different campsites all over and  to adventure in the great outdoors under the stars.

## Index 
| [Database Schema] (https://github.com/Kristen-Reid/CoolDigs/wiki/Database-Schema) | [Features List] (https://github.com/Kristen-Reid/CoolDigs/wiki/Feature-List)

## Technologies Used
![image](https://user-images.githubusercontent.com/93681006/162755238-34836ccc-3a44-43e8-a143-7d23ba1524aa.png)
![image](https://user-images.githubusercontent.com/93681006/162755321-f5617fb2-7f80-4483-9a59-3cedbee285bc.png)
![image](https://user-images.githubusercontent.com/93681006/162755358-70c2cea8-935c-4fc8-b326-9dfcbef1d7e6.png)
![image](https://user-images.githubusercontent.com/93681006/162755433-60f96701-e500-471f-a868-763e8743e12c.png)

## Getting start

1. Clone this repo.
  * git@github.com:Kristen-Reid/CoolDigs.git
 
2. Install dependencies from the root directory.
  * npm install

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
  * CREATE USER <name> WITH CREATEDB PASSWORD <'password'>
  
4. Create a .env file in the backen directory based on the .env.example found within the respective directory.
  
5. Enter your username and password information into your .env file along with your desired database name, a secured combination for you JWT-SECRET, and your desired PORT (preferably 5000).
  
6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
  * 'proxy': 'http://localhost:5000'
 
7. Create Database, Migrate and Seed models.
  * npx dotenv sequelize db:create
  * npx dotenv sequelize db:migrate
  * npx dotenv sequelize db:seed:all
  
8. Start the services in the backend directory.
  * npm start
  
9. Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to http://localhost:3000.
  * npm start
  
10. You can use the Demo user or create an account to begin using CoolDigs.
  
  
## Features
  
Logged in users can perform the following actions.
  * Add/View/Edit/Delete Spots
  * Add/View/Edit/Delete Reviews
