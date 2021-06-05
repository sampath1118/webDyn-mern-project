const express = require('express');
const hbs = require('hbs');
const path = require('path');

const router = require("./routers/router");
const conn = require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

//path setting
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

//middleware
app.use("/bs_css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css/")));
app.use("/bs_js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js/")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist/")));
app.use(express.static(staticpath));
app.use(express.urlencoded({extended: false}));
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialspath);

//routing
app.use(router);

app.listen(port, () => {
    console.log(`server is running at port ${port} just checking once more the committing`);
});