const express = require("express");
const app = express()
const {connection} = require("./database/database")
const User = require("./users/User")

// data base
connection.authenticate()

// view engine
app.set("view engine", "ejs")

// body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// static 
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(8080)