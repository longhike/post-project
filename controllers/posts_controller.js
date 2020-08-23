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
    db.Posts.findAll({ order: [['createdAt', 'DESC']] })
        .then((data) => {
            console.log(data + " just inside the .then of router.get");
            let hbsObject = {
                posts: data
            }
            console.log(hbsObject.posts + " inside posts_controller");
            res.render('index', hbsObject)
        })
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.post('/api/posts', isAuth, async (req, res) => {
    try {
        await db.Posts.create(req.body)
        res.redirect("/")
    } catch (error) {
        res.sendStatus(500)
    }
})


module.exports = router
