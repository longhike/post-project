const express = require("express")
const router = express.Router()

const db = require ('../models')

router.get('/', (req, res) => { 
        console.log(db.Posts);
    db.Posts.findAll({})
    .then((data) => {
            console.log(data + " just inside the .then of router.get");
        let hbsObject = {
            posts: data
        }
            console.log(hbsObject.posts + " inside posts_controller");
        res.render('index', hbsObject)
    })
 })


router.post('/api/posts', (req, res) => {
    db.Posts.create(
        {
            username: req.body.username,
            user_post: req.body.user_post
        }
    )
    .then((result) => { 
        res.json({id: result.insertID})
     })
})





module.exports = router
