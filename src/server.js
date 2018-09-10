const rp = require("request-promise");
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
var colors = require("colors/safe");

var bodyParser = require('body-parser');

const USERS_DB_URL = "mongodb://vca:Abc1234!@ds151282.mlab.com:51282/login-project";
const USERS_DB_NAME = "login-project";
const USERS_DB_COLLECTİON_NAME = "users";

const app = express();
const port = process.env.port || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(colors.green("Server listening on port " + port));
});

app.post("/signup", async function(req, res){
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  var query = {
    username: username
  };
  console.log("Connecting to database at " + USERS_DB_URL);
  await MongoClient.connect(USERS_DB_URL).then(async db => {
    var dbo = db.db(USERS_DB_NAME);
    await dbo.collection(USERS_DB_COLLECTİON_NAME).find(query).toArray().then(async result => {
      if(result.length !== 0){
        console.log(colors.blue("Duplicate username"));
        console.log(colors.blue("statusCode: 2"));
        res.send({statusCode: 2});
        return;
      }
      else{
        var newUser = {
          username: username,
          email: email,
          password: password
        }
        await dbo.collection(USERS_DB_COLLECTİON_NAME).insertOne(newUser).then((db, err) => {
          if(err){
            console.error(colors.red("Error insering new user"));
            console.error(colors.red("statusCode: -1"));
            console.error(err);
            res.send({statusCode: -1});
            return;
          }
          else{
            console.log(colors.green("New user have been inserted successfully"));
            console.log(colors.green("statusCode: 1"));
            res.send({statusCode: 1});
          }
        }).catch(err => {
          console.error(colors.red("Error inserting new document"));
          console.error(colors.red("statusCode: -1"));
          res.send({statusCode: -1});
          console.error(err);
        })
      }
    }).catch(err => {
      console.error(colors.red("Error in database query"));
      console.error(colors.red("statusCode: -1"));
      res.send({statusCode: -1});
      console.error(err);
    });
  }).catch(err => {
    console.error(colors.red("Error connecting to the database"));
    console.error(colors.red("statusCode: -1"));
    res.send({statusCode: -1});
    console.error(err);
  })
})