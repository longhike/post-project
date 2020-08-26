const express = require("express")
const router = express.Router()

const db = require('../models')
const passport = require("../config/passport");
const isAuth = require('../config/middleware/isAuthenticated')

router.post("/login", passport.authenticate('local'), (req, res) => {
    res.redirect("/")
})

router.post("/signup", async (req, res) => {
    try {
        await db.User.create(req.body)
        res.redirect("/login")
    } catch (error) {
        res.sendStatus(500)
    }
})

router.get('/', isAuth, (req, res) => {

    let userIdent = req.user.id
    console.log(userIdent);

    db.Posts.findAll({ 
        order: [['createdAt', 'DESC']],
        where: {
           UserId: userIdent
        }
    })
    .then((data) => {
        if (data) {
        console.log(data + " just inside the .then of router.get");
        let hbsObject = {
            posts: data
        }
        console.log(hbsObject.posts + " inside posts_controller");
        res.render('index', hbsObject)
        }
        else {
            res.render('index')
        }
    })
    .catch(() => {
        res.sendStatus(500)
    })
    
})

// post post 
router.post('/api/posts', isAuth, (req, res) => {
    // let paramsId = req.params.id
    let userIdent = req.user.id
    console.log(req.body);
    console.log(userIdent);
    // console.log(db);
    console.log(db.Posts);

    console.log(typeof db.Posts.song_title);
    console.log(db.Posts.song_title);

    const newPost = db.Posts.build({
        username: req.body.username,
        song_title: req.body.song_title,
        song_artist: req.body.song_artist,
        user_inst: req.body.user_inst,
        user_post: req.body.user_post,
        UserId: userIdent
    })
    console.log(newPost);
    console.log(newPost.dataValues);
    db.Posts.create(newPost.dataValues).then(() => {
        res.redirect('/')
    })
         
 })

// sign-up get
router.get("/signup", (req, res) => {
    res.render("signup")
})

// login get
router.get("/login", (req, res) => {
    res.render("login")
})

// logout get
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})




module.exports = router
