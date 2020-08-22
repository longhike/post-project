const express = require("express")
const router = express.Router()

const db = require ('../models')

router.get('/', function (req, res) { 
        console.log(db.Posts);
    db.Posts.findAll({})
    .then(function(data) {
            console.log(data + " just inside the .then of router.get");
        let hbsObject = {
            posts: data
        }
            console.log(hbsObject.posts + " inside posts_controller");
        res.render('index', hbsObject)
    })
 })


module.exports = router
