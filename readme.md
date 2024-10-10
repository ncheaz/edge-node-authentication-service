- create database with name 'edge-node-auth-service' \
- cp .env.example .env \
- generate random strings for following .env variables: JWT_SECRET and SECRET (you can use openssl rand -hex 64 for example) \
- npm install \
npx sequelize-cli db:migrate \
npx sequelize-cli db:seed:all (this will generate some of the variables needed by node which you need to update with real values in later steps) \
- npm run start

There will be created example user with following credentials:
username: admin
password: admin123

Authentication flow:
1. POST /login - provide username and password [x-www-form], this will embed cookie in next requests
2. GET /auth/check - this route will return user and his config if the cookie from previous request is correct

Test can be done in Postman, no need to manually include cookie in next requests, it will be automatically applied
