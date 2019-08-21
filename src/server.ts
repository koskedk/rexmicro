import express from "express";
import * as path from "path";

// Create a new express application instance
const app: express.Application = express();

// // viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname ,'/index.html'));
// });

app.get("/api", function(req, res) {
    res.send("Hello World API!");
});

app.get("/api/tasks", function(req, res) {
    res.send([
        {"id": 1, "name": "Run"},
        {"id": 2, "name": "Walk"},
        {"id": 3, "name": "Swim"}
    ])
});


app.listen(3001, function() {
    console.log("Example app listening on port 3001!");
});
