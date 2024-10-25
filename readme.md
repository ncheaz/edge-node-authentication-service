# Setup

1. create database **'edge-node-auth-service'**
2. cp .env.example .env
3. generate random strings for following .env variables: **JWT_SECRET** and **SECRET** (you can use openssl rand -hex 64 for example) + Add MySQL password to **DB_PASSWORD** variable if necessary
4. **npm install**
5. npx sequelize-cli **db:migrate**
6. npx sequelize-cli **db:seed:all** (this will generate demo user)
7. Update **this MYSQL query ([UserConfig.sql](UserConfig.sql))** in your cloned repository with real values of:
   1. your **v8 DKG Core node endpoint (run_time_node_endpoint) and port (run_time_node_port)**
   2. your **Paranet UAL (edge_node_paranet_ual)** (you can do it later, but the Edge node will not work without it. Paranet should be created before, in Preparation steps)
8. Execute **([UserConfig.sql](UserConfig.sql))** to define Edge node config parameters
9. add your wallet to the "user_wallets" table - column "blockchain" is actual blockchain id (e.g. base:84532)
10. **npm run start**

Seeder will create example user with following credentials:
- username: admin
- password: admin123

Authentication flow explained **(Edge node interface already have this integrated, no need for further steps)**:
1. POST /login - provide username and password [x-www-form], this will embed cookie in next requests
2. GET /auth/check - this route will return user and his config if the cookie from previous request is correct

Test can be done in Postman, no need to manually include cookie in next requests, it will be automatically applied.
