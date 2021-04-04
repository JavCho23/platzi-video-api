const express = require("express");
const { config } = require("./app/config/index");
const InitRoutes = require("./app/router");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello world");
});

InitRoutes(app);

app.get("/json", function (req, res) {
    res.json({ hello: "world" });
});

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
});
