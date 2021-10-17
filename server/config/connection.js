const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/gamedungeon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(console.log("Now connected to Mongodb"))
.catch((err) => console.log(err));

module.exports = mongoose.connection;
