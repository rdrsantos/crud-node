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

// to add user

router.get("/users/add", (req, res) => {
  res.render("user/add")
})

router.post("/users/adduser", (req, res) => {
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

// to update user
router.get("/users/update/:id", (req, res) => {
  const id = req.params.id
  User.findOne({where: {id}}).then(user => {
    res.render("user/update", {
      user
    })
  })
})

router.post("/users/updateuser/:id", (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const email = req.body.email
  const telephone = req.body.telephone
  User.update({
    name,
    email,
    telephone
  }, 
  {
    where: {id}
  }
  ).then(() => {
    res.redirect("/")
  })
})

// to delete user
router.post("/users/delete", (req, res) => {
  const id = req.body.id
  User.destroy({where: {id}}).then(() => {
    res.redirect("/")
  })
}) 


module.exports = router;