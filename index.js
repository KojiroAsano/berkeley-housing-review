var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");

// used to serve static files from public directory
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/comment/post/:housing/:name/:comment", function (req, res) {
  dal
    .post(req.params.housing, req.params.name, req.params.comment)
    //console.log("req", req.params.name,req.params.email,req.params.password);
    .then((comment) => {
      console.log(comment);
      res.send(comment);
    });
});

// find user account
app.get("/comment/:housing/all", function (req, res) {
  dal.findComments(req.params.housing).then((housing) => {
    console.log(housing);
    res.send(housing);
  });
});

function update(email, amount) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .findOneAndUpdate(
        { email: email },
        { $inc: { balance: amount } },
        { returnOriginal: false },
        function (err, documents) {
          err ? reject(err) : resolve(documents);
        }
      );
  });
}

var port = 17893 || process.env.PORT;
app.listen(port);
console.log("Running on port: " + port);
