const express = require("express");
const router = express.Router();
const User = require("./User")

router.get("/users", (req, res) => {
  User.findAll().then((users) => {
    res.render("user/index", {
      users
    })
  })
})

router.get("/users/add", (req, res) => {
  res.render("user/add")
})

router.post("/adduser", (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const telephone = req.body.telephone
  if(name.length > 0 && email.length > 0 && telephone.length > 0){
    User.create({
      name,
      email,
      telephone
    }).then(() => {
      res.redirect("/")
    })
  } else{
    res.redirect("/users/add")
  }
})

module.exports = router;