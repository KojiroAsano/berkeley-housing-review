const MongoClient = require("mongodb").MongoClient;
//const mongoose = require('mongoose');
const url =
  "vmongodb+srv://kojiro:dPS108znIJAxhiOi@cubstartberkeley.jskjval.mongodb.net/?retryWrites=true&w=majority";
// "mongodb+srv://ucbml:sLxOdvNSCtQBvgXl@cluster0.qibty7b.mongodb.net/test";
let db = null;

// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  console.log("Connected successfully to db server");

  // connect to myproject database name
  db = client.db("comment");

  if (err) {
    console.log("error message" + err);
  }
});

// create user account
function post(housing, name, comment) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("comments");
    const doc = { housing, name, comment };
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      err
        ? () => {
            reject(err);
            console.log(err);
          }
        : resolve(doc);
    });
  });
}

// find user account
function findComments(housing) {
  return new Promise((resolve, reject) => {
    const collection = db
      .collection("comments")
      .find({ housing: housing })
      .toArray(function (err, docs) {
        err
          ? () => {
              console.log("errer in find comments", err);
              reject(err);
            }
          : resolve(docs);
      });
  });
}

function agreeOrDisaGree(housing, name, comment, agree, disagree) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("comments")
      .findOneAndUpdate(
        { housing: housing },
        { name: name },
        { comment: comment },
        { $inc: { agree: agree } },
        { $inc: { disagree: disagree } },
        { returnOriginal: false },
        function (err, documents) {
          err ? reject(err) : resolve(documents);
        }
      );
  });
}

module.exports = { findComments, post, agreeOrDisaGree };
