const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.route("/createUser").post((req, res)=>{
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
        user,
        email,
        password
    });

    newUser.save();
})

router.route("/users").get((req, res)=>{
    User.find()
    .then(users => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateUser/:id").put((req, res)=>{
    const updatedUser = {
        user: req.body.user,
        email : req.body.email,
        password : req.body.password,
    };

    User.findByIdAndUpdate({ _id: req.params.id}, {$set: updatedUser}, (req, res, err)=>{
        if(!err){
            console.log("User updated")
        }else{
            console.log(err);
        }
    })

});


router.route("/deleteUser/:id").delete((req, res)=>{
    const id = req.params.id;

    User.findByIdAndDelete({ _id: id}, (req, res, err)=>{
        if(!err){
            console.log("User deleted")
        }else{
            console.log(err);
        }
    })

});

module.exports = router;