const mongoose = require("mongoose");
require("dotenv").config();
const DATABASE = process.env.DATABASE;
const dbconnect = () => {
  mongoose
    .connect(DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database is connected succsfully....");
    })
    .catch((err) => {
      console.log("error in db connection");
      console.log(err.message);
    });
};
module.exports = dbconnect;
