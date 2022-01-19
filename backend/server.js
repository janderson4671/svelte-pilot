// Set up the backend server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: "*"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Set up connection to MongoDB
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pilot", {
    useNewURLParser: true
});

const Schema = mongoose.Schema;

// Define User Schema for database
const userSchema = new Schema({
    name: String,
    occupation: String
});

const User = mongoose.model("User", userSchema);

// REST Api
app.post("/api/upload", async (req, res) => {
    console.log("Made It!");
    console.log(req.body.name);
    console.log(req.body.occupation);
    
    const user = new User({
        name: req.body.name,
        occupation: req.body.occupation
    });

    try {
        await user.save();
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Start the server and listen on port 3000
app.listen(3000, () => console.log("Server.listening on port 3000!"));
