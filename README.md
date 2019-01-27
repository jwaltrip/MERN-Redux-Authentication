## MERN Stack + Redux Boilerplate w/ JWT User Authentication

This is a simple full MERN stack boilerplate with Redux and JSON Web Token user authentication integrated.

It is used by myself to quickly get a full stack MERN + Redux app up and running with minimal setup

### Installation after clone

>Both the front end and back end utilize the same package.json file

After cloning, simply `cd` into the root directory and run either:

`yarn install` or `npm install` (depending on which package manager you prefer)

This will install all the dependencies for both front and back end.

##### Configure the MongoDB connection string

Copy the `.env.example` file to `.env`

Fill in the `MONGODB_URI` field with the mongoDB connection string from MLab
Fill in the `SECRET` field with random chars
Leave the `PORT` field blank for now

### How to Use

The Express + MongoDB backend is located in the `/server` dir (and runs on port `4000`)

The React + Redux frontend is located in the `/src` dir (and runs on port `3000`)

#### Start the servers

> Both the front and backend servers can be started together using the concurrently npm module

**To start both the front and back end concurrently:**

`npm run start:dev`

_Note: to kill both servers, type `ctrl+c` **once** into the terminal_

**To start just the Express + MongoDB backend:**

`npm run start:server`

**To start just the React + Redux frontend:**

`npm run start`

