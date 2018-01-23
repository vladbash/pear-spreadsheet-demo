const express = require("express");
const manifee = require("./mocks/manifee").data;

const app = express();

app.get("/data", (req, res) => {
    res.send("12,32,76\n12,32,76");
});

app.get("/manifee/:start/:end", (req, res) => {
    console.log(req.params);
    res.send(manifee);
});

app.listen(3000, () => {
    console.log("listening on 3000 port");
});