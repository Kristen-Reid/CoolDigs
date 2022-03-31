echo "node_modules" > .gitignore
echo ".env" >> .gitignore
echo "build" >> .gitignore
echo "DS_Store" >> .gitignore
echo "history.bash" >> .gitignore

npm install bcryptjs
npm install cookie-parser
npm install cors
npm install csurf
npm install dotenv
npm install express
npm install express-async-handler
npm install express-validator
npm install helmet
npm install jsonwebtoken
npm install morgan
npm install per-env
npm install pg
npm install sequelize@5
npm install sequelize-cli

npm install -D dotenv-cli
npm install -D nodemon

touch .env
touch .env.example

# generate JWT secret
openssl rand -base64 10

mkdir config
touch config/index.js
touch config/database.js

touch .sequelizerc

npx sequelize init

psql -c "CREATE USER cool_camps_app WITH PASSWORD 'sanjose1985*' CREATEDB"

npx dotenv sequelize db:create

touch app.js

