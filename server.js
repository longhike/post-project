const express = require("express")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 8080
const db = require("./models")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())



const exphbs = require("express-handlebars")
const _handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


app.engine("handlebars", exphbs({ 
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(_handlebars)
}));
app.set("view engine", "handlebars");

const routes = require('./controllers/posts_controller');

app.use(routes)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
  