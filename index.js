const express = require("express");
const { config } = require("./app/config/index");
const InitRoutes = require("./app/router");
const SetMiddlewares = require("./app/middlewares");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello world");
});

InitRoutes(app);
SetMiddlewares(app);

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
});
