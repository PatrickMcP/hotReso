//  "/" = homepage
//  "/tables" = table reservation html
//  "/api" = return api directions page
//  "/api/tables" = tables reserved data
//  "/api/waitlist" = waitlist data

let express = require("express");
let path = require("path");
let tables = [];
let waitlist = [];
let app = express();
let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "/html/home.html"));
});

app.get("/reserve", function(req, res) {
   res.sendFile(path.join(__dirname, "/html/make.html"));
});

app.get("/tables", function(req, res) {
   res.sendFile(path.join(__dirname, "/html/tables.html"));
});

app.get("/api/tables", function(req, res) {
   return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
   return res.json(waitlist);
});

app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    newReservation.routeName = newReservation.customerName.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);
    if (tables.length < 5) tables.push(newReservation);
    else waitlist.push(newReservation);
    res.json(newReservation);
   });

app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});