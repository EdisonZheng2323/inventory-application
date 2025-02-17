const express = require('express');
const app = express();
const path = require('path');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.listen(3000);