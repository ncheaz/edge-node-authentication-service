# Setup

- create database with name 'edge-node-auth-service' \
- cp .env.example .env \
- generate random strings for following .env variables: JWT_SECRET and SECRET (you can use openssl rand -hex 64 for example) \
- npm install \
- npx sequelize-cli db:migrate \
- npx sequelize-cli db:seed:all (this will generate demo user) \
- populate required variables in UserConfig table (mysql query to run is in file UserConfig.sql) and replace with real values
  - your Runtime node domain and port
  - your Paranet UAL (you can do it later also when the Paranet is created, but the Edge node will not work without it)
- add your wallet to the "user_wallets" table - column "blockchain" is actual blockchain id (e.g. base:84532)
- npm run start

There will be created example user with following credentials:
username: admin
password: admin123

Authentication flow:
1. POST /login - provide username and password [x-www-form], this will embed cookie in next requests
2. GET /auth/check - this route will return user and his config if the cookie from previous request is correct

Test can be done in Postman, no need to manually include cookie in next requests, it will be automatically applied
