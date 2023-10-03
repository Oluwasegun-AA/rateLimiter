
<h1 align="center">Rate Limiter</h1>

## Table of Contents
* [Project Overview](#Project-Overview)
* [Features](#Features)
* [Environment Variables](#Environment-Variables)
* [Test](#Test)
* [Screenshot](#Screenshot)

## Project-Overview
 This repo exemplifies API rate limiting, using the token bucket algorithm.
 the rate limitter implementation can be found in `middlewares/rateLimiter/limitRate`

## Features

- [x] Allows for rate limit specification
- [x] Allows for limit time range customisation
- [x] provides hard throttling when rate limit exceeded
- [x] Extendable

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file if you choose to run locally

- Required
    - `DATABASE_URL`=`string` (databaseUrl)
    - `SECRET`=`string` (Jwt secret)
- Optional
    - `MAIL_USER`=`string` (optional)
    - `PASS`=`string`(optional)
    - `MAIL_HOST`=`string`(optional)
    - `MAIL_SERVICE`=`string`(optional)
    - `PORT`=`string`(optional)

## Test
- How To:
    - The rate limiting functionality is tested by making recurrent request to the endpoints. It has been configured such that
      the API allows a max of `10 requests` per client within a duration of `1 mminute`. After 10 successful requests, Error `429` is retuned. Also, the rate limit information is returned in the headers.

- Local env test  [ [Downlad Postman Collection](https://raw.githubusercontent.com/Oluwasegun-AA/rateLimiter/develop/Rate%20Limiting.postman_collection.json) ]
    - clone repo
    - create a .env file and supply the env variables in .env.sample
    - run `yarn start`
    - make request to:
        - `localhost:5000/api/v1/auth/signup`
        - `localhost:5000/api/v1/auth/signup`
        - `localhost:5000/api/v1/mail`
      [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5289404-cc14cd2b-1367-4f99-8516-69524e05a036?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D5289404-cc14cd2b-1367-4f99-8516-69524e05a036%26entityType%3Dcollection%26workspaceId%3D69cef651-0385-4ad9-891b-a5c4d1a0ebae#?env%5BRate_limit%5D=W3sia2V5IjoidG9rZW4iLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpoa05XWTBNamt4TFdWbU1XSXROR1kyTlMwNFptRm1MVEZoTnpVd01tVXlaRFUyWVNJc0ltVnRZV2xzSWpvaWIyeDFkMkZ6WldkMWJtRmtaWEJ2YW5VdVoyMWguLi4iLCJzZXNzaW9uSW5kZXgiOjB9XQ==)
- Remote Ephemeral server test  [ [Downlad Postman Collection](https://raw.githubusercontent.com/Oluwasegun-AA/rateLimiter/develop/Rate%20Limiting.postman_collection.json) ]
    - [Downlad Postman Collection](https://raw.githubusercontent.com/Oluwasegun-AA/rateLimiter/develop/Rate%20Limiting.postman_collection.json) or click run in postman below
    - make request to:
        - `https://ratelimiter-production.up.railway.app/api/v1/auth/signup`
        - `https://ratelimiter-production.up.railway.app/api/v1/auth/signup`
        - `https://ratelimiter-production.up.railway.app/api/v1/mail`
      [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5289404-cc14cd2b-1367-4f99-8516-69524e05a036?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D5289404-cc14cd2b-1367-4f99-8516-69524e05a036%26entityType%3Dcollection%26workspaceId%3D69cef651-0385-4ad9-891b-a5c4d1a0ebae#?env%5BRate_limit%5D=W3sia2V5IjoidG9rZW4iLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SWpoa05XWTBNamt4TFdWbU1XSXROR1kyTlMwNFptRm1MVEZoTnpVd01tVXlaRFUyWVNJc0ltVnRZV2xzSWpvaWIyeDFkMkZ6WldkMWJtRmtaWEJ2YW5VdVoyMWguLi4iLCJzZXNzaW9uSW5kZXgiOjB9XQ==)

> Note: the postman requests prepended with the "Local" keyword are to be used for local testing only

## Screenshot
<img width="1065" alt="image" src="https://user-images.githubusercontent.com/25525765/236390407-a1aac1cb-2e24-4e9e-bec4-a85fd0dfeb77.png">


***
_This File was generated by [md-generator](https://github.com/oluwasegun-AA/md-generator)_
