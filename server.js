const express = require("express")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 8080
const db = require("./models")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
;


const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require('./controllers/posts_controller');

app.use(routes)

// require("./routes/html-routes")(app)


// app.listen(PORT, () => {
//     console.log("Listening on port " + PORT);
// })




db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
  