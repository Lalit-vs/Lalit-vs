require("dotenv").config();
const express = require("express");
const admin = require("../middleware/auth");
const app = express();
app.use(express.json());
const router = new express.Router();
var update =  async function(req,res){
    var data= [1,2,3];
    return res.status(200).json({ "status": true,"data": data });
  }
router.get("/user", function(req,res){
  var data= [1,2,3];
  return res.status(200).json({ "status": true,"data": data });
});

module.exports = router;