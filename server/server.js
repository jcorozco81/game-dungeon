const express = require("express");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const blogRoute = require("./routes/blogs");
const gameRoute = require("./routes/game");
const db = require("./config/connection");

// test
const path = require("path");
// const routes = require('./routes');
// Test

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();
app.use(express.json());

// Test Start
// app.get('/test', (req, res) => res.sendFile(path.join(__dirname, './test/test.html')));
// app.use(express.static(path.join(__dirname, 'test')));

// Test End
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use("/api/games", gameRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
