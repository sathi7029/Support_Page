const express = require("express");
const app = express();

require("dotenv").config();
const FRONT = process.env.FRONT;
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(
  cors({
    origin: FRONT, // Replace with the URL of your frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable cookies and other credentials
  })
);

//Port number
app.listen(PORT, () => {
  console.log("app is running on port 3000");
});

//Getting
app.get("/", (req, res) => {
  res.send("hello from express server :)");
});

app.use(express.json());

const data = require("./router/router");

app.use("/api", data);

const dbConnect = require("./database/database");
dbConnect();
