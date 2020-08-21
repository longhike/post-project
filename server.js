const express = require("express")

const PORT = process.env.PORT || 8080
const db = require("./models")

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes")(app)
// require("./routes/api-routes")(app)

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})




// db.sequelize.sync().then(() => {
//     app.listen(PORT, () => {
//       console.log(
//         "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//         PORT,
//         PORT
//       );
//     });
//   });
  