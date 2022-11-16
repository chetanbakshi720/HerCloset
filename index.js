const express = require("express");
const db = require("./routes/db-config");
const app = express();
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");
const port = 5050;
app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());
app.use(express.json());

db.connect((err) => {
    if(err)
        throw err;
    //console.log("Database Connected");
})
app.use("/", require("./routes/pages"));
app.use("/api", require("./controller/auth"));
app.listen(port);