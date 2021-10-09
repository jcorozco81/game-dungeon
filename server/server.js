const express = require("express");
const app = express();
const dotenv = require ("dotenv")
const mongoose = require("mongoose")

dotenv.config();

// Confirm databse name
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/gamedungeon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(console.log("Now connected to Mongodb"))
.catch((err) => console.log(err));


app.listen("5000", () => {
    console.log("Backend is running.");
});

