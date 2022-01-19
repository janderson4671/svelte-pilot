# Introduction

This is a simple pilot project I made to test out the Svelte frontend framework. It shows a simple webpage with input boxes for your name and occupation. You can then submit that information and save it in a local MongoDB database. Feel free to look around the project and get familiar with Svelte :)

# How to start

Clone this repository locally and open it in the IDE or text editor of your choice.

## Install node packages

Both the frontend and backend of this project have node modules they depend on. They will need to be installed before being able to run properly

```bash
# install node modules for backend
cd ./backend/
npm install

# install node modules for frontend
cd ../frontend/
npm install
```

## Installing MongoDB

The project depends on MongoDB to handle the database collections. Make sure that you have MongoDB (Community Edition) running on your machine. Here are some instructions on how to download MongoDB for different operating systems. (https://docs.mongodb.com/manual/installation/)

Once that is installed, start the mongo shell with this command

```bash
mongosh
```

This will allow you to interface with databases and collections within MongoDB. In the mongo shell run this command

```bash
use pilot
```

This creates a new database called "pilot". The pilot app is already configured to store information in a database called "pilot"

Close out of the mongo shell.

## Running the Backend Server

The backend server is configured to run locally on port 3000. To start the server run the following command in the "backend" folder

```bash
# start node server
node server.js
```

You will need this to be running in order for the entire app to store data in the database.

## Running the Webpage

In a different terminal window, run this command to start the webpage.

```bash
# start the webpage
npm run dev
```

This will run the website locally on port 8080 (http://localhost:8080)

# Test the Website

Once you submit the information in the input boxes, an alert should appear saying "Registered to System!" If you see this message then everything has been set up correctly. 

## See information in MongoDB

After you have submitted a couple of names and occupations you can go back to the mongo shell and see the information there. Here is how to find that information

```bash
mongosh
```

Inside mongo shell use these commands

```bash
use pilot
db.users.find()
```

This should show you all the information you submitted on the webpage.