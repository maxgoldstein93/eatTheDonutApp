const express = require('express')
const exphbs  = require('express-handlebars');
const app = express()

const PORT = process.env.PORT || 3636;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res)=>{
    res.render("index");
});




app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  