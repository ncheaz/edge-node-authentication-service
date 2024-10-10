# Setup

1. create database **'edge-node-auth-service'**
2. cp .env.example .env
3. generate random strings for following .env variables: **JWT_SECRET** and **SECRET** (you can use openssl rand -hex 64 for example)
4. **npm install**
5. npx sequelize-cli **db:migrate**
6. npx sequelize-cli **db:seed:all** (this will generate demo user)
7. define Edge node config parameters by executing **provided MYSQL query ([UserConfig.sql](UserConfig.sql))**, updated with real values
   1. your **Runtime node domain and port**
   2. your **Paranet UAL** (you can do it later, but the Edge node will not work without it. Paranet should be created before, in Preparation steps)
8. add your wallet to the "user_wallets" table - column "blockchain" is actual blockchain id (e.g. base:84532)
- npm run start

Seeder will create example user with following credentials:
- username: admin
- password: admin123

Authentication flow explained **(Edge node interface already have this integrated, no need for further steps)**:
1. POST /login - provide username and password [x-www-form], this will embed cookie in next requests
2. GET /auth/check - this route will return user and his config if the cookie from previous request is correct

Test can be done in Postman, no need to manually include cookie in next requests, it will be automatically applied.
