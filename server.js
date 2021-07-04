const express = require("express");
const app = express();
const cors = require("cors");
const moongose = require("mongoose");

app.use(cors());
app.use(express.json());

moongose.connect("mongodb+srv://User:Password@login0.u20gk.mongodb.net/usersDB");

app.use("/", require("./routes/userRoute"));

app.listen(3001, function(){
    console.log("Server is already running");
})