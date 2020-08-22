const express = require("express")
const router = express.Router()

const db = require ('../models')

router.get('/', function (req, res) { 
    db.Post.findAll({})
    .then(function(data) {
            console.log(data + " just inside the .then of router.get");
        let hbsObject = {
            posts: data
        }
            console.log(hbsOboject + " inside posts_controller");
        res.render('index', hbsObject)
    })
 })


module.exports = router
