require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars');
const connection = require('./config/connection');
const app = express()

const PORT = process.env.PORT || 3636;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/donut_controller");
app.use(express.static('public'))
app.use(routes);



app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
